import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'

export default function Home() {
  const posts = getAllPosts()

  return (
    <>
      <h1 className="page-title">The Elder Grohls</h1>
      <div className="post-list">
        {posts.map((post) => (
          <Link href={`/posts/${post.id}`}>
            <article key={post.id} className="post-card">
              <h2>
                  {post.title}
              </h2>
              <div className="post-meta">
                <span>{new Date(post.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
                <span>•</span>
                <span>{post.author}</span>
              </div>
              <p className="post-excerpt">{post.excerpt}</p>
            </article>
          </Link>
        ))}
      </div>
    </>
  )
}


