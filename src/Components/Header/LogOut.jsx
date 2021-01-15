import { Button } from "reactstrap";
import axios from "axios";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../UserContext";

const LogOut = () => {
  const { userToken, setUserToken } = useContext(UserContext);
  console.log(userToken);

  const history = useHistory();

  const handleSignOut = () => {
    localStorage.removeItem("token");

    axios.interceptors.request.use(
      (config) => {
        const { origin } = new URL(config.url);
        const allowedOrigins = ["http://localhost:8000"];
        if (allowedOrigins.includes(origin)) {
          config.headers.authorization = "";
          config.headers.userId = "";
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
    setUserToken("");
    history.push("/");
  };
  return (
    <div>
      <Button onClick={handleSignOut}>Logout</Button>
    </div>
  );
};

// const StyledButton = styled(Button)``;

export default LogOut;
