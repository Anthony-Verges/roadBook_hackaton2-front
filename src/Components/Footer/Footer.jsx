import React from "react";
import { Container, Row, Col } from "reactstrap";
import logo from "../Images/logoOTRA_W.png";
import styled from "styled-components";
import logoFb from "./logoFacebook.png";
import logoLkd from "./logoLinkedin.png";
import logoInsta from "./logoInstagram.png";
const Footer = () => {
  return (
    <div>
      <Background>
        <Container fluid>
          <MainStyled>
            <Row>
              <Logo1
                src={logo}
                alt="TRAVELR your new travel partner all around the word"
              />
            </Row>
            <Row>
              <Paragraphe>
                TRAVELR lets you keep track of all your favorite places around
                the world, plan your trip easly, and find the best way to enjoy
                your next trip!
              </Paragraphe>
            </Row>
            <Row>
              <Col>
                <Logo2 src={logoInsta} alt="" />
              </Col>
              <Col>
                <Logo2 src={logoFb} alt="" />
              </Col>
              <Col>
                <Logo2 src={logoLkd} alt="" />
              </Col>
            </Row>
          </MainStyled>
        </Container>
      </Background>
    </div>
  );
};
const MainStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Background = styled.div`
  background-color: #5ad1d7;
  padding: 50px 0 50px 0;
`;
const Logo1 = styled.img`
  width: 200px;
`;
const Logo2 = styled.img`
  width: 30px;
`;
const Paragraphe = styled.p`
  margin-top: 10px;
  margin-bottom: 30px;
  margin-left: 20px;
  width: 500px;
  text-align: center;
  color: white;
`;
export default Footer;
