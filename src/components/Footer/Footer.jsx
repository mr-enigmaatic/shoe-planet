
import './Footer.css'; // Import your CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src="/path/to/your/logo.png" alt="Logo" />
        </div>
        <div className="footer-links">
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms of Service</a></li>
          </ul>
        </div>
        <div className="footer-social">
          <a href="https://www.facebook.com">Facebook</a>
          <a href="https://www.twitter.com">Twitter</a>
          <a href="https://www.instagram.com">Instagram</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Shoe Planet. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
