import Image from "next/image";
import Link from "next/link";

export default function ServicePage({
  title,
  intro,
  image,
  price,
  emailSubject,
  serviceName,
  children,
}) {
  const emailBody = `Hello Aquapure Plus,

I would like a free quotation for ${serviceName}.

Name:

Property address:

Postcode:

Preferred contact method: Phone / Email

Telephone:

Email:

Additional information:`;

  const emailLink = `mailto:info@aquapure-plus.co.uk?subject=${encodeURIComponent(
    emailSubject
  )}&body=${encodeURIComponent(emailBody)}`;

  const contactButtonStyle = {
    width: "100%",
    maxWidth: "260px",
    minHeight: "52px",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "12px 20px",
    borderRadius: "8px",
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
    boxSizing: "border-box",
  };

  return (
    <main
      style={{
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "40px 20px",
        fontFamily: "Arial, sans-serif",
        lineHeight: "1.7",
        color: "#0b2545",
      }}
    >
      <section
        style={{
          background: "#f5f8fa",
          padding: "35px 25px",
          borderRadius: "12px",
          marginBottom: "35px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            color: "#0b5fa5",
            fontSize: "2.4rem",
            lineHeight: "1.25",
            marginTop: "0",
            marginBottom: "20px",
          }}
        >
          {title}
        </h1>

        <p
          style={{
            fontSize: "1.2rem",
            maxWidth: "750px",
            margin: "0 auto 25px",
          }}
        >
          {intro}
        </p>

        <h2
          style={{
            color: "#2d7d46",
            marginTop: "0",
            marginBottom: "8px",
          }}
        >
          {price}
        </h2>

        <p style={{ marginTop: "0", marginBottom: "25px" }}>
          Contact us today for your free quotation.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "15px",
            flexWrap: "wrap",
          }}
        >
          <a
            href="tel:+447860150637"
            style={{
              ...contactButtonStyle,
              background: "#0b5fa5",
            }}
          >
            Call Now
          </a>

          <a
            href="https://wa.me/447860150637"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              ...contactButtonStyle,
              background: "#25D366",
            }}
          >
            WhatsApp
          </a>

          <a
            href={emailLink}
            style={{
              ...contactButtonStyle,
              background: "#2d7d46",
            }}
          >
            Email Enquiry
          </a>
        </div>
      </section>

      <Image
        src={image}
        alt={title}
        width={1000}
        height={650}
        style={{
          width: "100%",
          height: "auto",
          borderRadius: "12px",
          marginBottom: "40px",
        }}
      />

      {children}

      <section
        style={{
          background: "#f5f8fa",
          borderLeft: "5px solid #2d7d46",
          padding: "25px",
          marginTop: "50px",
          borderRadius: "8px",
        }}
      >
        <h2 style={{ marginTop: "0", color: "#0b5fa5" }}>
          The Aquapure Plus Promise
        </h2>

        <p style={{ marginBottom: "0" }}>
          We take pride in delivering a reliable, professional service with
          respect for your home and surroundings. Every property is treated
          with the same care and attention we would expect for our own.
        </p>
      </section>

      <div
        style={{
          textAlign: "center",
          marginTop: "50px",
        }}
      >
        <Link
          href="/"
          style={{
            color: "#0b5fa5",
            fontWeight: "bold",
            textDecoration: "none",
          }}
        >
          ← Return to Homepage
        </Link>
      </div>
    </main>
  );
}
