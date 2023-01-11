import twitter from "../icons/twitter.png";
import facebook from "../icons/social-network.png";
import linkedIn from "../icons/linkedin.png";
import instagram from "../icons/instagram.png";
import { Link } from "react-router-dom";
import icon from "../icons/smartphone.png"
const Footer = () => {
  return (
    <>
      <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div className="col-md-4 d-flex align-items-center">
            <a
              href="/"
              className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
            >
              <svg className="bi" width="30" height="24"></svg>
            </a>
            <span className="mb-3 mb-md-0 text-muted creator"> <a href="#" className="text-decoration-none text-dark"> © 2022 Dani Matis <img src={icon} alt="icon" height={25} /></a></span>
          </div>

          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3">
              <a
                className="text-muted"
                href="https://twitter.com/?lang=en"
                target="blank"
              >
                {" "}
                <img src={twitter} alt="twitter" height={25} />
              </a>
            </li>
            <li className="ms-3">
              <a
                className="text-muted"
                href="https://www.facebook.com/"
                target="blank"
              >
                <img src={facebook} alt="facebook" height={25} />
              </a>
            </li>
            <li className="ms-3">
              <a
                className="text-muted"
                href="https://www.instagram.com/"
                target="blank"
              >
                <img src={instagram} alt="instagram" height={25} />
              </a>
            </li>
            <li className="ms-3">
              <a
                className="text-muted"
                href="https://www.linkedin.com/"
                target="blank"
              >
                <img src={linkedIn} alt="Linked In" height={25} />
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </>
  );
};
export default Footer;
