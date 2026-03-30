import { Link } from 'react-router'
import './Footer.css'

//REVISI ISI LISTNYA
export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section">
          <h4>Company</h4>
          <ul className="footer-links">
            <li><Link className="footer-link" to="">About Us</Link></li>
            <li><Link className="footer-link" to="">Careers</Link></li>
            <li><Link className="footer-link" to="">Press</Link></li>
            <li><Link className="footer-link" to="">Blog</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Support</h4>
          <ul className="footer-links">
            <li><Link className="footer-link" to="">Help Center</Link></li>
            <li><Link className="footer-link" to="">Contact Us</Link></li>
            <li><Link className="footer-link" to="">Account</Link></li>
            <li><Link className="footer-link" to="">Redeem Gift</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Legal</h4>
          <ul className="footer-links">
            <li><Link className="footer-link" to="">Privacy Policy</Link></li>
            <li><Link className="footer-link" to="">Terms of Service</Link></li>
            <li><Link className="footer-link" to="">Cookie Preferences</Link></li>
            <li><Link className="footer-link" to="">Corporate Info</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 IWATCH. All rights reserved.</p>
      </div>
    </footer>
  )
}