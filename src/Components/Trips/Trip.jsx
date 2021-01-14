import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import { API_URL } from "../../env";
import { Spinner } from "reactstrap";

const Trip = () => {
  const [trip, setTrip] = useState([]);
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const params = useParams();
  // const tripId = params.id;

  useEffect(() => {
    const getTrip = async () => {
      try {
        const trip = await Axios.get(`${API_URL}/trips`);

        setTrip(trip.data);
        setUser(user.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    getTrip();
  }, []);

  return (
    <>
      {loading ? (
        <Spinner color="primary" />
      ) : (
        <div>
          <h1>{trip.title}</h1>
          <ul>
            <li>Duration : {user.trip.description}</li>
            <li>Description : {user.trip.duration}</li>
            {/* <li>step: {trip.step}</li> */}
          </ul>
        </div>
      )}
      ;
    </>
  );
};

export default Trip;
