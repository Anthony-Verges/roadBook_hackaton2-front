import React from "react";
import styled from "styled-components";
import logo from "../Images/logoOTRA_W.png";

const Login = () => {
  return (
    <Form>
      <Img src={logo} alt="" />
      <label>
        <Paragraphe>Username</Paragraphe>
        <Input type="text" />
      </label>
      <label>
        <Paragraphe>Password</Paragraphe>
        <Input type="password" />
      </label>
      <div>
        <Button type="submit">Submit</Button>
      </div>
    </Form>
  );
};

const Img = styled.img`
  width: 250px;
`;

const Input = styled.input`
  border-radius: 50px;
  border-style: none;
  width: 200px;
  height: 25px;
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
  background-color: white;
  padding: 14px 40px;
  border-style: none;
  margin-top: 25px;
  color: #5ad1d7;
  font-size: 15px;
`;

const Paragraphe = styled.p`
  color: white;
  font-size: 20px;
  font-family: “Pragati Narrow”, sans-serif; ;
`;

export default Login;
