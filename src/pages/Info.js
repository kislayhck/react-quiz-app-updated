import { useCookies } from "react-cookie";
import mentoringImg from "../assets/leftInfo.jpg";
import serviceImg from "../assets/service.png";

import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Instructions from "../components/Instructions";

const Info = () => {
  const [cookies] = useCookies(["user"]);
  const history = useHistory();

  const handleClick = () => {
    history.push("/questions");
  };

  return (
    <>
      <div className="mainBanner">
        <div className="row">
          <div className="col-md-6 infoMain">
            <h3>Hi,</h3>
            <h1>{cookies.firstName}</h1>
            <h1>{cookies.lastName}</h1>
          </div>
          <div className="col-md-6">
            <img
              src={mentoringImg}
              alt="mentor"
              width={800}
              className="img-fluid"
            />
          </div>
        </div>
      </div>
      <h1 className="text-center mt-5">Steps to be followed</h1>
      <img src={serviceImg} alt="service" className="w-100 img-fluid stepsTo" />
      <div className="p2 mt-5 mb-5">
        <Instructions />
      </div>
      <div className="bottomMain">
        <Button
          variant="primary"
          size="lg"
          type="submit"
          className=""
          onClick={handleClick}
        >
          Questions
        </Button>
      </div>
    </>
  );
};

export default Info;
