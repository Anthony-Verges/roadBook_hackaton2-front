import PropTypes from "prop-types";
import { Col, Container, Row } from "reactstrap";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Container fluid>
        <Header />
        <Row>
          <Col md="2"></Col>
          <Col md="10">{children}</Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
