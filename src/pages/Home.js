import { useState } from "react";
import mentor from "../assets/mentoring.png";
import rodemap from "../assets/rodemap.png";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import RegisterModal from "../components/RegisterModal";

const Home = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6">
          <img src={mentor} alt="mentor" className="w-100" />
        </div>
        <div className="col-md-6 p-5 mt-5">
          <h2>Mentoring India provides you best mentor service.</h2>
          <p>
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content. Lorem ipsum may be
            used as a placeholder before final copy is available.
          </p>
          <div className="p-2">
            <Button
              variant="primary"
              size="lg"
              type="submit"
              onClick={handleShow}
              className="button-color w-100"
            >
              We want to know you ?
            </Button>
          </div>
        </div>
      </div>
      <img src={rodemap} alt="mentor" className="w-100" />
      <RegisterModal
        show={show}
        handleClose={handleClose}
        handleShow={handleShow}
        initial={true}
      />
    </div>
  );
};

export default Home;
