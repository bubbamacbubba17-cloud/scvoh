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

        <div style={{ marginTop: '1.5rem' }}>
          {/* HonorElevate SCV market review form embed */}
          <iframe
            src="https://api.honorelevate.com/widget/form/tfSNT5veEIECXZqinyQn"
            style={{ width: '100%', height: '1652px', border: 'none', borderRadius: '3px' }}
            id="inline-tfSNT5veEIECXZqinyQn"
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="Bubba - SCV market review"
            data-height="1652"
            data-layout-iframe-id="inline-tfSNT5veEIECXZqinyQn"
            data-form-id="tfSNT5veEIECXZqinyQn"
            title="Bubba - SCV market review"
          />
          <script src="https://api.honorelevate.com/js/form_embed.js" type="text/javascript" />
        </div>
      </article>
    </Layout>
  );
}
