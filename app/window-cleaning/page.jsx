export default function WindowCleaningPage() {
  const phoneMark = '07456871686';
  const whatsappMessage = encodeURIComponent(
    'Hello, can we arrange quote for window cleaning on my property, thanks.'
  );

  return (
    <main style={{ padding: '40px 25px', maxWidth: '1100px', margin: '0 auto' }}>
      <h1>Window Cleaning Northampton</h1>

      <p style={{ fontSize: '1.25rem', lineHeight: '1.7', marginBottom: '20px' }}>
  Reliable regular and one-off window cleaning for homes, offices and commercial premises across Northampton and surrounding villages.
</p>
 

<p style={{ fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '25px' }}>
  Established since 2006, Aquapure Plus provides professional pure water window cleaning with frames, sills and UPVC doors included as standard.
</p>

<a href={`tel:${phoneMark}`} style={buttonStyle}>Call Mark</a>
<a
  href={`https://wa.me/44${phoneMark.slice(1)}?text=${whatsappMessage}`}
  style={whatsappStyle}
>
  WhatsApp Quote
</a>

      <img
        src="/stock-twobed-house.jpg"
        alt="Residential window cleaning Northampton"
        style={{ width: '100%', maxHeight: '420px', objectFit: 'cover', borderRadius: '14px', margin: '25px 0' }}
      />

      <h2>Regular Window Cleaning Service</h2>
      <p>
        Our regular window cleaning rounds are available every 4 or 8 weeks, helping keep
        your windows, frames, sills and UPVC doors looking clean all year round.
      </p>

      <h2>Pure Water Cleaning System</h2>
      <p>
        We use a modern pure water window cleaning system for a streak-free finish without
        the need for harsh chemicals. This allows us to clean safely from the ground in many cases.
      </p>

      <h2>What’s Included?</h2>
      <ul>
        <li>Window glass cleaned</li>
        <li>Frames and sills included</li>
        <li>UPVC doors included</li>
        <li>Text reminder sent the day before your scheduled clean</li>
        <li>Regular 4 or 8 weekly rounds available</li>
        <li>One-off cleans welcomed</li>
      </ul>

      <h2>Request a Free Quote</h2>
      <p>
        For regular window cleaning or a one-off clean in Northampton, contact Aquapure Plus today.
      </p>

      <a href={`tel:${phoneMark}`} style={buttonStyle}>Call Mark</a>
      <a
        href={`https://wa.me/44${phoneMark.slice(1)}?text=${whatsappMessage}`}
        style={whatsappStyle}
      >
        WhatsApp Quote
      </a>
    </main>
  );
}

const buttonStyle = {
  display: 'inline-block',
  margin: '10px 10px 10px 0',
  padding: '14px 24px',
  borderRadius: '8px',
  background: '#0067d8',
  color: '#fff',
  fontWeight: 'bold',
  textDecoration: 'none',
};

const whatsappStyle = {
  ...buttonStyle,
  background: '#2bbf4b',
};
