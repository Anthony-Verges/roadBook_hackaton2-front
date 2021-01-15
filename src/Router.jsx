import { BrowserRouter, Route, Switch } from "react-router-dom";
import UserContext from "./UserContext";
import Login from "./Components/Authentification/Login";
import Register from "./Components/Authentification/Register";
import Dashboard from "./Components/Dashboard";
import { useState } from "react";
// import Trip from "./Components/Dashboard";
import Layout from "./Layout";

const Router = () => {
  const [userToken, setUserToken] = useState("");

  // const checkToken = () => {
  //   if (userToken) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // };

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ userToken, setUserToken }}>
        <Switch>
          {userToken ? (
            <>
              <Layout>
                <Route exact path="/Dashboard" component={Dashboard} />
                {/* <Route exact path="/" component={Login} /> */}
                <Route exact path="/Registration" component={Register} />
              </Layout>
            </>
          ) : (
            <Route exact path="/" component={Login} />

            // <Login exact path="/" />
          )}
        </Switch>
      </UserContext.Provider>
    </BrowserRouter>
  );
};

export default Router;
