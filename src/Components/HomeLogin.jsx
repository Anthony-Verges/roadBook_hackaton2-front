import React from "react";
import { useState } from "react";
import styled from "styled-components";
import logo from "../Images/logoOTRA_W.png";
import PropTypes from "prop-types";

const Login = ({ setToken }) => {
  const [userName, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = {
      userName,
      password,
    };
    setToken(token);
    console.log(token);
  };

  return (
    <Form>
      <Img src={logo} alt="" />
      <Title1>LOG IN</Title1>
      <label>
        <Paragraphe>Username</Paragraphe>
        <Input
          type="text"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
      </label>
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
        <Button type="submit" onClick={handleSubmit}>
          Submit
        </Button>
        <Paragraphe>You don't have an account ?</Paragraphe>
        <Button type="submit">Register</Button>
      </div>
    </Form>
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
  padding-bottom: 100px;
`;

const Button = styled.button`
  border-radius: 50px;
  background-color: #2a2f45;
  padding: 14px 40px;
  border-style: none;
  margin-top: 25px;
  color: white;
  font-size: 15px;
  outline: none;
`;

const Paragraphe = styled.p`
  color: white;
  font-size: 20px;
  font-family: “Pragati Narrow”, sans-serif; ;
`;

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};

export default Login;
