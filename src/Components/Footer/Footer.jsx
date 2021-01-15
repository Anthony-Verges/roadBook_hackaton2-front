import React from "react";
import { Container, Row, Col } from "reactstrap";
import logo from "../Images/logoOTRA_W.png";
import styled from "styled-components";
import logoFb from "./logoFacebook.png";
import logoLkd from "./logoLinkedin.png";
import logoInsta from "./logoInstagram.png";
import ping from "../../Components/Header/Burger/ping.png";
// import * as FaIcons from 'react-icons/fa';
// RiFacebookCircleFill
// RiInstagramLine
// RiLinkedinBoxFill
// TiSocialLinkedinCircular

const Footer = () => {
  return (
    <div>
      <Background>
        <Container fluid>
          <RowStyled>
            <ColStyled xs="12" md="4">
              <Logo1
                src={logo}
                alt="TRAVELR your new travel partner all around the word"
              />
              <Paragraphe>
                TRAVELR lets you keep track of all your favorite places around
                the world, plan your trip easly, and find the best way to enjoy
                your next trip!
              </Paragraphe>
            </ColStyled>
            <ColStyled xs="12" md="4">
              <List>
                <img
                  src={ping}
                  alt="TRAVELR your new travel partner all around the word"
                />
                CONTACT US
              </List>
              <List>
                <img
                  src={ping}
                  alt="TRAVELR your new travel partner all around the word"
                />
                LEGAL INFORMATION
              </List>
              <List>
                <img
                  src={ping}
                  alt="TRAVELR your new travel partner all around the word"
                />
                PRIVACY POLICY
              </List>
              <List>
                <img
                  src={ping}
                  alt="TRAVELR your new travel partner all around the word"
                />
                MY ACCOUNT
              </List>
            </ColStyled>
            <ColStyled xs="12" md="4">
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
            </ColStyled>
          </RowStyled>
        </Container>
      </Background>
    </div>
  );
};

const RowStyled = styled(Row)`
  display: flex;
  align-items: baseline;
  justify-content: space-around;
`;

const ColStyled = styled(Col)`
  text-align: center;
`;

const Background = styled.div`
  background-color: #5ad1d7;
  padding: 50px 0 50px 0;
`;

const List = styled.li`
  padding-top: 20px;
  padding-bottom: 20px;
  list-style: none;
  margin-left: 130px;
  color: white;
`;

const Logo1 = styled.img`
  margin-left: 20px;
  width: 120px;
`;

const Logo2 = styled.img`
  width: 30px;
`;

const Paragraphe = styled.p`
  margin-left: 20px;
  color: white;
`;

export default Footer;
