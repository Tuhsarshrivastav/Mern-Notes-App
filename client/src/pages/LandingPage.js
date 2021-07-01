import { useEffect } from "react";
import { Container, Row, Button } from "react-bootstrap";
import "./LandingPage.css";
import {Link} from 'react-router-dom'
const LandingPage = ({history}) => {
  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      history.push("/mynotes");
    }
  }, [history]);
  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro-text">
            <div>
              <h1 className="title">Welcome To Note Zipper</h1>
              <p className="subtitle">One Safe Place for all your Notes</p>
            </div>
            <div className="buttonContainer">
              <Link to="/login">
                <Button
                  size="lg"
                  variant="outline-primary"
                  className="landingbutton"
                >
                  Login
                </Button>
              </Link>
              <Link to="/register">
                <Button
                  variant="outline-primary"
                  className="landingbutton"
                  size="lg"
                >
                  Register
                </Button>
              </Link>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
