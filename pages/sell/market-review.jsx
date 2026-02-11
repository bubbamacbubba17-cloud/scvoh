import Layout from '../../components/Layout';

export default function MarketReview() {
  return (
    <Layout
      title="Request a Santa Clarita Market Review"
      description="Tell Connor with Honor about your Santa Clarita home so he can prepare a seller-focused market review and strategy."
    >
      <article style={{ maxWidth: 760 }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem' }}>
          Request a Santa Clarita Market Review
        </h1>
        <p style={{ marginBottom: '1rem' }}>
          If you are thinking about selling in Santa Clarita in the next 6–18 months and want a straight, seller-first review
          of your position, use the form below. I will look at your home, your micro-location, and current market conditions and
          tell you what I would do if I were in your shoes.
        </p>
        <p style={{ marginBottom: '1.5rem' }}>
          This is not an automated Zestimate. I will personally review your information and follow up.
        </p>
        <form
          name="scv-market-review"
          method="post"
          data-netlify="true"
          netlify-honeypot="bot-field"
          style={{
            backgroundColor: '#ffffff',
            padding: '1.25rem 1.5rem',
            borderRadius: '0.5rem',
            border: '1px solid #e5e7eb',
            boxShadow: '0 10px 15px -3px rgba(0,0,0,0.07)',
            maxWidth: 640,
          }}
        >
          {/* Netlify form requirements */}
          <input type="hidden" name="form-name" value="scv-market-review" />
          <p style={{ display: 'none' }}>
            <label>
              Dont fill this out if youre human: <input name="bot-field" />
            </label>
          </p>

          <div style={{ marginBottom: '0.9rem' }}>
            <label htmlFor="name" style={{ display: 'block', fontSize: '0.9rem', marginBottom: '0.25rem' }}>
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              style={{
                width: '100%',
                padding: '0.5rem 0.6rem',
                borderRadius: '0.375rem',
                border: '1px solid #d1d5db',
                fontSize: '0.95rem',
              }}
            />
          </div>

          <div style={{ marginBottom: '0.9rem' }}>
            <label htmlFor="email" style={{ display: 'block', fontSize: '0.9rem', marginBottom: '0.25rem' }}>
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              style={{
                width: '100%',
                padding: '0.5rem 0.6rem',
                borderRadius: '0.375rem',
                border: '1px solid #d1d5db',
                fontSize: '0.95rem',
              }}
            />
          </div>

          <div style={{ marginBottom: '0.9rem' }}>
            <label htmlFor="phone" style={{ display: 'block', fontSize: '0.9rem', marginBottom: '0.25rem' }}>
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              style={{
                width: '100%',
                padding: '0.5rem 0.6rem',
                borderRadius: '0.375rem',
                border: '1px solid #d1d5db',
                fontSize: '0.95rem',
              }}
            />
          </div>

          <div style={{ marginBottom: '0.9rem' }}>
            <label htmlFor="address" style={{ display: 'block', fontSize: '0.9rem', marginBottom: '0.25rem' }}>
              Property Address
            </label>
            <input
              id="address"
              name="address"
              type="text"
              required
              style={{
                width: '100%',
                padding: '0.5rem 0.6rem',
                borderRadius: '0.375rem',
                border: '1px solid #d1d5db',
                fontSize: '0.95rem',
              }}
            />
          </div>

          <div style={{ marginBottom: '0.9rem' }}>
            <label htmlFor="timing" style={{ display: 'block', fontSize: '0.9rem', marginBottom: '0.25rem' }}>
              When are you thinking about selling?
            </label>
            <input
              id="timing"
              name="timing"
              type="text"
              placeholder="e.g., 3–6 months, 12 months, just exploring"
              style={{
                width: '100%',
                padding: '0.5rem 0.6rem',
                borderRadius: '0.375rem',
                border: '1px solid #d1d5db',
                fontSize: '0.95rem',
              }}
            />
          </div>

          <div style={{ marginBottom: '1.1rem' }}>
            <label htmlFor="notes" style={{ display: 'block', fontSize: '0.9rem', marginBottom: '0.25rem' }}>
              Anything else I should know?
            </label>
            <textarea
              id="notes"
              name="notes"
              rows={4}
              style={{
                width: '100%',
                padding: '0.5rem 0.6rem',
                borderRadius: '0.375rem',
                border: '1px solid #d1d5db',
                fontSize: '0.95rem',
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              padding: '0.6rem 1rem',
              backgroundColor: '#111827',
              color: '#f9fafb',
              border: 'none',
              borderRadius: '0.375rem',
              fontSize: '0.95rem',
              cursor: 'pointer',
            }}
          >
            Send my market review request
          </button>
        </form>
      </article>
    </Layout>
  );
}
