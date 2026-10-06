
import ServicePage from "../components/ServicePage";

export const metadata = {
  title: "Cladding Cleaning Northampton | Aquapure Plus",
  description:
    "Professional exterior cladding cleaning throughout Northampton and nearby villages. Restore the appearance of your property with Aquapure Plus. Prices from £70.",
};

export default function CladdingCleaningPage() {
  return (
    <ServicePage
      title="Cladding Cleaning Northampton"
      intro="Restore the appearance of your property's exterior with professional cladding cleaning from Aquapure Plus."
     image="/cladding-facia-after.jpg"
      price="Prices from £70"
      emailSubject="Cladding Cleaning Enquiry"
      serviceName="cladding cleaning"
    >
      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ color: "#0b5fa5" }}>
          Bring Your Cladding Back to Life
        </h2>

        <p>
          Clean cladding can make a big difference to the overall appearance
          of your home or property. Our professional cladding cleaning service
          helps restore a fresh, well-maintained appearance while taking care
          around the surrounding areas of your property.
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
