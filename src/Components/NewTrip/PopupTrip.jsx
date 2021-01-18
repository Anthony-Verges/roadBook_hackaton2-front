import React, { useState } from "react";
import { Popover, PopoverBody } from "reactstrap";

import PopUpForm from "./FormNewTrip";
import styled from "styled-components";

const PopUpTrip = () => {
  const [popoverOpen, setPopoverOpen] = useState(false);

  const toggle = () => setPopoverOpen(!popoverOpen);

  return (
    <div>
      <ButtonStyle id="Popover1" type="button">
        Add a new trip
      </ButtonStyle>
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

const ButtonStyle = styled.button`
  border-radius: 50px;
  background-color: #2a2f45;
  padding: 14px 40px;
  border-style: none;
  color: white;
  font-size: 15px;
  outline: none;
  cursor: pointer;
  margin-bottom: 40px;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

export default PopUpTrip;
