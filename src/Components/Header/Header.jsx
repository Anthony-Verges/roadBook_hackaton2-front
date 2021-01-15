import logo from "../Images/logoOTRA_W.png";
import styled from "styled-components";
import { Container, Col, Row } from "reactstrap";
import LogOut from "./LogOut";

const Header = () => {
  return (
    <Container fluid>
      <HeaderRow>
        <Col></Col>
        <Col>
          <MainLogo src={logo} alt="" />
        </Col>
        <Col>
          <LogOut />
        </Col>
      </HeaderRow>
    </Container>
  );
};

const HeaderRow = styled(Row)`
  background-color: #5ad1d7;
`;

const MainLogo = styled.img`
  width: 200px;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

export default Header;
