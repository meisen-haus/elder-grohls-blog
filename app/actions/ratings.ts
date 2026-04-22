'use server'

import { headers } from 'next/headers'
import { createHash } from 'crypto'
import { supabase } from '@/lib/supabase'
import * as Sentry from '@sentry/nextjs'

function hashIP(ip: string): string {
  return createHash('sha256').update(ip).digest('hex')
}

async function getHashedIP(): Promise<string> {
  const headersList = await headers()
  const forwardedFor = headersList.get('x-forwarded-for')
  const realIP = headersList.get('x-real-ip')
  const ip = forwardedFor?.split(',')[0]?.trim() || realIP || 'unknown'
  return hashIP(ip)
}

export async function getRatingData(postId: string): Promise<{
  likeCount: number
  userRating: number | null
}> {
  const hashedIp = await getHashedIP()

  // Get total like count for this post
  const { count: likeCount, error: countError } = await supabase
    .from('ratings')
    .select('*', { count: 'exact', head: true })
    .eq('post_id', postId)
    .eq('rating', 1)

  if (countError) {
    Sentry.captureException(countError)
  }

  // Check if user has already rated this post
  const { data: userRatingData, error: userError } = await supabase
    .from('ratings')
    .select('rating')
    .eq('post_id', postId)
    .eq('hashed_ip', hashedIp)
    .maybeSingle()

  if (userError) {
    Sentry.captureException(userError)
  }

  return {
    likeCount: likeCount ?? 0,
    userRating: userRatingData?.rating ?? null,
  }
}

export async function submitRating(postId: string, rating: 0 | 1): Promise<{
  success: boolean
  likeCount: number
  userRating: number | null
  error?: string
}> {
  const hashedIp = await getHashedIP()

  // Check if user has already rated this post
  const { data: existingRating, error: existingError } = await supabase
    .from('ratings')
    .select('id')
    .eq('post_id', postId)
    .eq('hashed_ip', hashedIp)
    .maybeSingle()

  if (existingError) {
    Sentry.captureException(existingError)
  }

  if (existingRating) {
    Sentry.logger.warn('Duplicate rating attempt', { post_id: postId })
    const data = await getRatingData(postId)
    return {
      success: false,
      ...data,
      error: 'You have already rated this post',
    }
  }

  // Insert new rating
  const { error: insertError } = await supabase
    .from('ratings')
    .insert({
      post_id: postId,
      hashed_ip: hashedIp,
      rating: rating,
    })

  if (insertError) {
    Sentry.captureException(insertError)
    Sentry.logger.error('Failed to insert rating', { post_id: postId, reason: insertError.message })
    const data = await getRatingData(postId)
    return {
      success: false,
      ...data,
      error: 'Failed to submit rating',
    }
  }

  const ratingType = rating === 1 ? 'like' : 'dislike'

  Sentry.metrics.count('article.rating', 1, {
    attributes: { type: ratingType, post_id: postId },
  })

  Sentry.logger.info('Rating submitted', { post_id: postId, type: ratingType })

  // Get updated counts
  const data = await getRatingData(postId)
  return {
    success: true,
    ...data,
  }
}

