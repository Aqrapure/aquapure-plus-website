export default function GutterCleaningPage() {
  const phoneMark = "07849459812"; // Replace with Mark's number
  const whatsappMessage =
    "Hi Mark, I'd like a quote for fascia & soffits cleaning.";

  return (
    <main style={container}>

     <h1>Fascia & Soffit Cleaning Northampton</h1>

<p>
  Professional fascia, soffit and exterior gutter cleaning for homes across Northampton and surrounding villages.
</p>

<p>
  Over time, fascias, soffits and exterior guttering collect traffic film, algae, cobwebs and general dirt, leaving the outside of your home looking tired.
</p>

<p>
  We carefully clean exterior uPVC using purified water and professional equipment to restore a brighter, cleaner appearance without harsh chemicals.
</p>

<p>
  Whether you need your fascias and soffits cleaned on their own or as part of a complete exterior clean, we're happy to help.
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
  src="/exterior-fascia-soffit-gutter-clean.JPG"
  alt="Fascia and soffit cleaning Northampton"
  style={imageStyle}
/>

<h2>Why Choose Aquapure Plus?</h2>

<ul>
  <li>✓ Established since 2006</li>
  <li>✓ Fascias, soffits and exterior gutters cleaned</li>
  <li>✓ Safe for uPVC with no harsh chemicals</li>
  <li>✓ Local, reliable family business</li>
  <li>✓ Free, no-obligation quotations</li>
</ul>

      <h2>Our Fascia & Soffit Cleaning Services</h2>

<p>
    Every property is different, so we offer exterior cleaning
    services to suit your home and your budget.
</p>

<h3>Fascia Cleaning</h3>

<p>
    Fascias are the vertical boards that run along your roofline
    behind the gutters.
</p>

<p>
    Over time they become stained with algae, traffic film and
    general dirt, making your home look older than it really is.
</p>

<p>
    We carefully restore fascias to a bright, clean finish using
    professional equipment that is safe for uPVC.
</p>

<h3>Soffit Cleaning</h3>

<p>
    Soffits are the underside of your roof overhang and are often
    overlooked when cleaning a property.
</p>

<p>
    We remove cobwebs, algae and built-up dirt to leave them looking
    fresh and clean again.
</p>

<h3>Complete Exterior uPVC Cleaning</h3>

<p>
    For the best overall appearance, many customers choose to have
    their fascias, soffits and gutter fronts cleaned together.
</p>

<p>
    This gives your home a cleaner, brighter finish and instantly
    improves its kerb appeal.
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
