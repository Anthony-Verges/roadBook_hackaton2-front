import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./Components/HomeLogin";
import Register from "./Components/Register";
import Dashboard from "./Components/Dashboard";
import Trip from "./Components/Trip";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

const Router = () => {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/Registration" component={Register} />
        <Route exact path="/Dashboard" component={Dashboard} />
        <Route exact path="/Trip" component={Trip} />
      </Switch>
      {/* <Footer /> */}
    </BrowserRouter>
  );
};

export default Router;
