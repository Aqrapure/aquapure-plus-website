export default function WindowCleaningPage() {
  const phoneMark = '07456871686';
  const whatsappMessage = encodeURIComponent(
    'Hello, can we arrange quote for window cleaning on my property, thanks.'
  );

  return (
    <main style={{ padding: '40px 25px', maxWidth: '1100px', margin: '0 auto' }}>
      <h1>Window Cleaning Northampton</h1>

      <p style={{ fontSize: '1.25rem', lineHeight: '1.7', marginBottom: '20px' }}>
  Regular reiable window cleaning for homes, offices and commercial premises across Northampton and surrounding villages.
</p>
 

<p style={{ fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '25px' }}>
  Established since 2006, Aquapure Plus provides professional pure water window cleaning with frames, sills and UPVC doors included as standard.
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
        src="/stock-twobed-house.jpg"
        alt="Residential window cleaning Northampton"
        style={{ width: '100%', maxHeight: '660px', objectFit: 'cover', borderRadius: '14px', margin: '25px 0' }}
      />

      <h2>Why Choose Aquapure Plus?</h2>

<ul>
  <li>✓ Established since 2006</li>
  <li>✓ Reliable 4 or 8 weekly cleaning rounds</li>
  <li>✓ Pure water window cleaning system</li>
  <li>✓ Frames, sills and UPVC doors included</li>
  <li>✓ Friendly text reminder before every clean</li>
  <li>✓ One-off cleanS welcomed</li>
  <li>✓ Free, no-obligation quotations</li>
</ul>

      <h2>Pure Water Cleaning System</h2>
      <p>
        We use a modern pure water window cleaning system for a streak-free finish without
        the need for harsh chemicals. This allows us to clean safely from the ground in many cases.
      </p>
<h2>Request a Free Quote</h2>

<p>
  For regular window cleaning or a one-off clean in Northampton,
  contact Aquapure Plus today.
</p>
      <div style={buttonContainer}>
  <a href={`tel:${phoneMark}`} style={buttonStyle}>
    Call Mark
  </a>

  <a
    href={`https://wa.me/44${phoneMark.slice(1)}?text=${whatsappMessage}`}
    style={whatsappStyle}
  >
    WhatsApp Quote
  </a>
</div>
        
    </main>
  );
}

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
};
const buttonContainer = {
  display: "flex",
  gap: "15px",
  margin: "30px 0",
};
const whatsappStyle = {
  ...buttonStyle,
  background: '#2bbf4b',
};
