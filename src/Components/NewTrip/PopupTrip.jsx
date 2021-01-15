import React, { useState } from "react";
import { Button, Popover, PopoverHeader, PopoverBody } from "reactstrap";
import PopUpForm from "./FormNewTrip";

const PopUpTrip = (props) => {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [title, setTitle] = useState();

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
