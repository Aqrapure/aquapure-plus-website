export const metadata = {
  title: "Conservatory Roof Cleaning Northampton | Aquapure Plus",
  description:
    "Professional conservatory roof cleaning throughout Northampton and surrounding villages. Restore its appearance and help bring more natural light into your home. Prices from £60.",
};

export default function ConservatoryRoofCleaningPage() {
  const phoneMain = "07456871686";

  const whatsappMessage = encodeURIComponent(
    "Hello, can we arrange a quote for conservatory roof cleaning on my property, thanks."
  );

  return (
    <main style={container}>
      <h1>Conservatory Roof Cleaning Northampton</h1>

      <p style={introText}>
        Restore the appearance of your conservatory roof and help bring more
        natural light back into your home.
      </p>

      <p>
        Aquapure Plus provides professional conservatory roof cleaning
        throughout Northampton and the surrounding villages. We work safely,
        efficiently and with care for your property and surroundings.
      </p>

      <p style={priceStyle}>Prices from £60</p>

      <p style={priceNote}>
        Every conservatory is individually quoted based on its size, design and
        access, ensuring you receive a fair and accurate price.
      </p>

      <div style={buttonContainer}>
        <a href={`tel:${phoneMain}`} style={buttonStyle}>
          Call Us
        </a>

        <a
          href={`https://wa.me/44${phoneMain.slice(1)}?text=${whatsappMessage}`}
          style={whatsappStyle}
        >
          WhatsApp
        </a>
      </div>

      <img
        src="/Conservatory Roof clean 2.JPG"
        alt="Conservatory roof cleaned by Aquapure Plus in Northampton"
        style={heroImageStyle}
      />

      <section style={sectionStyle}>
        <h2>Our Conservatory Roof Cleaning Service</h2>

        <p>
          Whether your conservatory has a glass or polycarbonate roof, we
          carefully clean the roof, framework and surrounding areas to restore
          its appearance and help bring more natural light back into your home.
        </p>

        <p>
          Every conservatory is treated with care, using suitable professional
          equipment and cleaning methods appropriate for the property.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2>A Careful and Professional Approach</h2>

        <p>
          Customers are looking for more than a clean roof. They want someone
          who will complete the work safely, efficiently and to a satisfactory
          standard while respecting their home.
        </p>

        <p>
          We take care around windows, frames, surrounding surfaces and garden
          areas throughout the work, leaving your conservatory looking cleaner,
          brighter and better cared for.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2>Why Choose Aquapure Plus?</h2>

        <ul style={listStyle}>
          <li>✓ Over 15 years serving Northampton</li>
          <li>✓ Reliable, professional local service</li>
          <li>✓ Glass and polycarbonate roofs cleaned</li>
          <li>✓ Suitable professional cleaning equipment</li>
          <li>✓ Respectful treatment of your home and surroundings</li>
          <li>✓ Fully insured</li>
          <li>✓ Free, no-obligation quotations</li>
        </ul>
      </section>

      <section style={promiseStyle}>
        <h2 style={{ marginTop: 0 }}>The Aquapure Plus Promise</h2>

        <p style={promiseText}>
          We take pride in delivering a reliable, professional service with
          respect for your home and surroundings. Every property is treated
          with the same care and attention we would expect for our own.
        </p>
      </section>

      <section style={quoteSection}>
        <h2>Request a Free Quote</h2>

        <p>
          Contact Aquapure Plus for a free, no-obligation conservatory roof
          cleaning quotation.
        </p>

        <div style={buttonContainer}>
          <a href={`tel:${phoneMain}`} style={buttonStyle}>
            Call Us
          </a>

          <a
            href={`https://wa.me/44${phoneMain.slice(1)}?text=${whatsappMessage}`}
            style={whatsappStyle}
          >
            WhatsApp
          </a>
        </div>
      </section>

      <div style={homeLinkContainer}>
        <a href="/" style={homeLinkStyle}>
          ← Return to Homepage
        </a>
      </div>
    </main>
  );
}

const container = {
  maxWidth: "1000px",
  margin: "0 auto",
  padding: "35px 20px 60px",
  fontFamily: "Arial, sans-serif",
  lineHeight: "1.7",
  color: "#222",
};

const introText = {
  fontSize: "1.25rem",
  fontWeight: "bold",
  color: "#0b6e4f",
};

const priceStyle = {
  fontSize: "1.3rem",
  fontWeight: "bold",
  color: "#0b6e4f",
  margin: "25px 0 5px",
};

const priceNote = {
  fontStyle: "italic",
  marginBottom: "25px",
};

const buttonContainer = {
  display: "flex",
  flexWrap: "wrap",
  gap: "12px",
  margin: "25px 0",
};

const buttonStyle = {
  display: "inline-block",
  padding: "12px 22px",
  backgroundColor: "#1261a0",
  color: "white",
  textDecoration: "none",
  borderRadius: "6px",
  fontWeight: "bold",
};

const whatsappStyle = {
  display: "inline-block",
  padding: "12px 22px",
  backgroundColor: "#198754",
  color: "white",
  textDecoration: "none",
  borderRadius: "6px",
  fontWeight: "bold",
};

const heroImageStyle = {
  display: "block",
  width: "100%",
  maxHeight: "540px",
  objectFit: "cover",
  borderRadius: "10px",
  margin: "30px 0",
};

const sectionStyle = {
  marginTop: "40px",
};

const listStyle = {
  listStyle: "none",
  paddingLeft: "0",
  lineHeight: "2",
};

const promiseStyle = {
  marginTop: "45px",
  padding: "28px",
  backgroundColor: "#eef7f3",
  borderRadius: "10px",
  textAlign: "center",
};

const promiseText = {
  fontSize: "1.15rem",
  fontWeight: "bold",
  marginBottom: "0",
};

const quoteSection = {
  marginTop: "45px",
  textAlign: "center",
};

const homeLinkContainer = {
  marginTop: "45px",
  textAlign: "center",
};

const homeLinkStyle = {
  color: "#1261a0",
  fontWeight: "bold",
  textDecoration: "none",
};
