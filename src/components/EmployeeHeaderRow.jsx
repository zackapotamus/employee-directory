import React from "react";
// import Col from "./Col";
// import tr from "./tr";

const EmployeeHeaderRow = (props) => {
  return (
    <tr>
      {/* <Col width={1}> */}
      <th className="align-middle" scope="col">
        <div style={{ width: 48, height: 48 }}></div>
      {/* </Col> */}
      </th>
      <th className="align-middle" scope="col">
      <div className="input-group">
          <div className="input-group-prepend">
            <button
              className="btn btn-primary"
              type="button"
              id="button-addon1"
              onClick={props.sortByName}
            >
              Name
            </button>
          </div>
          <input
            name="name"
            type="text"
            className="form-control"
            placeholder=""
            aria-label="Example text with button addon"
            aria-describedby="button-addon1"
            onChange={props.handleInputChange}
            value={props.name}
          />
        </div>
      </th>
      <th className="align-middle" scope="col">
      <div className="input-group">
          <div className="input-group-prepend">
            <button
              className="btn btn-primary"
              type="button"
              id="button-addon1"
              onClick={props.sortByEmail}
            >
              Email
            </button>
          </div>
          <input
            type="text"
            name="email"
            className="form-control"
            placeholder=""
            aria-label="Example text with button addon"
            aria-describedby="button-addon1"
            onChange={props.handleInputChange}
            value={props.email}
          />
        </div>
      </th>
      <th className="align-middle" scope="col">
        <div className="input-group">
          <div className="input-group-prepend">
            <button
              className="btn btn-primary"
              type="button"
              id="button-addon1"
              onClick={props.sortByPhone}
            >
              Phone
            </button>
          </div>
          <input
            name="phone"
            type="text"
            className="form-control"
            placeholder=""
            aria-label="Example text with button addon"
            aria-describedby="button-addon1"
            onChange={props.handleInputChange}
            value={props.phone}
          />
        </div>
      </th>
    </tr>
  );
};

export default EmployeeHeaderRow;
