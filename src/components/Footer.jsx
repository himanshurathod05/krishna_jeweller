import "./Footer.css";
import { AiOutlineMail } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-grid">

        {/* Company Info */}
        <div className="footer-col">
          <h4>Subscribe to receive exciting offers!</h4>
          <form className="footer-form">
            <input type="email" placeholder="Your email address" required  /><AiOutlineMail />
          </form>
          <div className="address">
            <h4>DEMIFINE FASHION PVT LTD</h4>
            <p><IoLocationOutline />Registered Address : Office No 501/502/503/504/505(A) 5th Floor, Verdant 84, Plot 1, Lane Z, Koregaon Park Annexe, Mundhwa, Pune, Maharashtra 411036.</p>
          </div>
        </div>

        <div className="footer-col">
          <span>Policy</span>
          <ul>
            <li>Shipping & Delivery Policy</li>
            <li>Return & Exchange Policy</li>
            <li>Lifetime Warranty Policy</li>
            <li>Lifetime BuyBack Policy</li>
            <li>Payment Policy</li>
            <li>Grievance Redressal Policy</li>
          </ul>
        </div>

        <div className="footer-col">
          <span>Help</span>
          <ul>
            <li>FAQ's</li>
            <li>Contact Us</li>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>Track Order</li>
            <li>Return & Exchange</li>
          </ul>
        </div>


        <div className="footer-col">
          <span>About Us</span>
          <ul>
            <li>About Us</li>
            <li>Blogs</li>
            <li>Contact Us</li>
            <li>Stores & Services</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        All Rights Reserved  © {new Date().getFullYear()} Krishna
      </div>
    </footer>
  );
};

export default Footer;