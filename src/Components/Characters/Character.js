import moment from "moment";
import { Col, Card } from "react-bootstrap";

const Character = ({ image, name, gender, status, species, created }) => {
  return (
    <Col md={4} className="mt-3 mb-3">
      <Card>
        <Card.Img variant={"top"} src={image} alt="" />
        <Card.Body>
          <Card.Title>
            {name} - {gender}
          </Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Character;