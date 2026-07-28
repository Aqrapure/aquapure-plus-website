import ServicePage from "../components/ServicePage";

export const metadata = {
  title: "Gutter Clearing Northampton | Aquapure Plus",
  description:
    "Professional gutter clearing in Northampton and nearby villages using a powerful gutter vacuum system. Prices from £70.",
};

export default function GutterClearingPage() {
  return (
    <ServicePage
      title="Gutter Clearing Northampton"
      intro="Keep rainwater flowing freely and help reduce the risk of water damage with professional gutter clearing from Aquapure Plus."
      image="/gutter-vacuum-service.jpg"
      price="Prices from £70"
      emailSubject="Gutter Clearing Enquiry"
      serviceName="gutter clearing"
    >
      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ color: "#0b5fa5" }}>Looking After Your Gutters</h2>

        <p>
          Blocked gutters can prevent rainwater from draining away properly,
          particularly during periods of heavy rainfall. Regular gutter
          clearing helps your guttering continue to do the job it was designed
          for, giving you peace of mind and helping to protect your property.
        </p>
      </section>

      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ color: "#0b5fa5" }}>
          A Safe and Professional Approach
        </h2>

        <p>
          We use a powerful professional gutter vacuum system, allowing us to
          clear gutters safely and efficiently from ground level wherever
          possible. Ladders are used only when necessary, and downpipes can be
          checked and flushed where required.
        </p>

        <p>
          We work carefully around your property and leave the surrounding area
          tidy when the work is complete.
        </p>
      </section>

     <section style={{ marginBottom: "40px" }}>
  <h2 style={{ color: "#0b5fa5" }}>
    Internal & Exterior Gutter Services
  </h2>

  <p>
    These are two separate services. You can arrange either one independently,
    or have both completed during the same visit.
  </p>

  <ul style={{ paddingLeft: "22px" }}>
    <li style={{ marginBottom: "20px" }}>
      <strong>Internal Gutter Clearing</strong>
      <br />
      Removes moss and debris from inside the guttering, helping rainwater flow
      away freely and keeping your gutters working as they should.
    </li>

    <li>
      <strong>Exterior Gutter, Fascia & Soffit Cleaning</strong>
      <br />
      Cleans the outside of the guttering, fascias and soffits to improve the
      overall appearance of your property.
    </li>
  </ul>
</section>

      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ color: "#0b5fa5" }}>
          When Should Gutters Be Cleared?
        </h2>

        <p>
          Many properties benefit from having their gutters checked and cleared
          annually. Homes close to trees may require attention more frequently,
          depending on the property and its surroundings.
        </p>
      </section>

      <section>
        <h2 style={{ color: "#0b5fa5" }}>
          Why Choose Aquapure Plus?
        </h2>

        <p>
          We provide a reliable local service for homes and suitable commercial
          properties throughout Northampton and nearby villages. You can expect
          clear communication, careful workmanship and respect for your
          property from the moment you contact us.
        </p>
      </section>
    </ServicePage>
  );
}
