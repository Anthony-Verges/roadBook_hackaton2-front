import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./Components/HomeLogin";
import Register from "./Components/Register";
import Dashboard from "./Components/Dashboard";
import Trip from "./Components/Trip";
import Layout from "./Layout";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/Registration" component={Register} />
      </Switch>
      <Switch>
        <Layout>
          <Route exact path="/Dashboard" component={Dashboard} />
          <Route exact path="/trips" component={Trip} />
          <Route path="/trips/:id" component={Trip} />
        </Layout>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
