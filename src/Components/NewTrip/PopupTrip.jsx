import axios from "axios";
import React, { useState, useEffect, useHistory } from "react";
import { Button, Popover, PopoverBody } from "reactstrap";
import { API_URL } from "../../env";
import PopUpForm from "./FormNewTrip";

const PopUpTrip = () => {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [trips, setTrips] = useState();
  const [loading, setLoading] = useState();

  const toggle = () => setPopoverOpen(!popoverOpen);

  return (
    <div>
      <Button id="Popover1" type="button">
        Add a new trip
      </Button>
      <Popover
        placement="bottom"
        isOpen={popoverOpen}
        target="Popover1"
        toggle={toggle}
      >
        <PopoverBody>
          <PopUpForm />
        </PopoverBody>
      </Popover>
    </div>
  );
};

export default PopUpTrip;
