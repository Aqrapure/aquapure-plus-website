import ServicePage from "../components/ServicePage";

export const metadata = {
  title: "Exterior Gutter, Fascia & Soffit Cleaning Northampton | Aquapure Plus",
  description:
    "Professional exterior gutter, fascia and soffit cleaning throughout Northampton and nearby villages. Helping keep your property looking its best. Prices from £70.",
};

export default function FasciaSoffitCleaningPage() {
  return (
    <ServicePage
      title="Exterior Gutter, Fascia & Soffit Cleaning Northampton"
      intro="Professional exterior cleaning for gutters, fascias and soffits to help keep your property looking its best."
      image="/exterior-fascia-soffit-gutter-clean.JPG"
      price="Prices from £70"
      emailSubject="Exterior Gutter, Fascia & Soffit Cleaning Enquiry"
      serviceName="exterior gutter, fascia and soffit cleaning"
    >
      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ color: "#0b5fa5" }}>
          Looking After Your Property
        </h2>

        <p>
          Clean exterior gutters, fascias and soffits will make a big difference
          to the overall appearance of your home. Our professional cleaning
          service leaves these areas looking fresh, bright and well maintained,
          leaving your property looking its best.
        </p>
      </section>

      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ color: "#0b5fa5" }}>
          Our Exterior Cleaning Service
        </h2>

        <p>
          We professionally clean the exterior gutters, fascias and soffits as
          one complete service, giving your property a cleaner, smarter
          appearance with results you can be proud of.
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
