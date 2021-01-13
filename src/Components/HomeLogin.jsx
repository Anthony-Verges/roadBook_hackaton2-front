import React from "react";
import styled from "styled-components";
import logo from "../Images/logoOTRA_W.png";

const Login = () => {
  return (
    <Form>
      <Img src={logo} alt="" />
      <label>
        <Paragraphe>Username</Paragraphe>
        <input type="text" />
      </label>
      <label>
        <Paragraphe>Password</Paragraphe>
        <input type="password" />
      </label>
      <div>
        <Button type="submit">Submit</Button>
      </div>
    </Form>
  );
};

const Form = styled.form`
  background-color: #5ad1d7;
  height: 100vh;
  text-align: center;
  padding-top: 50px;
  padding-bottom: 100px;
`;

const Button = styled.button`
  border-radius: 50px;
  background-color: white;
  padding: 14px 40px;
  border-style: none;
  margin-top: 25px;
`;

const Paragraphe = styled.p`
  color: white;
  font-size: 20px;
  font-family: “Pragati Narrow”, sans-serif; ;
`;

const Img = styled.img`
  width: 250px;
`;

export default Login;
