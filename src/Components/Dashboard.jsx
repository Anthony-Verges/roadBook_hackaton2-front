import { useState, useEffect } from "react";
import { Container, Spinner } from "reactstrap";

import Header from "./Header/Header";
import axios from "axios";
import { API_URL } from "../env";
import TripCard from "./TripCard";

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
  });

  return (
    <>
      {loading ? (
        <Spinner color="primary" />
      ) : (
        <div>
          <Header />
          <Container className="pt-5">
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
          </Container>
        </div>
      )}
      ;
    </>
  );
};

export default Dashboard;
