import React from "react";
import Col from "./Col";
import Row from "./Row";

const EmployeeHeaderRow = (props) => {
  return (
    <Row>
      <Col width={1}>
        <div style={{ width: 48, height: 48 }}></div>
      </Col>
      <Col>
      <div className="input-group">
          <div className="input-group-prepend">
            <button
              className="btn btn-dark"
              type="button"
              id="button-addon1"
              onClick={props.sortByName}
            >
              Name
            </button>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder=""
            aria-label="Example text with button addon"
            aria-describedby="button-addon1"
            onChange={props.handleNameChange}
          />
        </div>
      </Col>
      <Col>
      <div className="input-group">
          <div className="input-group-prepend">
            <button
              className="btn btn-dark"
              type="button"
              id="button-addon1"
              onClick={props.sortByEmail}
            >
              Email
            </button>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder=""
            aria-label="Example text with button addon"
            aria-describedby="button-addon1"
            onChange={props.handleEmailChange}
          />
        </div>
      </Col>
      <Col>
        <div className="input-group">
          <div className="input-group-prepend">
            <button
              className="btn btn-dark"
              type="button"
              id="button-addon1"
              // onClick={props.sortByPhone}
            >
              Phone
            </button>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder=""
            aria-label="Example text with button addon"
            aria-describedby="button-addon1"
            // onChange={props.handlePhoneChange}
          />
        </div>
      </Col>
    </Row>
  );
};

export default EmployeeHeaderRow;
