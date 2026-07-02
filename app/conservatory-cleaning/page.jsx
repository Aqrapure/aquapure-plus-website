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
        We professionally clean conservatory roofs, removing dirt, algae and surface grime to restore a brighter, cleaner appearance.
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
        <li>✓ All types of conservatory roof cleaned</li>
        <li>✓ Frames, roof bars and panels cleaned</li>
        <li>✓ Careful exterior cleaning by a local team</li>
        <li>✓ Free, no-obligation quotations</li>
      </ul>

      <h2>Conservatory Roof Cleaning</h2>

<p>
  Over time conservatory roofs collect algae, moss, dirt and atmospheric pollution,
  leaving them looking tired and reducing the amount of natural light entering your home.
</p>

<p>
  We carefully clean conservatory roofs, roof bars and frames using purified water
  and specialist equipment to achieve excellent results without harsh chemicals.
</p>

<h2>Important Information</h2>

<p>
  Most conservatory roofs respond extremely well to professional cleaning. However,
  older polycarbonate roofs can become permanently stained or discoloured due to UV
  exposure and age. Cleaning removes dirt, algae and organic growth, but permanent
  staining cannot be removed.
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
