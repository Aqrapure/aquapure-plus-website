const phoneMark = '07448863669';
const phoneRoy = '07768872207';
const freephone = '08006250628';
const email = 'info@aquapure-plus.co.uk';
const whatsappMessage = encodeURIComponent('Hello, can we arrange quote for window cleaning on my property, thanks.');
const whatsappLink = `https://wa.me/447448863669?text=${whatsappMessage}`;

const services = [
  { title: 'Window Cleaning', text: 'Regular and one-off pure water window cleaning for homes, flats and small commercial properties.', img: '/gallery/commercial-window-cleaning.jpg' },
  { title: 'Conservatory Roof Cleaning', text: 'Bring more light back into your conservatory with professional roof, frame and glass cleaning.', img: '/gallery/conservatory-cleaning.jpg' },
  { title: 'Gutter Clearing', text: 'Remove leaves, moss and debris to help prevent blockages, leaks and water damage.', img: '/gallery/gutter-fascia-cleaning.jpg' },
  { title: 'Fascia & Soffit Cleaning', text: 'Refresh exterior plastics, fascias, soffits and cladding for a cleaner looking property.', img: '/gallery/office-window-cleaning.jpg' },
  { title: 'Patio Pressure Washing', text: 'Professional patio cleaning to remove dirt, algae and grime from outdoor spaces.', img: '/gallery/exterior-cleaning.jpg' },
  { title: 'Driveway Cleaning', text: 'Pressure washing for driveways, paths and exterior surfaces to improve kerb appeal.', img: '/gallery/high-reach-window-cleaning.jpg' }
];

const areas = ['Northampton', 'Kingsthorpe', 'Duston', 'Moulton', 'Wootton', 'West Hunsbury', 'Boughton', 'Upton'];
const gallery = [
  { src: '/gallery/commercial-window-cleaning.jpg', label: 'Commercial window cleaning' },
  { src: '/gallery/conservatory-before.jpg', label: 'Conservatory roof before cleaning' },
  { src: '/gallery/conservatory-after.jpg', label: 'Conservatory roof after cleaning' },
  { src: '/gallery/high-reach-window-cleaning.jpg', label: 'High reach window cleaning' },
  { src: '/gallery/conservatory-cleaning.jpg', label: 'Conservatory cleaning' },
  { src: '/gallery/gutter-fascia-cleaning.jpg', label: 'Exterior cleaning work' }
];

export default function Home() {
  const mailSubject = encodeURIComponent('Aquapure Plus quote request');
  const mailBody = encodeURIComponent('Hello,\n\nPlease can we arrange a quote.\n\nName:\nPhone:\nAddress/area:\nService required:\nMessage:\n');

  return (
    <main>
      <header className="topbar">
        <a href="#home" className="brand" aria-label="Aquapure Plus home">
          <img src="/logo.png" alt="Aquapure Plus Window Gutter Conservatory Cleaning, Est. 2006" />
        </a>
        <nav className="nav" aria-label="Main navigation">
          <a href="#services">Services</a>
          <a href="#why">Why us</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="header-actions">
          <a className="phone-link" href={`tel:${phoneMark}`}>07448 863669</a>
          <a className="btn btn-small" href="#quote">Get a quote</a>
        </div>
      </header>

      <section id="home" className="hero">
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow">Established since 2006</p>
          <h1>Trusted Window Cleaners in Northampton</h1>
          <p className="hero-text">Professional window, gutter, conservatory and exterior cleaning services throughout Northampton and surrounding villages.</p>
          <div className="hero-buttons">
            <a className="btn" href={`tel:${phoneMark}`}>Call Mark</a>
            <a className="btn btn-outline" href={whatsappLink}>WhatsApp quote</a>
          </div>
          <div className="trust-strip">
            <span>Fully insured</span>
            <span>Free quotations</span>
            <span>Local family business</span>
          </div>
        </div>
      </section>

      <section id="services" className="section">
        <div className="section-heading">
          <p className="eyebrow">What we do</p>
          <h2>Our Services</h2>
          <p>Reliable cleaning services for homes and small businesses across Northampton.</p>
        </div>
        <div className="service-grid">
          {services.map(service => (
            <article className="service-card" key={service.title}>
              <img src={service.img} alt={service.title} />
              <div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="why" className="section split-section">
        <div>
          <p className="eyebrow">Why choose us?</p>
          <h2>Nearly 20 years of local experience</h2>
          <p>Aquapure Plus has been helping homeowners and businesses keep their properties looking their best since 2006. We provide a friendly, reliable service with professional equipment and care for every property.</p>
        </div>
        <div className="feature-grid">
          <div><strong>Since 2006</strong><span>Established local business</span></div>
          <div><strong>Pure water</strong><span>Modern reach-and-wash system</span></div>
          <div><strong>Flexible work</strong><span>Regular and one-off cleans</span></div>
          <div><strong>Free quotes</strong><span>No-obligation estimates</span></div>
        </div>
      </section>

      <section id="gallery" className="section gallery-section">
        <div className="section-heading">
          <p className="eyebrow">Real work</p>
          <h2>Recent Work & Gallery</h2>
          <p>A selection of Aquapure Plus cleaning work. New photos can be added as fresh jobs are completed.</p>
        </div>
        <div className="gallery-grid">
          {gallery.map(item => (
            <figure key={item.src}>
              <img src={item.src} alt={item.label} />
              <figcaption>{item.label}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="section areas-section">
        <div className="section-heading">
          <p className="eyebrow">Local coverage</p>
          <h2>Northampton & surrounding villages</h2>
          <p>We cover Northampton and nearby areas within approximately 8–10 miles.</p>
        </div>
        <div className="area-list">
          {areas.map(area => <span key={area}>{area}</span>)}
        </div>
      </section>

      <section className="reviews section">
        <p className="eyebrow">Customer feedback</p>
        <h2>Trusted by local customers</h2>
        <p className="stars">★★★★★</p>
        <blockquote>“Excellent well established company, been using them for years to clean my house windows. Competitive prices and very reliable.”</blockquote>
        <p className="small-note">Google reviews can be linked here once the public profile link is available.</p>
      </section>

      <section id="quote" className="section contact-section">
        <div className="contact-card">
          <div>
            <p className="eyebrow">Free quote</p>
            <h2>Request a free quotation</h2>
            <p>Call, WhatsApp or email us with your address, service required and a few photos if helpful.</p>
            <div className="contact-details">
              <a href={`tel:${phoneMark}`}>Mark: 07448 863669</a>
              <a href={`tel:${phoneRoy}`}>Roy: 07768 872207</a>
              <a href={`tel:${freephone}`}>Freephone: 0800 625 0628</a>
              <a href={`mailto:${email}`}>{email}</a>
            </div>
          </div>
          <form action={`mailto:${email}?subject=${mailSubject}&body=${mailBody}`} method="post" encType="text/plain">
            <label>Name<input name="name" type="text" placeholder="Your name" /></label>
            <label>Phone<input name="phone" type="tel" placeholder="Your phone number" /></label>
            <label>Email<input name="email" type="email" placeholder="Your email address" /></label>
            <label>Service required<select name="service"><option>Window cleaning</option><option>Conservatory cleaning</option><option>Gutter clearing</option><option>Fascia & soffit cleaning</option><option>Patio cleaning</option><option>Driveway cleaning</option></select></label>
            <label>Message<textarea name="message" rows="4" placeholder="Tell us what you need cleaned"></textarea></label>
            <button className="btn" type="submit">Send enquiry</button>
            <a className="btn btn-outline-green" href={whatsappLink}>Send WhatsApp message</a>
          </form>
        </div>
      </section>

      <footer id="contact" className="footer">
        <img src="/logo.png" alt="Aquapure Plus" />
        <p>Trusted by Northampton homeowners since 2006.</p>
        <p>Window • Gutter • Conservatory • Exterior Cleaning</p>
        <div className="footer-links">
          <a href={`tel:${phoneMark}`}>Mark: 07448 863669</a>
          <a href={`tel:${phoneRoy}`}>Roy: 07768 872207</a>
          <a href={`tel:${freephone}`}>0800 625 0628</a>
          <a href={`mailto:${email}`}>{email}</a>
        </div>
      </footer>

      <a className="floating-whatsapp" href={whatsappLink} aria-label="WhatsApp Aquapure Plus">WhatsApp</a>
    </main>
  );
}
