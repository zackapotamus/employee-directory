import React from "react";
import Row from "../components/Row";
import Col from "../components/Col";

const EmployeeRow = (props) => {
  return (
    <Row>
      <Col width={1}>
        <img
          src={props.employee.picture.thumbnail}
          alt={`${props.employee.name.first} ${props.employee.name.last}`}
          style={{width: 48}}
        />
      </Col>
      <Col>{`${props.employee.name.first} ${props.employee.name.last}`}</Col>
      <Col>{props.employee.email}</Col>
      <Col>{props.employee.phone}</Col>
    </Row>
  );
};

export default EmployeeRow;
