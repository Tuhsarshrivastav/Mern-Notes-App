import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Container,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { logout } from "../actions/userActions";
const Header = ({ setSearch }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.userLogin);

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
                pp
                className="mr-2"
                aria-label="Search"
                onChange={(e) => setSearch(e.target.value)}
              />
            </Form>
          </Nav>
          <Nav>
            {userInfo ? (
              <>
                <Nav.Link>
                  <Link to="/mynotes">My Notes</Link>
                </Nav.Link>
                <NavDropdown title="Profile" id="collasible-nav-dropdown">
                  <NavDropdown.Item>
                    <Link to="/profile">My Profile</Link>
                  </NavDropdown.Item>

                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={LogoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            ) : (
              <Nav.Link>
                <Link to="/login">Login</Link>
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
