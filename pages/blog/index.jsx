import Link from 'next/link';
import Layout from '../../components/Layout';

const posts = [
  {
    slug: 'investigate-your-neighbors-before-you-buy-in-santa-clarita',
    title: 'Before You Buy in Santa Clarita: How to Investigate the Neighbors (Without Being Weird)',
    description:
      'A First Responder Realtor\'s process for checking neighbors, street dynamics, and future resale risk before you commit to a Santa Clarita home.',
  },
];

export default function BlogIndex() {
  return (
    <Layout title="Blog" description="Santa Clarita seller-first guides, open house strategy, and market intelligence.">
      <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1.5rem' }}>Santa Clarita Real Estate Blog</h1>
      <p style={{ marginBottom: '1.5rem', maxWidth: 700 }}>
        Seller-first and street-smart guidance for Santa Clarita home sellers and serious buyers. No fluff, no emojis, just
        what you actually need to know.
      </p>
      <div style={{ display: 'grid', gap: '1.5rem' }}>
        {posts.map((post) => (
          <article
            key={post.slug}
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '0.5rem',
              padding: '1.25rem 1.5rem',
              boxShadow: '0 10px 15px -3px rgba(0,0,0,0.07)',
              border: '1px solid #e5e7eb',
            }}
          >
            <h2 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '0.5rem' }}>
              <Link href={`/blog/${post.slug}`} style={{ color: '#111827', textDecoration: 'none' }}>
                {post.title}
              </Link>
            </h2>
            <p style={{ fontSize: '0.95rem', color: '#4b5563', marginBottom: '0.75rem' }}>{post.description}</p>
            <Link href={`/blog/${post.slug}`} style={{ fontSize: '0.9rem', color: '#2563eb' }}>
              Read article
            </Link>
          </article>
        ))}
      </div>
    </Layout>
  );
}
