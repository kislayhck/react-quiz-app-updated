import "./style.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <footer className="text-center text-capitalize footer">
        copyright mentoring india &copy; {year}
      </footer>
    </>
  );
};

export default Footer;
