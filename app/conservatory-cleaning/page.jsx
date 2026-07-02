export default function ConservatoryCleaningPage() {
  const phoneMark = '07456871686';
  const whatsappMessage = encodeURIComponent(
    'Hello, can we arrange a quote for conservatory cleaning on my property, thanks.'
  );

  return (
    <main style={{ padding: '40px 25px', maxWidth: '1100px', margin: '0 auto' }}>
      <h1>Conservatory Roof Cleaning Northampton</h1>

      <p style={{ fontSize: '1.25rem', lineHeight: '1.7', marginBottom: '20px' }}>
        Professional conservatory roof cleaning for homes across Northampton and surrounding villages.
      </p>

      <p style={{ fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '25px' }}>
        We regularly clean polycarbonate and glass conservatory roofs, removing dirt, algae and green staining to restore a brighter, cleaner appearance.
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
        <li>✓ Established since 2006</li>
        <li>✓ Polycarbonate and glass roof cleaning</li>
        <li>✓ Frames, roof bars and panels cleaned</li>
        <li>✓ Careful exterior cleaning by a local team</li>
        <li>✓ Free, no-obligation quotations</li>
      </ul>

      <h2>Polycarbonate Conservatory Roof Cleaning</h2>

      <p>
        Most conservatory roofs we clean are polycarbonate roofs, which often become green or dull over time. Regular cleaning removes algae, dirt and weather staining to restore a brighter appearance.
      </p>

      <h2>Glass Conservatory Roof Cleaning</h2>

      <p>
        We also clean glass conservatory roofs, frames and exterior panels using purified water for a spotless finish.
      </p>

      <h2>Request a Free Quote</h2>

      <p>
        Contact Aquapure Plus today for a free conservatory roof cleaning quotation in Northampton and surrounding villages.
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
