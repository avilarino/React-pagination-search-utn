import { Row, Col, Pagination } from "react-bootstrap";
const Paginate = ({ next, prev, handlePages }) => {
  const handlerNext = () => {
    const [, query] = next.split("?");
    handlePages(query);
  };

  const handlerPrev = () => {
    const [, query] = prev.split("?");
    handlePages(query);
  };
  return (
    <Row>
      <Col>
        <Pagination>
          {!!prev && <Pagination.Prev onClick={handlerPrev} />}
          <Pagination.Next onClick={handlerNext} />
        </Pagination>
      </Col>
    </Row>
  );
};

export default Paginate;