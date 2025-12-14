import Link from 'next/link'
import { notFound } from 'next/navigation'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { getPostById, getAllPosts } from '@/lib/posts'
import { convertDatesToNerd } from '@/lib/era-dates'
import { getRatingData } from '@/app/actions/ratings'
import PostRating from '@/app/components/PostRating'

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    id: post.id,
  }))
}

export default async function PostPage({ params }: { params: { id: string } }) {
  const post = getPostById(params.id)

  if (!post) {
    notFound()
  }

  const { likeCount, userRating } = await getRatingData(params.id)

  return (
    <>
      <Link href="/" className="back-link">
        ← Back to all posts
      </Link>
      <article className="post-content">
        <header className="post-header">
          <h1 className="post-title">{post.title}</h1>
          <div className="post-meta">
          <span title={new Date(post.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}>{convertDatesToNerd(new Date(post.date))}</span>
            <span>•</span>
            <span>{post.author}</span>
          </div>
        </header>
        <div className="post-body markdown-content">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post.content}
          </ReactMarkdown>
        </div>
        <PostRating 
          postId={params.id}
          initialLikeCount={likeCount}
          initialUserRating={userRating}
        />
      </article>
    </>
  )
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const post = getPostById(params.id)
  
  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: `${post.title} | The Elder Ghrols`,
    description: post.excerpt,
  }
}
