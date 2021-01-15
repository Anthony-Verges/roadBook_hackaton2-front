import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

// const express = require("express");
// const router = express.Router();
// const multer = require("multer");
// const upload = multer({ dest: "tmp/" });
// const fs = require("fs");

const PopUpForm = () => {
  const [dataChange, setDataChange] = useState([]);

  const handleSubmit = (e) => {
    e.prevent.default();
    setDataChange(dataChange);
    console.log(dataChange);
  };

  return (
    <>
      <Form>
        <FormGroup>
          <Label for="titleTrip">Title Trip</Label>
          <Input
            onChange={(e) => {
              setDataChange({ ...dataChange, titleTrip: e.target.value });
            }}
            type="text"
            name="titleTrip"
            id="titleTrip"
          />
        </FormGroup>
        <FormGroup>
          <Label for="tripDesciption">Description of the trip</Label>
          <Input type="textarea" name="textarea" id="tripDesciption" />
        </FormGroup>
        <FormGroup>
          <Label for="City">City</Label>
          <Input type="text" name="title" id="title" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleDate">Date</Label>
          <Input
            type="date"
            name="date"
            id="exampleDate"
            placeholder="date placeholder"
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleFile">Upload Media</Label>
          <Input type="file" name="file" id="exampleFile" />
        </FormGroup>
        <Button onSubmit={handleSubmit}>Submit</Button>
      </Form>
    </>
  );
};

export default PopUpForm;
