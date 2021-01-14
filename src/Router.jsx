import { BrowserRouter, Route, Switch } from "react-router-dom";
// import { useState } from "react";
// import HomeLogin from "./Components/HomeLogin";
import UserContext from "./UserContext";
import Login from "./Components/Authentification/Login";
import Register from "./Components/Authentification/Register";
import Dashboard from "./Components/Dashboard";
import Trip from "./Components/Trip";
import { useState } from "react";
// import Header from "./Components/Header";
// import Footer from "./Components/Footer";

const Router = () => {
  const [userToken, setUserToken] = useState("");
  return (
    <BrowserRouter>
      <UserContext.Provider value={{ userToken, setUserToken }}>
        {/* <Header /> */}
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/Registration" component={Register} />
          <Route exact path="/Dashboard" component={Dashboard} />
          <Route exact path="/Trip" component={Trip} />
        </Switch>
      </UserContext.Provider>
      {/* <Footer /> */}
    </BrowserRouter>
  );
};

export default Router;
