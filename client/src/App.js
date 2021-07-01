import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MyNotes from "./pages/MyNotes";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CreateNote from "./pages/CreateNote";
import SingleNote from "./pages/SingleNote";
import { useState } from "react";
import ProfileScreen from "./pages/ProfileScreen";
function App() {
  const [search, setSearch] = useState("");
  return (
    <Router>
      <Header setSearch={(s) => setSearch(s)} />
      <Switch>
        <Route exact path="/" component={LandingPage} />

        <Route
          exact
          path="/mynotes"
          component={({ history }) => (
            <MyNotes search={search} history={history} />
          )}
        />

        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/profile" component={ProfileScreen} />
        <Route exact path="/createnote" component={CreateNote} />
        <Route exact path="/note/:id" component={SingleNote} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
