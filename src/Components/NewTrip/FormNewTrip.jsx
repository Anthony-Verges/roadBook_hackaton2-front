import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { useState } from "react";
// const express = require("express");
// const router = express.Router();
// const multer = require("multer");
// const upload = multer({ dest: "tmp/" });
// const fs = require("fs");

const PopUpForm = ({ title, date, description, latitude }) => {
  const [newTrip, setNewTrip] = useState({
    title: "",
    date: "",
    description: "",
    latitude: "",
  });
  const handleSubmit = (e) => {
    e.prevent.default();
  };

  return (
    <>
      <Form>
        <FormGroup>
          <Label for="titleTrip">Title</Label>
          <Input
            onChange={(e) => {
              setNewTrip({ ...newTrip, title: e.target.value });
            }}
            type="text"
            name="titleTrip"
            id="titleTrip"
          />
        </FormGroup>
        <FormGroup>
          <Label for="tripDesciption">Description</Label>
          <Input
            onChange={(e) => {
              setNewTrip({ ...newTrip, description: e.target.value });
            }}
            type="textarea"
            name="textarea"
            id="tripDesciption"
          />
        </FormGroup>
        <FormGroup>
          <Label for="City">City</Label>
          <Input
            onChange={(e) => {
              setNewTrip({ ...newTrip, latitude: +e.target.value });
            }}
            type="number"
            name="title"
            id="title"
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleDate">Date</Label>
          <Input
            onChange={(e) => {
              setNewTrip({ ...newTrip, date: e.target.value });
            }}
            type="date"
            name="date"
            id="exampleDate"
            placeholder="date placeholder"
          />
        </FormGroup>
        {/* <FormGroup>
          <Label for="exampleFile">Upload Media</Label>
          <Input type="file" name="file" id="exampleFile" />
        </FormGroup> */}
        <Button onSubmit={handleSubmit}>Submit</Button>
      </Form>
    </>
  );
};

export default PopUpForm;
