import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About | Simple Blog',
  description: 'Learn more about this blog and its author',
}

export default function AboutPage() {
  return (
    <>
      <h1 className="page-title">About</h1>
      <div className="post-content">
        <div className="post-body markdown-content">
          <p>
            Welcome to Simple Blog! This is a modern, minimalist blog built with Next.js, 
            React, and TypeScript, designed to showcase the power of static site generation 
            and markdown-based content management.
          </p>

          <h2>About This Blog</h2>
          <p>
            This blog was created as a demonstration of how easy it is to build a fast, 
            SEO-friendly blog using Next.js. All blog posts are written in Markdown, making 
            it simple to create and manage content without the need for a complex CMS.
          </p>

          <h2>Features</h2>
          <ul>
            <li>Built with Next.js 14 and the App Router</li>
            <li>Markdown-based content management</li>
            <li>Static site generation for optimal performance</li>
            <li>Responsive design that works on all devices</li>
            <li>Clean, modern UI with custom CSS</li>
            <li>Easy post creation with the <code>npm run new-post</code> script</li>
          </ul>

          <h2>Technology Stack</h2>
          <ul>
            <li><strong>Next.js</strong> - React framework with App Router</li>
            <li><strong>React</strong> - UI library</li>
            <li><strong>TypeScript</strong> - Type safety and better developer experience</li>
            <li><strong>React Markdown</strong> - Markdown rendering</li>
            <li><strong>gray-matter</strong> - Frontmatter parsing</li>
          </ul>

          <h2>About the Author</h2>
          <p>
            This is where you can write about yourself! Share your background, interests, 
            what inspired you to start this blog, and what topics you're passionate about.
          </p>
          <p>
            Feel free to customize this page to tell your unique story and connect with 
            your readers.
          </p>

          <h2>Get in Touch</h2>
          <p>
            Want to connect? You can find me on:
          </p>
          <ul>
            <li>Twitter: <a href="https://twitter.com/yourusername">@yourusername</a></li>
            <li>GitHub: <a href="https://github.com/yourusername">@yourusername</a></li>
            <li>Email: your.email@example.com</li>
          </ul>
        </div>
      </div>
    </>
  )
}

