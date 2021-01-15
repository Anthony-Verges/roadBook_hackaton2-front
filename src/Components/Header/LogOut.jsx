import axios from "axios";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../UserContext";
import logout from "../Images/logout.png";
import styled from "styled-components";

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
    <Div>
      <Img src={logout} onClick={handleSignOut} alt="" />
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10vh;
`;

const Img = styled.img`
  cursor: pointer;
  width: 35px;
`;
export default LogOut;
