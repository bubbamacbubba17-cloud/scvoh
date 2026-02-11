import Head from 'next/head';

export default function Layout({ title, description, children }) {
  const pageTitle = title ? `${title} | Santa Clarita Open Houses` : 'Santa Clarita Open Houses';
  const pageDesc = description || 'Santa Clarita seller-first real estate insights, open house strategy, and local market intelligence.';

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDesc} />
      </Head>
      <div style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
        <header style={{ backgroundColor: '#111827', color: '#f9fafb', padding: '1rem 0' }}>
          <div style={{ maxWidth: 1040, margin: '0 auto', padding: '0 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontWeight: 700, letterSpacing: '0.04em', fontSize: '0.8rem', textTransform: 'uppercase' }}>
                SantaClaritaOpenHouses.com
              </div>
              <div style={{ fontSize: '0.8rem', opacity: 0.85 }}>Connor with Honor · First Responder Realtor</div>
            </div>
            <nav style={{ display: 'flex', gap: '1rem', fontSize: '0.9rem' }}>
              <a href="/" style={{ color: '#e5e7eb', textDecoration: 'none' }}>Home</a>
              <a href="/blog" style={{ color: '#e5e7eb', textDecoration: 'none' }}>Blog</a>
              <a href="/homes/valencia" style={{ color: '#e5e7eb', textDecoration: 'none' }}>Valencia</a>
              <a href="/homes/saugus" style={{ color: '#e5e7eb', textDecoration: 'none' }}>Saugus</a>
            </nav>
          </div>
        </header>

        <main style={{ maxWidth: 1040, margin: '0 auto', padding: '2rem 1.5rem 3rem' }}>{children}</main>

        <footer style={{ borderTop: '1px solid #e5e7eb', padding: '1.5rem 0', fontSize: '0.8rem', color: '#4b5563' }}>
          <div style={{ maxWidth: 1040, margin: '0 auto', padding: '0 1.5rem', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
            <div>
              &copy; {new Date().getFullYear()} SantaClaritaOpenHouses.com · Connor MacIvor · DRE #01238257
            </div>
            <div>
              This is educational information, not legal or financial advice.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
