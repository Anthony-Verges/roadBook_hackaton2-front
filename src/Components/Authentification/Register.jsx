import React from "react";
// import axios from "axios";
// import { useState } from "react";
// import { useHistory } from "react-router-dom";
import styled from "styled-components";
import logo from "../Images/logoOTRA_W.png";

const Register = () => {
  // const history = useHistory();

  // const [datas, setDatas] = useState({
  //   firstname: "",
  //   lastaname: "",
  //   email: "",
  //   password: "",
  // });

  // const handleSubmit = (e)=>{
  //   if (
  //     datas.firstanme &&
  //     datas.lastname &&
  //     datas.email &&
  //     datas.password
  //   ) {
  //     e.preventDefault();
  //     axios.post('http://lacalhost:8000/api/v1/users', datas);
  //     .then(()=>{
  //       history.pushState('/login')
  //     })
  //     .catch((err)=> console.log(err));
  //   } else {

  //   }
  // };

  return (
    <Form>
      <Img src={logo} alt="" />
      <Title1>REGISTRATION</Title1>
      <label>
        <Paragraphe>Firstname</Paragraphe>
        <Input type="text" />
      </label>
      <label>
        <Paragraphe>Surname</Paragraphe>
        <Input type="text" />
      </label>
      <label>
        <Paragraphe>E-mail</Paragraphe>
        <Input type="email" />
      </label>
      <label>
        <Paragraphe>Password</Paragraphe>
        <Input type="password" />
      </label>
      <div>
        <Button type="submit">Register</Button>
      </div>
    </Form>
  );
};

const Img = styled.img`
  width: 400px;
`;

const Title1 = styled.h1`
  color: #2a2f45;
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
  padding-bottom: 200px;
`;

const Button = styled.button`
  border-radius: 50px;
  background-color: #2a2f45;
  padding: 14px 40px;
  border-style: none;
  margin-top: 25px;
  color: white;
  font-size: 15px;
`;

const Paragraphe = styled.p`
  color: white;
  font-size: 20px;
  font-family: “Pragati Narrow”, sans-serif; ;
`;

export default Register;
