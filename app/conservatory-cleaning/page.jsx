export default function ConservatoryCleaningPage() {
  const phoneMark = '07456871686';
  const whatsappMessage = encodeURIComponent(
    'Hello, can we arrange a quote for conservatory cleaning on my property, thanks.'
  );

  return (
    <main style={{ padding: '40px 25px', maxWidth: '1100px', margin: '0 auto' }}>
      <h1>Conservatory Roof Cleaning Northampton</h1>

      <p>
  Professional conservatory roof cleaning for homes across Northampton and
  surrounding villages.
</p>

     <p>
  Aquapure Plus carefully cleans conservatory roofs, roof bars and frames,
  removing surface dirt, algae and organic growth to improve their overall
  appearance.
</p>

      <div style={buttonContainer}>
        <a href={`tel:${phoneMark}`} style={buttonStyle}>
          Call Mark
        </a>

        <a
          href={`https://wa.me/44${phoneMark.slice(1)}?text=${whatsappMessage}`}
          style={whatsappStyle}
        >
          WhatsApp
        </a>
      </div>

      <img
  src="/conservatory-roof-before.JPG"
  alt="Conservatory roof before cleaning"
  style={{
    width: "100%",
    borderRadius: "14px",
    margin: "25px 0"
  }}
/>

<img
  src="/conservatory-roof-after.JPG"
  alt="Conservatory roof after cleaning"
  style={{
    width: "100%",
    borderRadius: "14px",
    margin: "25px 0"
  }}
/>

      <h2>Why Choose Aquapure Plus?</h2>

      <ul>
  <li>✓ Over 15 years serving Northampton</li>
  <li>✓ Glass and polycarbonate conservatory roofs cleaned</li>
  <li>✓ Roof panels, bars and exterior frames included</li>
  <li>✓ Careful cleaning methods for lasting results</li>
  <li>✓ Free, no-obligation quotations</li>
</ul>

      <h2>Conservatory Roof Cleaning</h2>

<p>
  Conservatory roofs can collect algae, moss, dirt and general outdoor grime
  over time.
</p>

<p>
 We clean roof panels, bars and exterior frames to restore the appearance of your conservatory roof.
</p>

<h2>Please Note</h2>

<p>
  Cleaning removes surface dirt, algae and organic growth. However, older
  polycarbonate roofs may have permanent staining or age-related
  discolouration within the material, which cleaning cannot remove.
</p>

      <h2>Request a Free Quote</h2>

      <p>
  Contact us today for your free, no-obligation quote.
</p>

      <div style={buttonContainer}>
        <a href={`tel:${phoneMark}`} style={buttonStyle}>
          Call Mark
        </a>

        <a
          href={`https://wa.me/44${phoneMark.slice(1)}?text=${whatsappMessage}`}
          style={whatsappStyle}
        >
          WhatsApp
        </a>
      </div>
    </main>
  );
}

const buttonContainer = {
  display: 'flex',
  gap: '15px',
  margin: '30px 0'
};

const buttonStyle = {
  display: 'block',
  flex: 1,
  margin: '10px 10px 10px 0',
  padding: '14px 24px',
  borderRadius: '8px',
  background: '#0067d8',
  color: '#fff',
  fontWeight: 'bold',
  textDecoration: 'none',
  textAlign: 'center'
};

const whatsappStyle = {
  ...buttonStyle,
  background: '#2bbf4b'
};
