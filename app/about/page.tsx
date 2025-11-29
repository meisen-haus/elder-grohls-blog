import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About | The Chronicle',
  description: 'Discover the origins of The Chronicle and the tales it holds',
}

export default function AboutPage() {
  return (
    <>
      <h1 className="page-title">⚔ About the Chronicle ⚔</h1>
      <div className="post-content">
        <div className="post-body markdown-content">
          <p>
            Welcome, traveler, to The Chronicle! Within these ancient pages lie tales of wisdom, 
            adventure, and knowledge from distant realms. Forged with the arcane arts of Next.js, 
            React, and TypeScript, this tome preserves stories for all eternity.
          </p>

          <h2>About This Chronicle</h2>
          <p>
            This repository of wisdom was crafted to demonstrate the mystical powers of modern 
            web sorcery. Each entry is inscribed in the sacred language of Markdown, allowing 
            scribes to record their tales without the burden of complex incantations.
          </p>

          <h2>Powers & Enchantments</h2>
          <ul>
            <li>Forged with Next.js 14 and the mystical App Router</li>
            <li>Markdown runes for content preservation</li>
            <li>Static generation for swift page manifestation</li>
            <li>Responsive enchantments that adapt to all viewing crystals</li>
            <li>Ornate UI styled with ancient CSS scrolls</li>
            <li>Quick scribe ritual via <code>npm run new-post</code></li>
          </ul>

          <h2>Arcane Technologies</h2>
          <ul>
            <li><strong>Next.js</strong> - The foundational framework of power</li>
            <li><strong>React</strong> - Spells for conjuring interface elements</li>
            <li><strong>TypeScript</strong> - Protective wards ensuring code integrity</li>
            <li><strong>React Markdown</strong> - Ancient runes rendered visible</li>
            <li><strong>gray-matter</strong> - Decoder of mystical frontmatter</li>
          </ul>

          <h2>The Chronicler</h2>
          <p>
            Here lies the story of the keeper of these records! Share thy journey, the quests 
            that brought thee to this realm, and the knowledge thou seeks to impart upon fellow 
            travelers and adventurers.
          </p>
          <p>
            Customize these words to weave thy own legend and forge bonds with those who 
            traverse these digital realms.
          </p>

          <h2>Summon the Chronicler</h2>
          <p>
            Seek to establish communication? The Chronicler may be reached through:
          </p>
          <ul>
            <li>The Bird Realm: <a href="https://twitter.com/yourusername">@yourusername</a></li>
            <li>The Code Repository: <a href="https://github.com/yourusername">@yourusername</a></li>
            <li>Magical Scroll: your.email@example.com</li>
          </ul>
        </div>
      </div>
    </>
  )
}

