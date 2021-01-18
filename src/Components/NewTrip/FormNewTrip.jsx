import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { useState } from "react";
import axios from "axios";
import { API_URL } from "../../../env";

// const express = require("express");
// const router = express.Router();
// const multer = require("multer");
// const upload = multer({ dest: "tmp/" });
// const fs = require("fs");

const PopUpForm = ({ title, date, description, latitude, longitude }) => {
  //const { userToken } = useContext();
  const [newTrip, setNewTrip] = useState({
    title: "",
    date: "",
    description: "",
    latitude: "",
    longitude: "",
  });
  const handleSubmit = (e) => {
    e.prevent.default();
    axios.post(`${API_URL}/trips`, newTrip);
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
          <Label for="City">latitude</Label>
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
          <Label for="City">longitude</Label>
          <Input
            onChange={(e) => {
              setNewTrip({ ...newTrip, longitude: +e.target.value });
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
