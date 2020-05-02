import React from "react";
// import tr from "../components/tr";
// import Col from "../components/Col";

const EmployeeRow = (props) => {
  return (
    <tr>
      {/* <Col width={1}> */}
      <td className="align-middle">
        <img
          src={props.employee.picture.thumbnail}
          alt={`${props.employee.name.first} ${props.employee.name.last}`}
          style={{width: 48}}
        />
      </td>
      {/* </Col> */}
      <td className="align-middle">{`${props.employee.name.first} ${props.employee.name.last}`}</td>
      <td className="align-middle">{props.employee.email}</td>
      <td className="align-middle">{props.employee.phone}</td>
    </tr>
  );
};

export default EmployeeRow;
