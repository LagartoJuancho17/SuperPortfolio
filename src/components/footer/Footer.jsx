import { Link } from "react-router-dom";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-col">
        <div className="footer-sub-col">
          <div className="footer-link">
            <Link to="https://www.youtube.com/@codegrid/">
              &#x2192; tobiasarraiza17@gmail.com
            </Link>
          </div>
        </div>
        <div className="footer-sub-col">
          <div className="footer-link">
            <Link to="https://www.instagram.com/tobiasarraiza_/">
              &#x2192; Instagram
            </Link>
          </div>
          <div className="footer-link">
            <Link to="https://www.behance.net/tobiasarraiza17">
              &#x2192; Behance
            </Link>
          </div>
        </div>
      </div>

      <div className="footer-col">
        <div className="footer-link">
          <p>&copy; Tobias Arraiza 2025</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
