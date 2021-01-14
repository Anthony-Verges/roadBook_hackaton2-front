import React from "react";
import { Container, Row, Col } from "reactstrap";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import styled from "styled-components";
import Header from "./Header/Header";
import PopUpTrip from "./Trips/PopupTrip";

const Dashboard = () => {
  return (
    <div>
      <Header />
      <h1>Dashboard</h1>
      <Container>
        <Row>
          <Col>
            <PopUpTrip />
          </Col>
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
    </div>
  );
};

const Map = styled(MapContainer)`
  width: 500px;
  height: 500px;
`;

export default Dashboard;
