import PropTypes from "prop-types";
import { Col, Container, Row } from "reactstrap";
import Footer from "./Components/Footer/Footer";
// import Header from "./Components/Header/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>{children}</Col>
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
