import './App.css'

function App() {
  return (
    <div>
      <header className="navbar">
        <h2>UQ GUTS</h2>

        <nav>
          <a href="#events">Events</a>
          <a href="#join">Join Us</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero">
        <h1>Welcome to UQ GUTS</h1>
        <p>
          A student community connecting UQ students through events,
          friendships, and shared experiences.
        </p>

        <div className="hero-buttons">
          <a href="#events" className="primary-button">View Events</a>
          <a href="#join" className="secondary-button">Join Us</a>
        </div>
      </section>

      <section id="events" className="section">
        <h2>Upcoming Events</h2>
        <p>Check out our latest activities and register through Humanitix.</p>
      </section>

      <section id="join" className="section">
        <h2>Join Us</h2>
        <p>Become a UQ GUTS member and enjoy events, networking, and member benefits.</p>
      </section>

      <section id="about" className="section">
        <h2>About UQ GUTS</h2>
        <p>
          UQ GUTS is a student club focused on building a friendly and active
          student community at the University of Queensland.
        </p>
      </section>

      <section id="contact" className="section">
        <h2>Contact Us</h2>
        <p>Follow us on Instagram, Facebook, LinkedIn, and other social platforms.</p>
      </section>
    </div>
  )
}

export default App