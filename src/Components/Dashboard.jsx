import { Col, Container, Row, Spinner } from "reactstrap";
import { useState, useEffect, useCallback, useRef } from "react";
import Header from "./Header/Header";
import axios from "axios";
import { API_URL } from "../env";
import TripCard from "./TripCard";
import MapGL from "react-map-gl";
import Geocoder from "react-map-gl-geocoder";
import "mapbox-gl/dist/mapbox-gl.css";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import PopUpTrip from "./NewTrip/PopupTrip";
import styled from "styled-components";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoiYWxiMSIsImEiOiJja2p4ZGlnMDEwZ2d2MnFwZzA4eGswbmM5In0.BOWF9kak7u5wTast5_SrwQ";

const Dashboard = () => {
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [viewport, setViewport] = useState({
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8,
  });
  const mapRef = useRef();
  const handleViewportChange = useCallback(
    (newViewport) => setViewport(newViewport),
    []
  );

  const handleGeocoderViewportChange = useCallback(
    (newViewport) => {
      const geocoderDefaultOverrides = { transitionDuration: 1000 };

      return handleViewportChange({
        ...newViewport,
        ...geocoderDefaultOverrides,
      });
    },
    [handleViewportChange]
  );

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
    getUser([]);
  });

  return (
    <>
      {loading ? (
        <Spinner color="primary" />
      ) : (
        <div>
          <Header />

          <Container fluid className="pt-5">
            <Row>
              <Col>
                {trips.map((trip) => {
                  return (
                    <TripCard
                      title={trip.title}
                      Date={trip.Date}
                      description={trip.description}
                      latitude={trip.latitude}
                      longitude={trip.longitude}
                      key={trip.id}
                    />
                  );
                })}
                <ButtonPosition>
                  <PopUpTrip />
                </ButtonPosition>
              </Col>
              <Col>
                <div className="mb-4" style={{ height: "100vh" }}>
                  <MapGL
                    ref={mapRef}
                    {...viewport}
                    width="100%"
                    height="100%"
                    onViewportChange={handleViewportChange}
                    mapboxApiAccessToken={MAPBOX_TOKEN}
                  >
                    <Geocoder
                      mapRef={mapRef}
                      onViewportChange={handleGeocoderViewportChange}
                      mapboxApiAccessToken={MAPBOX_TOKEN}
                      position="top-left"
                    />
                  </MapGL>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      )}
    </>
  );
};

const ButtonPosition = styled.div`
  display: flex;
  flex-direction: row;
`;

export default Dashboard;
