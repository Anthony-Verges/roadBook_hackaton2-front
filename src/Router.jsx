import { BrowserRouter, Route, Switch } from "react-router-dom";
import UserContext from "./UserContext";
import Login from "./Components/Authentification/Login";
import Register from "./Components/Authentification/Register";
import Dashboard from "./Components/Dashboard";
import { useState } from "react";
import Trip from "./Components/Dashboard";
import Layout from "./Layout";

const Router = () => {
  const [userToken, setUserToken] = useState("");
  return (
    <BrowserRouter>
      <UserContext.Provider value={{ userToken, setUserToken }}>
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
      </UserContext.Provider>
    </BrowserRouter>
  );
};

export default Router;
