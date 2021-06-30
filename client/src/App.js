import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MyNotes from "./pages/MyNotes";
function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/mynotes" component={MyNotes} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
