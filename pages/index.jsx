import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout
      title="Santa Clarita Open Houses – Seller-First Real Estate"
      description="Santa Clarita open houses, seller-first strategy, and local market intelligence from Connor with Honor."
    >
      <section style={{ maxWidth: 760 }}>
        <h1 style={{ fontSize: '2.2rem', fontWeight: 700, marginBottom: '1rem' }}>
          Santa Clarita Open Houses, Built for Sellers First
        </h1>
        <p style={{ marginBottom: '1rem' }}>
          Most real estate sites in Santa Clarita were built to capture buyer leads. This one is different. SantaClaritaOpenHouses.com
          is being rebuilt from the ground up to put Santa Clarita home sellers first – with clear strategy, data, and
          straight talk from a First Responder Realtor.
        </p>
        <p style={{ marginBottom: '1.5rem' }}>
          You will see this site evolve quickly as we migrate the best of the legacy content, standardize seller-first
          templates, and layer in deeper market intelligence for Valencia, Saugus, Canyon Country, Newhall, Stevenson Ranch,
          Castaic, and the rest of Santa Clarita Valley.
        </p>
        <p style={{ marginBottom: '0.75rem' }}>
          In the meantime, start here:
        </p>
        <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.2rem' }}>
          <li>
            <a href="/blog" style={{ color: '#2563eb', textDecoration: 'none' }}>
              Read the Santa Clarita seller-first blog
            </a>
          </li>
          <li>
            <a
              href="/blog/investigate-your-neighbors-before-you-buy-in-santa-clarita"
              style={{ color: '#2563eb', textDecoration: 'none' }}
            >
              Learn how to investigate neighbors before you buy in Santa Clarita
            </a>
          </li>
        </ul>
        <p style={{ fontSize: '0.9rem', color: '#4b5563' }}>
          As we build, your feedback matters. If there is a specific seller question you want answered – pricing, timing,
          commission changes, open houses, or market risk – reach out and I will make sure it gets covered.
        </p>
      </section>
    </Layout>
  );
}
