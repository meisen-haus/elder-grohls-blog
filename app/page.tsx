import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'
import { convertDatesToNerd } from '@/lib/era-dates'

export default function Home() {
  const posts = getAllPosts()

  return (
    <>
      <h1 className="page-title">The Elder Grohls</h1>
      <div className="post-list">
        {posts.map((post) => {
          const dateObj = new Date(post.date)
          const realDate = dateObj.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })
        
          return (
            <Link href={`/posts/${post.id}`} key={post.id}>
              <article className="post-card">
                <h2>
                    {post.title}
                </h2>
                <div className="post-meta">
                  <span title={realDate}>{convertDatesToNerd(dateObj)}</span>
                  <span className='post-meta-separator'>•</span>
                  <span>{post.author}</span>
                </div>
                <p className="post-excerpt">{post.excerpt}</p>
              </article>
            </Link>
          )
        })}
      </div>
    </>
  )
}


