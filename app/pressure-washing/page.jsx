import ServicePage from "../components/ServicePage";

export const metadata = {
  title: "Pressure Washing Northampton | Aquapure Plus",
  description:
    "Professional pressure washing for patios, driveways and outdoor surfaces throughout Northampton and nearby villages. Free quotations.",
};

export default function PressureWashingPage() {
  return (
    <ServicePage
      title="Pressure Washing Northampton"
      intro="Professional pressure washing for patios, driveways and outdoor surfaces to restore the appearance of your property."
      image="/driveway-before-after.jpg"
      price="Free, no-obligation quotations"
      emailSubject="Pressure Washing Enquiry"
      serviceName="pressure washing"
    >
      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ color: "#0b5fa5" }}>
          Looking After Your Outdoor Areas
        </h2>

        <p>
          Professional pressure washing will make a big difference to the
          appearance of your patios, driveways and paths. Our service leaves
          outdoor hard surfaces looking fresh, clean and well maintained,
          helping your property look its best.
        </p>
      </section>

      <section>
        <h2 style={{ color: "#0b5fa5" }}>
          Why Customers Choose Aquapure Plus
        </h2>

        <ul style={{ paddingLeft: "22px" }}>
          <li>Trusted by customers across Northampton for over 15 years</li>
          <li>Reliable, friendly and professional service</li>
          <li>Quality results with attention to detail</li>
          <li>Respect for your home and property</li>
          <li>Residential and suitable commercial properties</li>
          <li>Free quotations with no obligation</li>
        </ul>
      </section>
    </ServicePage>
  );
}
