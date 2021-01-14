const { useHistory } = require("react-router-dom");

const Token = () => {
  const history = useHistory();
  const token = localStorage.getItem("token");

  if (!token) {
    return history.push("/");
  }

  return history.push("/Trip");
};

module.export = Token;
