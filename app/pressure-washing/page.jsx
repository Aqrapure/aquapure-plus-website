export default function PressureWashingPage() {
  const phoneMark = "07456871686";

  const whatsappMessage = encodeURIComponent(
    "Hello, can we arrange a quote for pressure washing on my property, thanks."
  );

  return (
    <main style={container}>
      <h1>Pressure Washing Northampton</h1>

      <p>
        Professional pressure washing for patios, driveways and outdoor areas
        across Northampton and surrounding villages.
      </p>

      <p>
        Aquapure Plus provides pressure washing to remove built-up dirt, algae,
        moss and surface grime, improving the overall appearance of your
        property.
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
