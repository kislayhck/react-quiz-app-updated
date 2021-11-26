import { Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import mentoring from "../assets/mentoringLogo.png";

const Menu = () => {
  return (
    <Container fluid>
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <LinkContainer to="/">
          <Nav.Link className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
            <img src={mentoring} alt="logo" width="40%" />
          </Nav.Link>
        </LinkContainer>
        <Nav>
          {/* <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li>
              <LinkContainer to="/about">
                <Nav.Link className="nav-link px-2 link-secondary">
                  School
                </Nav.Link>
              </LinkContainer>
            </li>
            <li>
              <LinkContainer to="/questions">
                <Nav.Link className="nav-link px-2 link-secondary">
                  Questions
                </Nav.Link>
              </LinkContainer>
            </li>
          </ul> */}

          {/* <div className="col-md-3 text-end">
            <LinkContainer to="/">
              <button type="button" className="btn btn-outline-primary me-2">
                Website
              </button>
            </LinkContainer>
          </div> */}
        </Nav>
        <div className="d-flex">
          <LinkContainer to="/school">
            <Nav.Link className="btn btn-outline-primary me-2">School</Nav.Link>
          </LinkContainer>
          <a
            className="btn btn-outline-primary me-2"
            href="https://mentoringindia.co.in/"
            rel="noreferrer"
            target="_blank"
          >
            Website
          </a>
        </div>
      </header>
    </Container>
  );
};

export default Menu;
