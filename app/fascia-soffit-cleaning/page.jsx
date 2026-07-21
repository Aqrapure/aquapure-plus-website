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
 Over time, fascias, soffits and exterior guttering can become dull and dirty, affecting the appearance of your home.
</p>

<p>
 We clean exterior uPVC to restore the appearance of your home.
</p>

<p>
  Whether you need your fascias and soffits cleaned on their own or as part of a complete exterior clean, we're happy to help.
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
  Every property is individually quoted based on its size and condition,
  ensuring you receive a fair and accurate price.
</p>

<div style={buttonContainer}>

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
  <li>✓ Over 15 years serving Northampton</li>
  <li>✓ Fascias, soffits and exterior gutters cleaned</li>
  <li>✓ Safe for uPVC with no harsh chemicals</li>
  <li>✓ Local, reliable business</li>
  <li>✓ Free, no-obligation quotations</li>
</ul>

     <h2>Our Exterior Cleaning Services</h2>

<p>
    We offer three exterior cleaning services to suit your property's needs.
</p>

<h3>Exterior Gutter, Fascia & Soffit Cleaning</h3>

<p>
    We clean exterior gutters, fascias and soffits to restore the appearance of your property. 
  Frames, sills and other exterior uPVC can also be cleaned as part of the service.
</p>

<p>
    We professionally clean all exterior uPVC to remove built-up
    dirt and improve the overall appearance of your home.
</p>

<h3>Internal Gutter Clearing</h3>

<p>
    Using high-powered gutter vacuum system, we safely remove
    moss, leaves and debris from inside your gutters without the
    need for ladders in most situations.
</p>

<p>
    We also check and flush downpipes where required to ensure
    rainwater flows away properly.
</p>

<h3>Complete Gutter & Exterior Cleaning</h3>

<p>
    Our most popular service combines internal gutter clearing
    with exterior gutter, fascia and soffit cleaning in a single
    visit.
</p>

<p>
    This leaves both the inside and outside of your guttering
    clean and your property looking its best.
</p>



      <h2>How Often Should Fascias & Soffits Be Cleaned?</h2>

<p>
    Most homes benefit from exterior uPVC cleaning every
    1–2 years, depending on the property's location and
    surrounding environment.
</p>

<p>
    Homes near busy roads or surrounded by trees may need
    cleaning more frequently to keep fascias, soffits and
    guttering looking their best.
</p>

     <h2>Request a Free Quote</h2>

<p>
    Contact Aquapure Plus today for your free, no-obligation quotation.
  
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
