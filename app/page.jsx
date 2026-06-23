export default function Home() {
  const phoneMark = '07456871686';
  const phoneRoy = '07448863669';
  const freephone = '08006250628';
  const email = 'info@aquapure-plus.co.uk';
  const whatsappMessage = encodeURIComponent(
    'Hello, can we arrange quote for window cleaning on my property, thanks.'
  );

  return (
    <main>
      <section style={{ padding: '10px', textAlign: 'center' }}>
       <img
 src="/AQUAPURE%20LOGO.png"
  alt="Aquapure Plus"
 style={{
  maxWidth: '550px',
  width: '95%',
  display: 'block',
  margin: '0 auto -80px auto'
}}
/>


        
        
        <h2 style={{
  fontSize: '3.2rem',
  marginBottom: '15px',
  color: '#0067d8',
  maxWidth: '1200px',
  margin: '0 auto 15px auto'
}}>
  Trusted Window Cleaners in Northampton Since 2006
</h2>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
  Professional window cleaning, gutter clearing, conservatory roof cleaning and exterior cleaning services across Northampton and surrounding areas.
</p>

        <p><strong>Mark:</strong> 07456 871686</p>
        <p><strong>Roy:</strong> 07448 863669</p>
        <p><strong>Freephone:</strong> 0800 625 0628</p>

        <a href={`tel:${phoneMark}`} style={buttonStyle}>Call Mark</a>
        <a
          href={`https://wa.me/44${phoneMark.slice(1)}?text=${whatsappMessage}`}
          style={greenButtonStyle}
        >
          WhatsApp Us
        </a>
      </section>

      <section style={sectionStyle}>
        <h2>Our Services</h2>
        <div style={gridStyle}>
          {[
  ['Window Cleaning', 'Regular and one-off pure water window cleaning for homes and small businesses.'],
  ['Conservatory Roof Cleaning', 'Professional cleaning of conservatory roofs, frames and glass panels.'],
  ['Gutter Clearing', 'Professional gutter clearing using our gutter vacuum system to safely remove leaves, moss and debris from gutters without the need for ladders in most situations.'],
  ['Fascia & Soffit Cleaning', 'Restore the appearance of your property with exterior UPVC cleaning.'],
  ['Patio Pressure Washing', 'Pressure washing for patios, paths and outdoor hard surfaces.'],
  ['Driveway Pressure Washing', 'NEW SERVICE - Driveway and patio pressure washing to restore surfaces and improve kerb appeal.'],
].map(([title, text]) => (
            <div key={title} style={cardStyle}>
  <img
    src={
  title === 'Window Cleaning' ? '/house window - van.jpg' :
  title === 'Conservatory Roof Cleaning' ? '/Conservatory Roof clean 2.JPG' :
  title === 'Gutter Clearing' ? '/gutter-vacuum.jpg.jpg' :
  title === 'Fascia & Soffit Cleaning' ? '/Facia - Exteria Gutter clean.png' :
  title === 'Patio Pressure Washing' ? '/Pattio Pressure Wash.jpg' :

 title === 'Driveway Pressure Washing' ? '/driveway-before-after.jpg' :
      '/house 1.jpg'
}

    alt={title}
    style={imageStyle}
  />
  <h3>{title}</h3>
  <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>{text}</p>
</div>
          ))}
        </div>
      </section>

      <section style={sectionStyle}>
        <h2>Why Choose Aquapure Plus?</h2>
        <p style={{ textAlign: 'center', fontSize: '1.1rem', marginBottom: '30px' }}>
  Trusted window cleaning and exterior cleaning services across Northampton since 2006.
</p>

<div style={gridStyle}>

  <div style={cardStyle}>
    <strong>Regular Reliable 4 or 8 Weekly Service Rounds</strong>
    <p>Scheduled window cleaning available on our regular 4 or 8 weekly rounds.</p>
  </div>

  <div style={cardStyle}>
    <strong>Text Reminder Before Every Visit</strong>
    <p>We'll send you a text the day before your scheduled clean.</p>
  </div>

  <div style={cardStyle}>
    <strong>Established Since 2006</strong>
    <p>Nearly 20 years serving Northampton homeowners and businesses.</p>
  </div>

  <div style={cardStyle}>
    <strong>Residential & Commercial Properties</strong>
    <p>Professional window cleaning services for homes, offices and commercial premises.</p>
  </div>

  <div style={cardStyle}>
    <strong>Pure Water Window Cleaning System</strong>
    <p>Streak-free results using modern pure water cleaning systems.</p>
  </div>

  <div style={cardStyle}>
    <strong>Frames, Sills & UPVC Doors Included</strong>
    <p>A complete clean every visit, not just the glass.</p>
  </div>

  <div style={cardStyle}>
    <strong>Friendly Local Team</strong>
    <p>Local Northampton service with a reputation built on customer care.</p>
  </div>

  <div style={cardStyle}>
    <strong>Gutter Vacuum Cleaning System</strong>
    <p>Safe high-level gutter clearing without ladders in most situations.</p>
  </div>

  <div style={cardStyle}>
    <strong>Fully Insured</strong>
    <p>Professional service with complete peace of mind.</p>
  </div>

  <div style={cardStyle}>
    <strong>Free No-Obligation Quotations</strong>
    <p>Honest pricing with no pressure or hidden costs.</p>
  </div>

</div>
      </section>

      <section style={sectionStyle}>
  <h2>Recent Work Across Northampton</h2>
  <p style={{ textAlign: 'center', fontSize: '1.1rem', marginBottom: '30px' }}>
    A selection of window cleaning, gutter clearing, conservatory cleaning and exterior cleaning work carried out locally.
  </p>

      <div style={galleryStyle}>
  <img src="/house-stock.jpg" alt="Residential window cleaning Northampton" style={imageStyle} />

  <img src="/glass-roof1-after.jpg" alt="Conservatory roof cleaning Northampton" style={imageStyle} />

 <img src="/gutter-before .jpg" alt="Gutter cleaning Northampton" style={imageStyle} />

  <img src="/driveway-before-after.jpg" alt="Driveway pressure washing Northampton" style={imageStyle} />

  <img src="/pressure-wash.jpg" alt="Patio pressure washing Northampton" style={imageStyle} />

  <img src="/commercial-one.jpg" alt="Commercial window cleaning Northampton" style={imageStyle} />
</div>
      </section>

      <section style={sectionStyle}>
        <h2>Areas Covered</h2>
        <p style={{ textAlign: 'center' }}>
          We cover Northampton and surrounding villages within approximately 8–10 miles.
        </p>
        <p style={{ textAlign: 'center' }}>
          Northampton • Kingsthorpe • Duston • Moulton • Wootton • Boughton • West Hunsbury • Upton
        </p>
      </section>

      <section style={{ ...sectionStyle, background: '#0b2347', color: 'white' }}>
        <h2 style={{ color: 'white' }}>Request a Free Quote</h2>
        <p><strong>Mark:</strong> 07456 871686</p>
        <p><strong>Roy:</strong> 07448 863669</p>
        <p><strong>Freephone:</strong> 0800 625 0628</p>
        <p><strong>Email:</strong> {email}</p>

        <a href={`tel:${phoneMark}`} style={buttonStyle}>Call Now</a>
        <a
          href={`https://wa.me/44${phoneMark.slice(1)}?text=${whatsappMessage}`}
          style={greenButtonStyle}
        >
          WhatsApp Quote
        </a>
      </section>
    </main>
  );
}

const sectionStyle = {
  padding: '50px 25px',
  maxWidth: '1100px',
  margin: '0 auto',
};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
  gap: '20px',
};

const galleryStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
  gap: '18px',
  marginTop: '25px',
};

const cardStyle = {
  padding: '22px',
  border: '1px solid #ddd',
  borderRadius: '12px',
  background: '#ffffff',
  boxShadow: '0 4px 14px rgba(0,0,0,0.08)',
};

const imageStyle = {
  width: '100%',
  height: '230px',
  objectFit: 'cover',
  borderRadius: '12px',
};

const buttonStyle = {
  display: 'inline-block',
  margin: '10px',
  padding: '12px 20px',
  borderRadius: '8px',
  background: '#0067d8',
  color: '#fff',
  fontWeight: 'bold',
};

const greenButtonStyle = {
  ...buttonStyle,
  background: '#2bbf4b',
};
