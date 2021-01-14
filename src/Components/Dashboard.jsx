import React, { useContext } from "react";
import { Container, Row, Col } from "reactstrap";
import { MapContainer, TileLayer } from "react-leaflet";
import UserContext from "../UserContext";
// Marker, Popup
import styled from "styled-components";

const Dashboard = () => {
  const { userToken } = useContext(UserContext);
  return (
    <div>
      <h1>Dashboard</h1>;
      <Container>
        <Row>
          <Col></Col>
          <Col>
            <Map
              // style={{ width: "100px", heigth: "100px" }}
              center={[43.477, -1.565]}
              zoom={13}
              scrollWheelZoom={false}
            >
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {/* <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker> */}
            </Map>
          </Col>
        </Row>
      </Container>
      ;
    </div>
  );
};

const Map = styled(MapContainer)`
  width: 500px;
  height: 500px;
`;

export default Dashboard;
