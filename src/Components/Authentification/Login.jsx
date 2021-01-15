import React, { useContext } from "react";
import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import logo from "../Images/logoOTRA_W.png";
import UserContext from "../../UserContext";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { userToken, setUserToken } = useContext(UserContext);
  console.log(userToken);

  const handleSubmit = (e) => {
    const datas = {
      email,
      password,
    };
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/v1/auth", datas)
      .then((response) => {
        setUserToken(response.data.token);
        localStorage.setItem("token", response.data.token);

        axios.interceptors.request
          .use(
            (config) => {
              const { origin } = new URL(config.url);
              const allowedOrigins = localStorage.getItem("token");
              const token = localStorage.getItem("token");
              if (allowedOrigins.includes(origin)) {
                // eslint-disable-next-line no-undef
                config.headers.authorization = `Bearer ${token}`;
              }
              return config;
            },
            (error) => {
              return Promise.reject(error);
            }
          )
          .then(history.push("/Dashboard"));
      })

      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Form method="post" onSubmit={(e) => handleSubmit(e)}>
        <Img src={logo} alt="" />
        <Title1>LOG IN</Title1>
        <label>
          <Paragraphe>Email</Paragraphe>
          <Input
            type="text"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </label>
        <div>
          <label>
            <Paragraphe>Password</Paragraphe>
            <Input
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </label>
          <div>
            <Button>Submit</Button>
            <Paragraphe>You don't have an account ?</Paragraphe>
            <Link to="/Registration">
              <Button>Register</Button>
            </Link>
          </div>
        </div>
      </Form>
    </>
  );
};

const Title1 = styled.h1`
  color: #2a2f45;
`;

const Img = styled.img`
  width: 400px;
`;

const Input = styled.input`
  border-radius: 50px;
  border-style: none;
  width: 200px;
  height: 25px;
  outline: none;
`;

const Form = styled.form`
  background-color: #5ad1d7;
  height: 100vh;
  text-align: center;
  padding-top: 50px;
  padding-bottom: 150px;
`;

const Button = styled.button`
  border-radius: 50px;
  background-color: #2a2f45;
  padding: 14px 40px;
  border-style: none;
  color: white;
  font-size: 15px;
  outline: none;
  cursor: pointer;
  margin-bottom: 40px;
`;

const Paragraphe = styled.p`
  color: white;
  font-size: 20px;
  font-family: “Pragati Narrow”, sans-serif;
  padding-top: 0px;
`;
const Section = styled.div`
  color: white;
  background-color: #5ad1d7;
  text-align: center;
`;

export default Login;
