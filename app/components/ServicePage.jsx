import Image from "next/image";
import Link from "next/link";

export default function ServicePage({
  title,
  intro,
  image,
  price,
  children,
}) {
  return (
    <main
      style={{
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "40px 20px",
        fontFamily: "Arial, sans-serif",
        lineHeight: "1.7",
      }}
    >
      <h1
        style={{
          color: "#0b5fa5",
          fontSize: "2.4rem",
          marginBottom: "20px",
        }}
      >
        {title}
      </h1>

      <p
        style={{
          fontSize: "1.2rem",
          marginBottom: "30px",
        }}
      >
        {intro}
      </p>

      <h2
        style={{
          color: "#2d7d46",
          marginBottom: "20px",
        }}
      >
        {price}
      </h2>

      <div
        style={{
          display: "flex",
          gap: "15px",
          flexWrap: "wrap",
          marginBottom: "35px",
        }}
      >
        <a
          href="tel:YOUR_NUMBER"
          style={{
            background: "#0b5fa5",
            color: "white",
            padding: "12px 24px",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Call Now
        </a>

        <a
          href="https://wa.me/YOUR_WHATSAPP"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: "#25D366",
            color: "white",
            padding: "12px 24px",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          WhatsApp
        </a>
      </div>

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
        <h2>The Aquapure Plus Promise</h2>

        <p>
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
