export default function PressureWashingPage() {
    const phoneMark = "07456871686";

    const whatsappMessage = encodeURIComponent(
        "Hello, can we arrange a quote for pressure washing, thanks."
    );

    return (
        <main style={container}>
            <h1>Pressure Washing Northampton</h1>

            <p>
                Professional pressure washing for patios, driveways and
                outdoor areas across Northampton and surrounding villages.
            </p>

            <p>
                We offer pressure washing as an additional exterior cleaning
                service, helping remove built-up dirt, algae and surface grime
                to improve the appearance of your property.
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
                <li>✓ Established since 2006</li>
                <li>✓ Local Northampton business</li>
                <li>✓ Patio and driveway pressure washing</li>
                <li>✓ Honest advice before taking on work</li>
                <li>✓ Free, no-obligation quotations</li>
            </ul>

            <h2>Patio & Driveway Pressure Washing</h2>

            <p>
                Patios and driveways can become dirty over time from algae,
                moss, weathering and general outdoor grime.
            </p>

            <p>
                Pressure washing can make these areas look cleaner, brighter
                and more welcoming.
            </p>

            <h2>Our Pressure Washing Services</h2>

<p>
    We offer pressure washing for patios, driveways
    and outdoor areas.
</p>

<p>
    This service helps remove built-up dirt, algae,
    moss and surface grime to improve the appearance
    of your property.
</p>

<img
    src="/pressure-wash.jpg"
    alt="Pressure washing patio"
    style={imageStyle}
/>

            <h2>Request a Free Quote</h2>

            <p>
                Contact Aquapure Plus today for a free, no-obligation quotation
                for patio or driveway pressure washing in Northampton and
                surrounding villages.
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
    padding: "40px 25px",
    maxWidth: "1100px",
    margin: "0 auto"
};

const buttonContainer = {
    display: "flex",
    gap: "15px",
    margin: "30px 0"
};

const buttonStyle = {
    display: "block",
    flex: 1,
    margin: "10px 10px 10px 0",
    padding: "14px 24px",
    borderRadius: "8px",
    background: "#0067d8",
    color: "#fff",
    fontWeight: "bold",
    textDecoration: "none",
    textAlign: "center"
};

const whatsappStyle = {
    ...buttonStyle,
    background: "#2bbf4b"
};

const imageStyle = {
    width: "100%",
    borderRadius: "14px",
    margin: "25px 0"
};
