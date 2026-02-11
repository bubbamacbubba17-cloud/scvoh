import Layout from '../../components/Layout';
import { useEffect } from 'react';

export default function StrategyCall() {
  // ensure the HonorElevate embed script is loaded on client
  useEffect(() => {
    const existing = document.querySelector('script[data-he-embed="TMqIuqam1A7MBAgrm2hk"]');
    if (existing) return;
    const script = document.createElement('script');
    script.src = 'https://api.honorelevate.com/js/form_embed.js';
    script.type = 'text/javascript';
    script.async = true;
    script.setAttribute('data-he-embed', 'TMqIuqam1A7MBAgrm2hk');
    document.body.appendChild(script);
  }, []);

  return (
    <Layout
      title="Book a Strategy Call"
      description="Schedule a private Zoom strategy call with Connor with Honor to plan your Santa Clarita real estate moves."
    >
      <article style={{ maxWidth: 760 }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem' }}>
          Schedule Your Santa Clarita Strategy Call
        </h1>
        <p style={{ marginBottom: '1rem' }}>
          Use the calendar below to book a private strategy call. We will review your situation, your timing, and the
          neighborhoods you are considering – and I will tell you what I would do if I were in your shoes.
        </p>
        <div style={{ marginTop: '1.5rem' }}>
          {/* HonorElevate booking widget */}
          <iframe
            src="https://api.honorelevate.com/widget/booking/TMqIuqam1A7MBAgrm2hk"
            style={{ width: '100%', border: 'none', overflow: 'hidden', minHeight: '720px' }}
            scrolling="no"
            id="TMqIuqam1A7MBAgrm2hk_1770838778661"
            title="Strategy Call Booking"
          />
        </div>
      </article>
    </Layout>
  );
}
