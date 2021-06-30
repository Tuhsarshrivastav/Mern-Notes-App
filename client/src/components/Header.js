import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Container,
} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { logout } from "../actions/userActions";
const Header = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const LogoutHandler = () => {
    dispatch(logout());
    history.push("/");
  };

  return (
    <Navbar bg="light" expand="lg" varint="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/">Notes-Zipper</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="m-auto">
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="mr-2"
                aria-label="Search"
              />
            </Form>
          </Nav>
          <Nav>
            <Nav.Link>
              <Link to="/mynotes">My Notes</Link>
            </Nav.Link>
            <NavDropdown title="Tushar" id="navbarScrollingDropdown">
              <NavDropdown.Item>My Profile</NavDropdown.Item>
              <NavDropdown.Item onClick={LogoutHandler}>
                Logout
              </NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
