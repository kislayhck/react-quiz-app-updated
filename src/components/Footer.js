import "./style.css";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
  AiOutlineWhatsApp,
  IoIosCall,
} from "react-icons/ai";

const Footer = () => {
  const year = new Date().getFullYear();

  const logoColor = {
    width: "30px",
    height: "30px",
    marginRight: "10px",
    color: "RGB(243, 141, 8)",
  };

  return (
    <>
      <footer className="text-center text-capitalize footer d-flex justify-content-between footerText">
        copyright mentoring india &copy; {year}
        <div>
          <a href="https://instagram.com" rel="noreferrer" target="_blank">
            <AiFillMail style={logoColor} />
          </a>
          <a
            href="https://instagram.com/mentoring_india?utm_medium=copy_link"
            rel="noreferrer"
            target="_blank"
          >
            <AiFillInstagram style={logoColor} />
          </a>
          <a
            href="https://www.linkedin.com/company/mentoringindia"
            rel="noreferrer"
            target="_blank"
          >
            <AiFillLinkedin style={logoColor} />
          </a>
          <a href="https://instagram.com" rel="noreferrer" target="_blank">
            <AiOutlineWhatsApp style={logoColor} />
          </a>
          {/* <a href="https://instagram.com" rel="noreferrer" target="_blank">
            <IoIosCall style={logoColor} />
          </a> */}
        </div>
      </footer>
    </>
  );
};

export default Footer;
