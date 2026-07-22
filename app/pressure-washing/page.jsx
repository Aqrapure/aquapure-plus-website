export const metadata = {
  title: "Pressure Washing Northampton | Aquapure Plus",
  description:
    "Professional driveway and patio pressure washing throughout Northampton and surrounding villages. Free quotations.",
};
export default function PressureWashingPage() {
  const phoneMark = "07456871686";

  const whatsappMessage = encodeURIComponent(
    "Hello, can we arrange a quote for pressure washing on my property, thanks."
  );

  return (
    <main style={container}>
      <h1>Pressure Washing Northampton</h1>

      <p>
        Pressure washing for patios, driveways and outdoor areas throughout Northampton and surrounding villages.
      </p>

      <p>
       Aquapure Plus provides pressure washing for patios, driveways and suitable outdoor surfaces, removing surface grime and restoring the appearance of your property.
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
        src="/driveway-before-after.jpg"
        alt="Driveway pressure washing before and after"
        style={imageStyle}
      />

      <h2>Why Choose Aquapure Plus?</h2>

      <ul>
        <li>✓ Over 15 years serving Northampton</li>
        <li>✓ Local Northampton business</li>
        <li>✓ Patio and driveway pressure washing</li>
        <li>✓ Suitable equipment for every job</li>
        <li>✓ Honest advice before taking on work</li>
        <li>✓ Free, no-obligation quotations</li>
      </ul>

      <h2>Patio &amp; Driveway Pressure Washing</h2>

      <p>
        Over time, patios and driveways can become dirty and weathered, affecting the appearance of your property.
      </p>

      <p>
        Pressure washing removes surface grime and helps restore a cleaner, fresher appearance.
      </p>

      <h2>Our Pressure Washing Service</h2>

      <p>
        We offer pressure washing for patios, driveways and suitable outdoor
        areas.
      </p>

      <p>
        Every property is assessed before providing a quotation to ensure pressure washing is the right solution for the surface being cleaned.
      </p>

      <img
        src="/pressure-wash.jpg"
        alt="Patio pressure washing in Northampton"
        style={imageStyle}
      />

      <h2>Request a Free Quote</h2>

      <p>
        Contact us today for your free, no-obligation quotation.
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
  margin: "35px 0 50px",
};
