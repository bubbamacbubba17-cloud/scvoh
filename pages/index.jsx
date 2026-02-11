import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Santa Clarita Open Houses – New Site Shell</title>
        <meta
          name="description"
          content="Santa Clarita seller-first content engine – prototype shell."
        />
      </Head>
      <main style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', padding: '2rem', maxWidth: 960, margin: '0 auto' }}>
        <h1>Santa Clarita Open Houses – v1 Shell</h1>
        <p>
          This is the new standalone site we&apos;re building to replace the legacy vendor pages.
        </p>
        <p>
          Next steps: wiring in blog content, seller-first templates, and IDX-powered area pages.
        </p>
      </main>
    </>
  );
}
