import React from 'react';
import {
  BadgeCheck,
  Calendar,
  Camera,
  ChevronRight,
  Clock,
  Globe,
  MapPin,
  MessageCircle,
  Phone,
  Plane,
  Search,
  ShieldCheck,
  Star,
  Users,
  Wallet,
} from 'lucide-react';
import './App.css';

const packages = [
  {
    title: 'Maasai Mara Migration Safari',
    price: 'Ksh 31,500',
    image:
      'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=900',
    duration: '3 days',
    tag: 'Best seller',
    route: 'Nairobi - Mara - Nairobi',
  },
  {
    title: 'Diani Beach Flight Escape',
    price: 'Ksh 28,900',
    image:
      'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?auto=format&fit=crop&q=80&w=900',
    duration: '4 days',
    tag: 'Beach deal',
    route: 'Flights, transfers, hotel',
  },
  {
    title: 'Dubai & Abu Dhabi Holiday',
    price: 'Ksh 120,000',
    image:
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=900',
    duration: '5 days',
    tag: 'Visa help',
    route: 'City tours and desert safari',
  },
  {
    title: 'Naivasha Weekend Reset',
    price: 'Ksh 14,800',
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&q=80&w=900',
    duration: '2 days',
    tag: 'Weekend',
    route: 'Boat ride and lodge stay',
  },
];

const destinations = ['Mombasa', 'Diani', 'Dubai', 'Zanzibar', 'Maasai Mara', 'Nanyuki'];
const phoneDisplay = '0715 299555';
const phoneHref = 'tel:+254715299555';
const whatsappHref =
  'https://wa.me/254715299555?text=Hi%20Kijani%20Compass%2C%20I%20would%20like%20help%20planning%20a%20trip.';

const highlights = [
  {
    icon: <Wallet size={22} />,
    title: 'Flexible payment plans',
    text: 'Book early and pay in small steps before your travel date.',
  },
  {
    icon: <ShieldCheck size={22} />,
    title: 'Vetted hotels and guides',
    text: 'Packages are planned with reliable stays, transfers, and local hosts.',
  },
  {
    icon: <Users size={22} />,
    title: 'Groups and couples',
    text: 'Ready-made holiday deals plus custom trips for families and teams.',
  },
];

const reviews = [
  {
    name: 'Jane W.',
    text: 'The Mara trip was smooth from pickup to check-in. The team handled every detail.',
  },
  {
    name: 'Brian K.',
    text: 'Great Dubai package, clear pricing, and fast WhatsApp support when we needed help.',
  },
];

function App() {
  return (
    <div className="site-shell">
      <div className="intro-reveal" aria-hidden="true">
        <div className="intro-sky">
          <span className="intro-sun" />
          <span className="intro-cloud cloud-one" />
          <span className="intro-cloud cloud-two" />
          <span className="intro-route" />
          <Plane className="intro-plane" size={42} />
        </div>
        <span className="intro-mark">KC</span>
        <span className="intro-title">Kijani Compass</span>
      </div>
      <header className="topbar">
        <a className="brand" href="#home" aria-label="Kijani Compass home">
          <span className="brand-mark">KC</span>
          <span>
            <strong>Kijani Compass</strong>
            <small>Private trips, planned with care</small>
          </span>
        </a>
        <nav className="nav-links" aria-label="Main navigation">
          <a href="#packages">Packages</a>
          <a href="#destinations">Destinations</a>
          <a href="#reviews">Reviews</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="nav-cta" href={whatsappHref}>
          <MessageCircle size={18} />
          WhatsApp
        </a>
      </header>

      <main id="home">
        <section className="hero">
          <div className="hero-media" aria-hidden="true" />
          <div className="hero-content">
            <p className="eyebrow">
              <BadgeCheck size={17} />
              Nairobi-born travel planning studio
            </p>
            <h1>Trips that feel less copied, more personally mapped.</h1>
            <p className="hero-copy">
              Kijani Compass designs safaris, coast breaks, city escapes, and
              group holidays around your timing, budget, and travel style, then
              keeps support close from inquiry to return.
            </p>
            <div className="hero-actions">
              <a className="primary-btn" href="#packages">
                Explore deals
                <ChevronRight size={18} />
              </a>
              <a className="secondary-btn" href={phoneHref}>
                <Phone size={18} />
                {phoneDisplay}
              </a>
            </div>
            <div className="rating-row" aria-label="Rated 4.8 from over 12,400 reviews">
              <strong>4.8</strong>
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} size={17} fill="currentColor" />
              ))}
              <span>12,400+ reviews</span>
            </div>
          </div>

          <form className="trip-search" aria-label="Find a holiday package">
            <label>
              <span>Destination</span>
              <strong>Mara, Coast, Dubai...</strong>
            </label>
            <label>
              <span>Travel month</span>
              <strong>Anytime</strong>
            </label>
            <label>
              <span>Budget</span>
              <strong>From Ksh 15,000</strong>
            </label>
            <button type="button">
              <Search size={19} />
              Search
            </button>
          </form>
        </section>

        <section className="quick-actions" aria-label="Quick contact options">
          <a href={phoneHref}>
            <Phone size={21} />
            Call
          </a>
          <a href={whatsappHref}>
            <MessageCircle size={21} />
            WhatsApp
          </a>
          <a href="#packages">
            <Globe size={21} />
            Website
          </a>
          <a href="#contact">
            <MapPin size={21} />
            Directions
          </a>
        </section>

        <section className="info-strip" aria-label="Agency details">
          <span>
            <MapPin size={20} />
            Yala Towers, Biashara St, Nairobi
          </span>
          <span>
            <Clock size={20} />
            Open 24 hours
          </span>
          <span>
            <Plane size={20} />
            Local and international tours
          </span>
        </section>

        <section className="section" id="packages">
          <div className="section-heading">
            <p className="eyebrow">Featured deals</p>
            <h2>Popular holiday packages</h2>
            <p>
              A sharp starting menu, not a copy-paste catalogue. Each option
              can be reshaped around your dates, pace, room style, and group.
            </p>
          </div>
          <div className="package-grid">
            {packages.map((pkg) => (
              <article className="package-card" key={pkg.title}>
                <img src={pkg.image} alt={pkg.title} />
                <div className="package-body">
                  <div className="package-meta">
                    <span>{pkg.tag}</span>
                    <span>
                      <Calendar size={15} />
                      {pkg.duration}
                    </span>
                  </div>
                  <h3>{pkg.title}</h3>
                  <p>{pkg.route}</p>
                  <div className="package-footer">
                    <strong>From {pkg.price}</strong>
                    <a href={whatsappHref}>Book</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="split-section" id="destinations">
          <div>
            <p className="eyebrow">Where to next?</p>
            <h2>Safari, beach, city break, or a tailor-made group trip.</h2>
            <p>
              Choose a mood first, then let the route follow. We pair well-known
              icons with quieter stays, scenic transfers, and flexible add-ons
              that make the holiday feel like yours.
            </p>
            <div className="destination-list">
              {destinations.map((destination) => (
                <span key={destination}>{destination}</span>
              ))}
            </div>
          </div>
          <div className="experience-panel">
            <div>
              <Camera size={24} />
              <strong>Curated experiences</strong>
              <span>Game drives, SGR trips, honeymoons, birthdays, retreats</span>
            </div>
            <div>
              <Plane size={24} />
              <strong>Travel support</strong>
              <span>Flights, transfers, visas, accommodation, itinerary help</span>
            </div>
          </div>
        </section>

        <section className="section compact-section">
          <div className="highlight-grid">
            {highlights.map((item) => (
              <article className="highlight-card" key={item.title}>
                <span>{item.icon}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section review-section" id="reviews">
          <div className="section-heading">
            <p className="eyebrow">Customer love</p>
            <h2>Reviews that build trust fast</h2>
          </div>
          <div className="review-grid">
            {reviews.map((review) => (
              <article className="review-card" key={review.name}>
                <div className="review-stars">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={16} fill="currentColor" />
                  ))}
                </div>
                <p>"{review.text}"</p>
                <strong>{review.name}</strong>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-band" id="contact">
          <div>
            <p className="eyebrow">Ready to travel?</p>
            <h2>Tell us your dates and we will match you with a package.</h2>
          </div>
          <div className="contact-actions">
            <a href={phoneHref}>
              <Phone size={18} />
              {phoneDisplay}
            </a>
            <a href={whatsappHref}>
              <MessageCircle size={18} />
              WhatsApp
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
