'use client'

import { useState, useTransition } from 'react'
import { submitRating } from '@/app/actions/ratings'

interface PostRatingProps {
  postId: string
  initialLikeCount: number
  initialUserRating: number | null
}

export default function PostRating({
  postId,
  initialLikeCount,
  initialUserRating,
}: PostRatingProps) {
  const [likeCount, setLikeCount] = useState(initialLikeCount)
  const [userRating, setUserRating] = useState<number | null>(initialUserRating)
  const [isPending, startTransition] = useTransition()

  const hasRated = userRating !== null

  const handleRate = (rating: 0 | 1) => {
    if (hasRated || isPending) return

    startTransition(async () => {
      const result = await submitRating(postId, rating)
      setLikeCount(result.likeCount)
      setUserRating(result.userRating)
    })
  }

  return (
    <div className="post-rating">
      <div className="rating-buttons">
        <button
          className={`rating-btn like-btn ${userRating === 1 ? 'active' : ''} ${hasRated && userRating !== 1 ? 'disabled-other' : ''}`}
          onClick={() => handleRate(1)}
          disabled={hasRated || isPending}
          title={hasRated ? 'You have already rated this post' : 'Like this post'}
          aria-label="Like"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            width="24"
            height="24"
            className="rating-icon"
          >
            <path d="M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 0 1 6 15.375c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V3a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23h-.777ZM2.331 10.977a11.969 11.969 0 0 0-.831 4.398 12 12 0 0 0 .52 3.507c.26.85 1.084 1.368 1.973 1.368H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 0 1-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227Z" />
          </svg>
          <span className="rating-count">{likeCount}</span>
        </button>

        <button
          className={`rating-btn dislike-btn ${userRating === 0 ? 'active' : ''} ${hasRated && userRating !== 0 ? 'disabled-other' : ''}`}
          onClick={() => handleRate(0)}
          disabled={hasRated || isPending}
          title={hasRated ? 'You have already rated this post' : 'Dislike this post'}
          aria-label="Dislike"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            width="24"
            height="24"
            className="rating-icon"
          >
            <path d="M15.73 5.5h1.035A7.465 7.465 0 0 1 18 9.625a7.465 7.465 0 0 1-1.235 4.125h-.148c-.806 0-1.534.446-2.031 1.08a9.04 9.04 0 0 1-2.861 2.4c-.723.384-1.35.956-1.653 1.715a4.499 4.499 0 0 0-.322 1.672v.633a.75.75 0 0 1-.75.75 2.25 2.25 0 0 1-2.25-2.25c0-1.152.26-2.243.723-3.218.266-.558-.107-1.282-.725-1.282H3.622c-1.026 0-1.945-.694-2.054-1.715A12.137 12.137 0 0 1 1.5 12.25c0-2.848.992-5.464 2.649-7.521C4.537 4.247 5.136 4 5.754 4H9.77a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23ZM21.669 14.023c.536-1.362.831-2.845.831-4.398 0-1.22-.182-2.398-.52-3.507-.26-.85-1.084-1.368-1.973-1.368H19.1c-.445 0-.72.498-.523.898.591 1.2.924 2.55.924 3.977a8.958 8.958 0 0 1-1.302 4.666c-.245.403.028.959.5.959h1.053c.832 0 1.612-.453 1.918-1.227Z" />
          </svg>
        </button>
      </div>
      
      {hasRated && (
        <p className="rating-message">
          {userRating === 1 ? 'You flatter me with your attention, outlander.' : 'You\'ve already rated this post.'}
        </p>
      )}

      {isPending && (
        <p className="rating-message">Submitting...</p>
      )}
    </div>
  )
}

