import ServicePage from "../components/ServicePage";

export const metadata = {
  title: "Conservatory Roof Cleaning Northampton | Aquapure Plus",
  description:
    "Professional conservatory roof cleaning throughout Northampton and nearby villages. Helping restore the appearance of your conservatory and bring more natural light into your home. Prices from £60.",
};

export default function ConservatoryRoofCleaningPage() {
  return (
    <ServicePage
      title="Conservatory Roof Cleaning Northampton"
      intro="Professional conservatory roof cleaning to restore its appearance and help bring more natural light back into your home."
      image="/Conservatory Roof clean 2.JPG"
      price="Prices from £60"
      emailSubject="Conservatory Roof Cleaning Enquiry"
      serviceName="conservatory roof cleaning"
    >
      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ color: "#0b5fa5" }}>
          Looking After Your Conservatory
        </h2>

        <p>
          A professionally cleaned conservatory roof will make a big difference
          to its overall appearance. Our service leaves the roof, framework and
          surrounding areas looking fresh, bright and well maintained, helping
          you enjoy a cleaner and lighter conservatory.
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
          <li>Glass and polycarbonate conservatory roofs cleaned</li>
          <li>Respect for your home and property</li>
          <li>Free quotations with no obligation</li>
        </ul>
      </section>
    </ServicePage>
  );
}
 
