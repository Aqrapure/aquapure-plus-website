export default function GutterCleaningPage() {
  const phoneMark = "07849459812"; // Replace with Mark's number
  const whatsappMessage =
    "Hi Mark, I'd like a quote for fascia & soffits cleaning.";

  return (
    <main style={container}>

      <h1>Fascia & Soffit Cleaning Northampton</h1>

      <p>
        Professional fascia & soffits cleaning for homes across Northampton and
        surrounding villages.
      </p>

      <p>
        Over time, fascias, soffits and exterior guttering collect traffic film, algae, 
        cobwebs and general dirt, leaving the outside of your home looking tired. 
        Aquapure Plus carefully cleans exterior uPVC to restore a brighter, cleaner appearance.
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
        src="/gutter-before-clean.jpg"
        alt="Blocked gutters before cleaning"
        style={imageStyle}
      />

      <img
        src="/gutterafter-clean.jpg"
        alt="Clean gutters after cleaning"
        style={imageStyle}
      />

      <h2>Why Choose Aquapure Plus?</h2>

      <ul>
        <li>✓ Established since 2006</li>
        <li>✓ Safe gutter vacuum cleaning from the ground</li>
        <li>✓ Ladders used where access requires</li>
        <li>✓ Downpipes checked and flushed where needed</li>
        <li>✓ Exterior gutter, fascia and soffit cleaning available</li>
        <li>✓ Free, no-obligation quotations</li>
      </ul>

      <h2>Our Gutter Cleaning Options</h2>

      <p>
        Every property is different, so we offer three gutter cleaning
        services depending on what you need.
      </p>

      <h3>Internal Gutter Clearing</h3>

      <p>
        Using our professional gutter vacuum system we safely remove moss,
        leaves and debris from inside your gutters without the need for
        ladders in most situations. We also check and flush downpipes where
        required to ensure rainwater flows away properly.
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
        Most homes benefit from gutter clearing every 12 months. Properties
        surrounded by trees may need cleaning more frequently to prevent
        blockages, overflowing gutters and costly water damage.
      </p>

      <h2>Request a Free Quote</h2>

      <p>
        Contact Aquapure Plus today for a free gutter cleaning quotation in
        Northampton and surrounding villages.
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
