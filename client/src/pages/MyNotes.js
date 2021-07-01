import MainScreen from "../components/MainScreen";
import { Button, Card, Badge, Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";
import { listNotes } from "../actions/notesActions";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
const MyNotes = () => {
  const noteList = useSelector((state) => state.noteList);
  const { loading, notes, error } = noteList;

  const userLogin = useSelector((state) => state.userLogin);

  const { userInfo } = userLogin;
  const history = useHistory();

  const dispatch = useDispatch();
  const deleteHandler = (id) => {
    if (window.confirm("Are you sure")) {
    }
  };

  useEffect(() => {
    dispatch(listNotes());
    if (!userInfo) {
      history.push("/");
    }
  }, [dispatch]);
  return (
    <MainScreen title={`welcome back${userInfo.name}...`}>
      <Link to="createnote">
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
          Create New Note
        </Button>
      </Link>
      {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
      {loading && <Loading />}
      {notes?.map((note) => (
        <Accordion key={note._id}>
          <Card style={{ margin: 10 }}>
            <Card.Header style={{ display: "flex" }}>
              <span
                style={{
                  color: "black",
                  textDecoration: "none",
                  flex: "1",
                  cursor: "pointer",
                  alignSelf: "center",
                  fontSize: 18,
                }}
              >
                <Accordion.Toggle eventKey="0" varinat="link" as={Card.Text}>
                  {note.title}
                </Accordion.Toggle>
              </span>
              <div>
                <Button href={`note/${note._id}`}>Edit</Button>
                <Button
                  className="mx-2"
                  variant="danger"
                  onClick={() => deleteHandler(note._id)}
                >
                  Delete
                </Button>
              </div>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <h4>
                  <Badge varinat="success">Category - {note.category}</Badge>
                </h4>
                <blockquote className="blockquote mb-0">
                  <p>{note.content}</p>
                  <footer className="blockquote-footer">
                    Created on{" "}
                    <cite title="Source Title">
                      {note.createdAt.substring(0, 10)}
                    </cite>
                  </footer>
                </blockquote>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      ))}
    </MainScreen>
  );
};

export default MyNotes;
