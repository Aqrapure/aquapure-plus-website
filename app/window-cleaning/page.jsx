export default function WindowCleaningPage() {
  const phoneMark = "07456871686";

  const whatsappMessage = encodeURIComponent(
    "Hello, can we arrange a quote for window cleaning on my property, thanks."
  );

  return (
    <main style={container}>
      <h1>Window Cleaning Northampton</h1>

      <p>
        Reliable professional window cleaning for homes, offices and commercial
        premises across Northampton and surrounding villages.
      </p>

      <p>
        Aquapure Plus has provided regular window cleaning services since 2006.
        Every property is cleaned carefully using professional pure-water
        equipment.
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
        src="/spotlessly-clean.JPG"
        alt="Spotlessly clean windows completed by Aquapure Plus in Northampton"
        style={imageStyle}
      />

      <h2>Why Choose Aquapure Plus?</h2>

      <ul>
        <li>✓ Established since 2006</li>
        <li>✓ Reliable 4 or 8 weekly service rounds</li>
        <li>✓ Pure-water window cleaning</li>
        <li>✓ Frames, sills and uPVC doors included</li>
        <li>✓ Text reminder sent the day before</li>
        <li>✓ Residential and commercial properties</li>
        <li>✓ Fully insured</li>
        <li>✓ Free, no-obligation quotations</li>
      </ul>

      <h2>Our Window Cleaning Service</h2>

      <p>
        We clean windows, frames, sills and uPVC doors as part of every regular
        visit.
      </p>

      <p>
        Our professional equipment allows us to clean safely from the ground in
        most situations while treating every property with care and respect.
      </p>

      <p>
        Customers can choose a regular 4 weekly or 8 weekly service, with a text
        reminder sent the day before we are due.
      </p>

      <h2>Residential & Commercial Window Cleaning</h2>

      <p>
        We provide window cleaning for houses, offices and suitable commercial
        premises throughout Northampton and nearby villages.
      </p>

      <p>
        Whether you require a regular home window clean or a dependable service
        for commercial premises, Aquapure Plus provides the same professional
        standard on every visit.
      </p>

      <h2>Request a Free Quote</h2>

      <p>
        Contact Aquapure Plus today for a free no-obligation quotation in
        Northampton and surrounding villages.
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

const container = {
  maxWidth: "900px",
  margin: "0 auto",
  padding: "40px 24px",
  color: "#0b2347",
  fontFamily: "Arial, sans-serif",
  lineHeight: "1.6",
};

const buttonContainer = {
  display: "flex",
  gap: "20px",
  margin: "35px 0",
};

const buttonStyle = {
  flex: 1,
  background: "#0875df",
  color: "white",
  textDecoration: "none",
  textAlign: "center",
  padding: "18px 12px",
  borderRadius: "14px",
  fontWeight: "bold",
  fontSize: "1.2rem",
};

const whatsappStyle = {
  flex: 1,
  background: "#29c449",
  color: "white",
  textDecoration: "none",
  textAlign: "center",
  padding: "18px 12px",
  borderRadius: "14px",
  fontWeight: "bold",
  fontSize: "1.2rem",
};

const imageStyle = {
  width: "100%",
  maxHeight: "620px",
  objectFit: "cover",
  borderRadius: "14px",
  margin: "30px 0 45px",
};
