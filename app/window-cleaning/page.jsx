import ServicePage from "../components/ServicePage";

export const metadata = {
  title: "Window Cleaning Northampton | Aquapure Plus",
  description:
    "Reliable residential and commercial window cleaning throughout Northampton and nearby villages. Regular 4 and 8 weekly service available. Prices from £18.",
};

export default function WindowCleaningPage() {
  return (
    <ServicePage
      title="Window Cleaning Northampton"
      intro="Reliable professional window cleaning for residential and commercial properties throughout Northampton and nearby villages."
     image="/new-house-stock.jpg"
      price="Prices from £18"
      emailSubject="Window Cleaning Enquiry"
      serviceName="window cleaning"
    >
      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ color: "#0b5fa5" }}>
          Looking After Your Windows
        </h2>

        <p>
          Regular professional window cleaning helps keep your property looking
          bright, clean and well maintained. Windows, frames, sills and uPVC
          doors are included as part of every regular visit.
        </p>
      </section>

      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ color: "#0b5fa5" }}>
          Regular 4 or 8 Weekly Service
        </h2>

        <p>
          Customers can choose a regular 4 weekly or 8 weekly service, with a
          text reminder sent the day before we are due.
        </p>

        <p>
          Our professional pure-water equipment allows us to clean safely from
          the ground in most situations while treating every property with care
          and respect.
        </p>
      </section>

      <section>
        <h2 style={{ color: "#0b5fa5" }}>
          Why Customers Choose Aquapure Plus
        </h2>

        <ul style={{ paddingLeft: "22px" }}>
          <li>Trusted by customers across Northampton for over 15 years</li>
          <li>Reliable 4 or 8 weekly service rounds</li>
          <li>Pure-water window cleaning</li>
          <li>Frames, sills and uPVC doors included</li>
          <li>Text reminder sent the day before</li>
          <li>Residential and suitable commercial properties</li>
          <li>Quality results with attention to detail</li>
          <li>Fully insured</li>
          <li>Free quotations with no obligation</li>
        </ul>
      </section>
    </ServicePage>
  );
}
