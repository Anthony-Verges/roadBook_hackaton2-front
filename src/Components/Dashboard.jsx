import React from "react";
import { Container, Row, Col } from "reactstrap";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import styled from "styled-components";

const Dashboard = (props) => {
  return (
    <>
      <h1>Dashboard</h1>
      <Container>
        <Row xs={1} md={2}>
          <Col>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Explicabo quo maiores aspernatur fugiat libero, repudiandae et
              vero quas doloremque! Voluptatem non doloremque velit tempore aut
              nobis explicabo perferendis ut maxime?
            </p>
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
      ;
    </>
  );
};

const Map = styled(MapContainer)`
  width: 100%;
  height: 500px;
`;

export default Dashboard;
