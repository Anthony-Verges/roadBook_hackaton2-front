import React, { useContext } from "react";
import { Container, Row, Col } from "reactstrap";
import { MapContainer, TileLayer } from "react-leaflet";
import { useState, useEffect } from "react";
import UserContext from "../UserContext";

import { Card, CardTitle, CardText, Spinner, Button } from "reactstrap";

import styled from "styled-components";
import Header from "./Header/Header";
import axios from "axios";
import { API_URL } from "../env";

const Dashboard = () => {
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      try {
        const trip = await axios.get(`${API_URL}/trips`);

        setTrips(trip.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    getUser();
  }, []);

  return (
    <>
      {loading ? (
        <Spinner color="primary" />
      ) : (
        <div>
          <Header />
          <h1>Dashboard</h1>
          <Container>
            <Row>
              <Col sm="6">
                <Card body>
                  <CardTitle tag="h5">{trips.title}</CardTitle>
                  <CardText>Durée du séjour: {trips.duration}</CardText>
                  <CardText>{trips.description}</CardText>
                  <Button>Go somewhere</Button>
                </Card>
              </Col>
              <Col sm="6">
                <Card body>
                  <CardTitle tag="h5">Special Title Treatment</CardTitle>
                  <CardText>
                    With supporting text below as a natural lead-in to
                    additional content.
                  </CardText>
                  <Button>Go somewhere</Button>
                </Card>
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
      )}
      ;
    </>
  );
};

const Map = styled(MapContainer)`
  width: 500px;
  height: 500px;
`;

export default Dashboard;
