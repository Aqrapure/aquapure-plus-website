export const metadata = {
  title: "Gutter Cleaning Northampton | Aquapure Plus",
  description:
    "Professional gutter clearing using a powerful gutter vacuum system throughout Northampton and surrounding villages. Free quotations.",
};

export default function GutterCleaningPage() {
  const phoneMark = "07XXXXXXXXX"; // Replace with Mark's number
  const whatsappMessage =
    "Hi Mark, I'd like a quote for gutter cleaning.";

  return (
    <main style={container}>

      <h1>Gutter Cleaning Northampton</h1>

     <p>
  Professional gutter clearing for homes and suitable commercial properties
  throughout Northampton and the surrounding villages
</p>

<p>
  Aquapure Plus provides professional gutter clearing to help protect
  properties from overflowing rainwater and possible water damage.
</p>

   <p
  style={{
    fontSize: "1.2rem",
    fontWeight: "bold",
    color: "#0b6e4f",
    margin: "25px 0 8px",
  }}
>
  Prices from £70
</p>

<p
  style={{
    fontStyle: "italic",
    marginBottom: "25px",
  }}
>
  Every property is individually quoted based on the size of the property and
  the work required.
</p>

<div style={buttonContainer}>

        <a
          href={`tel:${phoneMark}`}
          style={buttonStyle}
        >
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
        src="/guttervac-clearing.jpg"
        alt="Professional gutter clearing using our gutter vacuum system in Northampton"
        style={imageStyle}
      />

      <h2>Why Choose Aquapure Plus?</h2>

     <ul>
  <li>✓ Over 15 years serving Northampton</li>
  <li>✓ High-powered commercial gutter vacuum system</li>
  <li>✓ Gutter clearing carried out safely from the ground</li>
  <li>✓ Ladders used only where necessary</li>
  <li>✓ Downpipes checked and flushed where needed</li>
  <li>✓ Exterior gutter, fascia and soffit cleaning available</li>
  <li>✓ Residential and suitable commercial properties</li>
  <li>✓ Free, no-obligation quotations</li>
</ul>

      <h2>Our Gutter Cleaning Service</h2>

      <p>
        We offer a range of gutter cleaning services to keep your gutters clear, flowing properly and looking their best.
      </p>

      <h3>Internal Gutter Clearing</h3>

      <p>
  Using our high-powered commercial gutter vacuum system, we safely remove
  moss, leaves and debris from inside your gutters. Ladders are used where
  access requires, and downpipes are checked and flushed where needed.
</p>

      <h3>Exterior Gutter, Fascia & Soffit Cleaning</h3>

      <p>
        If your gutters, fascias and soffits are dirty, green or covered in
        traffic film, we can safely clean the exterior to restore a fresh
        brighter appearance.
      </p>

      <h3>Complete Gutter Service</h3>

      <p>
        Many customers choose to have everything completed during one visit —
        gutters cleared internally, downpipes checked, and the exterior
        guttering, fascias and soffits professionally cleaned.
      </p>

      <h2>How Often Should Gutters Be Cleared?</h2>

      <p>
  It is recommended that gutters are cleared every 12 months for most
  properties. Properties surrounded by trees may require more frequent
  visits to help prevent blockages, overflowing gutters and possible
  water damage.
</p>

      <h2>Request a Free Quote</h2>

      <p>
  Contact us today for your free, no-obligation quote.
</p>

      <div style={buttonContainer}>

        <a
          href={`tel:${phoneMark}`}
          style={buttonStyle}
        >
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
  padding: "40px 20px",
  fontFamily: "Arial, sans-serif",
  lineHeight: "1.8",
  color: "#0b2545"
};

const imageStyle = {
  width: "100%",
  borderRadius: "14px",
  margin: "25px 0"
};

const buttonContainer = {
  display: "flex",
  gap: "15px",
  margin: "30px 0"
};

const buttonStyle = {
  flex: 1,
  background: "#0067d8",
  color: "#fff",
  textAlign: "center",
  padding: "14px",
  borderRadius: "8px",
  textDecoration: "none",
  fontWeight: "bold"
};

const whatsappStyle = {
  flex: 1,
  background: "#2ec84d",
  color: "#fff",
  textAlign: "center",
  padding: "14px",
  borderRadius: "8px",
  textDecoration: "none",
  fontWeight: "bold"
};
