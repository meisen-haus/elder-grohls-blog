import type { Metadata } from 'next'
import Image from "next/image";
import author from "@/public/author.png";

export const metadata: Metadata = {
  title: 'About | Elder Ghrols',
  description: 'A sometimes Morrowind blog.',
}

export default function AboutPage() {
  return (
    <>
      <h1 className="page-title">About The Elder Ghrols</h1>
      <div className="post-content">
        <div className="post-body markdown-content">
          <p>
            The Elder Ghrols is a sometimes-Morrowind blog; a place to share my thoughts and observations about games, Elder Scrolls, and other topics that peak my interest.
          </p>

          <h2>About This Blog</h2>
          <p>
            This blog is built with Next.js 14. It is hosted on Vercel. This blog exists primarily as a <s>dog</s> cat fooding exercise for my day job.
          </p>

          <h2>Dwemer Artifacts And Sacred Tones</h2>
          <ul>
            <li><strong>Next.js</strong></li>
            <li><strong>React</strong></li>
            <li><strong>TypeScript</strong></li>
            <li><strong>React Markdown</strong></li>
            <li><strong>gray-matter</strong></li>
          </ul>

          <h2>About the Author</h2>
          <Image
            src={author}
            alt="It's a me, Nick Meisenhaus"
            className="author"
          />
          <p>
          My name is Nicholas Meisenheimer. I am a recovering Knowledge Manager, Customer Advocate, tinkerer, and connoisseur of the unhappy path.
          </p>


          <h2>Summon Scamp</h2>
          <p>
            Has there been some sort of disturbance at Huleen's hut? Reach me at:
          </p>
          <ul>
            <li>Twitter: <a href="https://twitter.com/nickmeisenhaus">@nickmeisenhaus</a></li>
            <li>GitHub: <a href="https://github.com/souredoutlook">@souredoutlook</a></li>
          </ul>
        </div>
      </div>
    </>
  )
}

