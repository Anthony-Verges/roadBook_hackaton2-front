import { Card, CardText, CardTitle, Col, Button } from "reactstrap";

function TripCard({ title, date, description, latitude, longitude }) {
  return (
    <div>
      <Col>
        <Card body>
          <CardTitle tag="h5">{title}</CardTitle>
          <CardText>{description}</CardText>
          <CardText>{date}</CardText>
          <CardText>latitude : {latitude}</CardText>
          <CardText>longitude : {longitude}</CardText>
          <Button>Check my roadbook</Button>
        </Card>
      </Col>
    </div>
  );
}

export default TripCard;
