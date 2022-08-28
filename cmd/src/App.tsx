import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import Plan from "./Routes/Plan";
import Announce from "./Routes/Announce";
import Student from "./Routes/Student";
import Write from "./Routes/Write";
import Info from "./Routes/Info";
import Login from "./Routes/Login";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/plan">
          <Plan />
        </Route>
        <Route path="/announce">
          <Announce />
        </Route>
        <Route path="/student">
          <Student />
        </Route>
        <Route path="/write">
          <Write />
        </Route>
        <Route path="/info">
          <Info />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
