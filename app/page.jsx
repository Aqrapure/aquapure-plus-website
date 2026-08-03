import Link from 'next/link';
export default function Home() {
  const phoneMark = '07849459812';
  const phoneRoy = '07448863669';
  const freephone = '08006250628';
  const email = 'info@aquapure-plus.co.uk';
  const whatsappMessage = encodeURIComponent(
    'Hello, can we arrange quote for window cleaning on my property, thanks.'
  );

  return (
    <main>
      <section style={{ padding: '05px', textAlign: 'center' }}>
       <img
 src="/AQUAPURE%20LOGO.png"
  alt="Aquapure Plus"
 style={{
  maxWidth: '550px',
  width: '95%',
  display: 'block',
  margin: '0 auto 10px auto'
}}
/>


        
        
        <h2 style={{
  fontSize: 'clamp(2.6rem, 8vw, 3.2rem)',
  marginBottom: '10px',
  color: '#0067d8',
  maxWidth: '1200px',
  margin: '0 auto 15px auto'
}}>
  Trusted Window Cleaners Serving Northampton
</h2>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
  Professional window cleaning, gutter clearing, conservatory roof cleaning and exterior cleaning.

Serving Northampton homes and businesses for over 15 years.
</p>

        <p><strong>Mark:</strong> 07849 459812</p>
        <p><strong>Roy:</strong> 07448 863669</p>
        <p><strong>Freephone:</strong> 0800 625 0628</p>

        <a href={`tel:${phoneMark}`} style={buttonStyle}>Call Us</a>
        <a
          href={`https://wa.me/44${phoneMark.slice(1)}?text=${whatsappMessage}`}
          style={greenButtonStyle}
        >
          WhatsApp Us
        </a>
      </section>

      <section style={{ ...sectionStyle, paddingTop: '20px' }}>
        <h2>Our Services</h2>
        <div style={gridStyle}>
         {[
  [
    "Window Cleaning",
    "Regular reliable window cleaning for residential and commercial properties.",
    "/window-cleaning",
    "/house window - van.jpg",
  ],
  [
    "Conservatory Roof Cleaning",
    "Cleaning of conservatory roofs, frames and panels to restore their appearance.",
    "/conservatory-roof-cleaning",
    "/Conservatory Roof clean 2.JPG",
  ],
  [
    "Gutter Clearing",
    "Professional gutter clearing using our powerful gutter vacuum system to keep rainwater flowing freely.",
    "/gutter-cleaning",
    "/gutter-vacuum-service.jpg",
  ],
  [
    "Fascia & Soffit Cleaning",
    "Restore the appearance of your property with fascia, soffit and exterior uPVC cleaning.",
    "/fascia-soffit-cleaning",
    "/Facia - Exteria Gutter clean.png",
  ],
  [
    "Pressure Washing",
    "Professional pressure washing for driveways, patios, paths and outdoor surfaces.",
    "/pressure-washing",
    "/driveway-before-after.jpg",
  ],
].map(([title, text, pageLink, imageSrc]) => (
  <Link
    key={title}
    href={pageLink}
    style={{
      textDecoration: "none",
      color: "inherit",
      display: "block",
    }}
  >
    <div
      style={{
        ...cardStyle,
        cursor: "pointer",
        height: "100%",
        boxSizing: "border-box",
      }}
    >
      <img src={imageSrc} alt={title} style={imageStyle} />

      <h3>{title}</h3>

      <p style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
        {text}
      </p>

      <p
        style={{
          color: "#0b5fa5",
          fontWeight: "bold",
          marginTop: "15px",
          marginBottom: "0",
        }}
      >
        View service details →
      </p>
    </div>
  </Link>
))}
        </div>
      </section>

      <section style={sectionStyle}>
        <h2>Why Choose Aquapure Plus?</h2>
        <p style={{ textAlign: 'center', fontSize: '1.1rem', marginBottom: '30px' }}>
 Reliable local service with professional results you can depend on.
</p>

<div style={gridStyle}>

  <div style={cardStyle}>
  <strong>Regular Reliable 4 or 8 Weekly Service Rounds</strong>
  <p>Reliable window cleaning on our regular 4 or 8 weekly service rounds.</p>
</div>

  <div style={cardStyle}>
    <strong>Text Reminder Before Every Visit</strong>
    <p>We'll send you a text the day before your scheduled clean.</p>
  </div>

  <div style={cardStyle}>
    <strong>Over 15 Years Serving Northampton</strong>
    <p>More than 15 years serving Northampton homeowners and businesses.</p>
  </div>

  <div style={cardStyle}>
    <strong>Residential & Commercial Properties</strong>
    <p>Professional window cleaning services for homes and commercial premises.</p>
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
 <h2 style={{ textAlign: "center" }}>
  Our Commitment
</h2>

  <p style={{ maxWidth: '800px', margin: '0 auto 25px', textAlign: 'center', lineHeight: '1.7' }}>
  Aquapure Plus provides reliable exterior cleaning services across Northampton and the surrounding villages. We take pride in delivering excellent results with friendly, reliable service.
</p>

<p style={{ maxWidth: '800px', margin: '0 auto 25px', textAlign: 'center', lineHeight: '1.7' }}>
  We believe in turning up when we say we will, doing the job properly and treating every customer's property with care and respect.
</p>

  <p style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center", lineHeight: "1.7" }}>
    Our aim is simple: to leave every customer happy enough to recommend us to family, friends and neighbours. 
    If you're ever not completely satisfied, let us know and we'll do everything we can to make it right.
  </p>
</section>
<section style={sectionStyle}>
  <h2>What Our Customers Say</h2>

  <div style={gridStyle}>
    <div style={cardStyle}>
      <strong>★★★★★</strong>
      <p>Reliable service. Windows are always left spotless and the text reminders are very helpful.</p>
      <p><em>– Billing Customer</em></p>
    </div>

    <div style={cardStyle}>
      <strong>★★★★★</strong>
      <p>Conservatory roof came up like new. Friendly service and fair pricing.</p>
      <p><em>– Duston Customer</em></p>
    </div>

    <div style={cardStyle}>
      <strong>★★★★★</strong>
      <p>Have used Aquapure Plus for years. Always reliable and excellent results.</p>
      <p><em>– Kingsthorpe Customer</em></p>
    </div>
  </div>
</section>
      <section style={sectionStyle}>
  <h2>Recent Results Across Northampton</h2>
  <p style={{ textAlign: 'center', fontSize: '1.1rem', marginBottom: '30px' }}>
    A selection of our recent work.
  </p>

      <div style={galleryStyle}>
 <img
  src="/house-stock.jpg"
  alt="Residential window cleaning Northampton"
  style={imageStyle}
/>

<img
  src="/exterior-fascia-soffit-gutter-clean.JPG"
  alt="Fascia and exterior gutter cleaning Northampton"
  style={imageStyle}
/>

<img
  src="/new-gutter-before.jpg"
  alt="Blocked gutter before professional clearing"
  style={imageStyle}
/>

<img
  src="/new-gutter-after.jpg"
  alt="Gutter after professional clearing"
  style={imageStyle}
/>

<img
  src="/conservatory-roof-before.JPG"
  alt="Conservatory roof before professional cleaning"
  style={imageStyle}
/>

<img
  src="/conservatory-roof-after.JPG"
  alt="Conservatory roof after professional cleaning"
  style={imageStyle}
/>
        
<img
  src="/driveway-before-after.jpg"
  alt="Driveway pressure washing before and after"
  style={imageStyle}
/>

<img
  src="/patio-pressure-wash.jpg"
  alt="Patio pressure washing Northampton"
  style={imageStyle}
/>
</div>
      </section>

      <section style={sectionStyle}>
        <h2>Areas We Cover</h2>
       <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 20px' }}>
  We provide regular window cleaning, gutter clearing, conservatory roof cleaning
  and exterior cleaning services throughout Northampton and the surrounding villages.
</p>

<p style={{ textAlign: 'center' }}>
  Areas regularly covered include:
</p>

<p style={{ textAlign: 'center' }}>
  Kingsthorpe • Duston • Moulton • Wootton • Boughton •
  West Hunsbury • East Hunsbury • Upton • Grange Park • Denton
</p>

<p style={{ textAlign: 'center' }}>
  Other nearby villages considered on request.
</p>
      </section>

      <section style={{ ...sectionStyle, background: '#0b2347', color: 'white' }}>
        <h2 style={{ color: 'white' }}>Request a Free Quote</h2>
        <p style={{ marginBottom: "20px", lineHeight: "1.6" }}>
  Fully insured local window cleaners serving Northampton and surrounding villages.
  <br />
  Contact us today for a free, no-obligation quote.
</p>
        <p><strong>Mark:</strong> 07849 459812</p>
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
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
  gap: "20px",
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
