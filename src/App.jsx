import './App.css'
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaUsers,
  FaCalendarAlt,
  FaBriefcase,
  FaStar,
  FaTrophy,
  FaMapMarkerAlt,
} from 'react-icons/fa'

function App() {
  return (
    <div className="app">
      {/* Navbar */}
      <header className="navbar">
        <div className="logo">
          UQ <span>GUTS</span>
        </div>

        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#events">Events</a>
          <a href="#join">Join</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section id="home" className="hero">
        <div className="hero-content">
          <p className="eyebrow">University of Queensland Student Club</p>
          <h1>
            Connect.
            <br />
            Explore<span>.</span>
            <br />
            Grow<span>.</span>
          </h1>

          <p className="hero-text">
            UQ GUTS brings students together through social events, networking,
            cultural exchange, and unforgettable experiences.
          </p>

          <div className="hero-buttons">
            <a href="#events" className="btn btn-primary">View Events</a>
            <a href="#join" className="btn btn-outline">Join Us</a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="about section-light">
        <div className="about-left">
          <p className="eyebrow purple">About Us</p>
          <h2>More than a club, a community.</h2>
          <p>
            We are a student-run club at The University of Queensland that
            welcomes all students. Our mission is to create a supportive and
            inclusive community where you can make new friends, build networks,
            and grow together.
          </p>
          <a href="#join" className="btn btn-purple">Learn More</a>
        </div>

        <div className="about-right">
          <div className="feature">
            <FaUsers />
            <div>
              <h3>Community</h3>
              <p>Build friendships and connect with students.</p>
            </div>
          </div>

          <div className="feature">
            <FaCalendarAlt />
            <div>
              <h3>Events</h3>
              <p>Fun and engaging events all year round.</p>
            </div>
          </div>

          <div className="feature">
            <FaBriefcase />
            <div>
              <h3>Networking</h3>
              <p>Meet professionals and expand your network.</p>
            </div>
          </div>

          <div className="feature">
            <FaStar />
            <div>
              <h3>Opportunities</h3>
              <p>Develop skills and create amazing opportunities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Events */}
      <section id="events" className="events">
        <p className="eyebrow purple center">Upcoming Events</p>
        <h2>What's Coming Up</h2>

        <div className="event-grid">
          <div className="event-card">
            <div className="event-img img-one">
              <div className="date">15<br /><span>JUN</span></div>
            </div>
            <div className="event-info">
              <h3>Welcome Night</h3>
              <p>Meet new friends and learn more about UQ GUTS.</p>
              <div className="event-meta">
                <span><FaMapMarkerAlt /> UQ Union</span>
                <span>6:00 PM</span>
              </div>
            </div>
          </div>

          <div className="event-card">
            <div className="event-img img-two">
              <div className="date">28<br /><span>JUN</span></div>
            </div>
            <div className="event-info">
              <h3>Networking Event</h3>
              <p>Connect with alumni and industry professionals.</p>
              <div className="event-meta">
                <span><FaMapMarkerAlt /> Hawken House</span>
                <span>5:30 PM</span>
              </div>
            </div>
          </div>

          <div className="event-card">
            <div className="event-img img-three">
              <div className="date">12<br /><span>JUL</span></div>
            </div>
            <div className="event-info">
              <h3>Social Picnic</h3>
              <p>Relax, have fun, and enjoy great company.</p>
              <div className="event-meta">
                <span><FaMapMarkerAlt /> Roma Street</span>
                <span>2:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        <a href="#events" className="btn btn-outline center-button">See All Events</a>
      </section>

      {/* Join */}
      <section id="join" className="join">
        <div className="join-left">
          <p className="eyebrow">Join Us</p>
          <h2>Be Part of Something Great.</h2>
          <p>
            Join UQ GUTS today and be part of a vibrant community that will
            support, inspire and grow with you.
          </p>
          <a href="#" className="btn btn-white">Become a Member</a>
        </div>

        <div className="stats">
          <div>
            <FaUsers />
            <h3>500+</h3>
            <p>Active Members</p>
          </div>

          <div>
            <FaCalendarAlt />
            <h3>30+</h3>
            <p>Events Yearly</p>
          </div>

          <div>
            <FaTrophy />
            <h3>10+</h3>
            <p>Opportunities</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact">
        <div>
          <p className="eyebrow purple">Contact Us</p>
          <h2>Stay Connected</h2>
          <p>Follow us on social media for the latest updates, events, and club announcements.</p>
        </div>

        <div className="social-icons">
          <a href="https://instagram.com/" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
          <a href="https://facebook.com/" target="_blank" rel="noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
            <FaLinkedinIn />
          </a>
        </div>
      </section>

      <footer>
        © 2026 UQ GUTS. All rights reserved.
      </footer>
    </div>
  )
}

export default App