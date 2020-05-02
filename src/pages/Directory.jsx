import React, { Component } from "react";
import EmployeeRow from "../components/EmployeeRow";
import Container from "../components/Container";
import Jumbotron from "../components/Jumbotron";
import randomUsers from "../randomuser.json";
import EmployeeHeaderRow from "../components/EmployeeHeaderRow";

const escapeRegex = (inputString) => {
  return inputString.replace(/([\.\?\+\*])/g, '\\$1');
}

const numbersFromString = (inputString) => {
  return (inputString.match(/\d/g) || [""]).join("");
};
class Directory extends Component {
  state = {
    employees: randomUsers.results,
    filter: "",
    sort: "",
    order: "asc",
    name: "",
    phone: "",
    email: "",
  };

  sortBy = (sortField) => {
    switch (sortField) {
      case "email":
        this.setState({
          employees: this.state.employees.sort((a, b) => {
            let ret = a.email < b.email ? -1 : a.email === b.email ? 0 : 1;
            if (this.state.sort === "email") {
              return this.state.order === "asc" ? -ret : ret;
            } else {
              return ret;
            }
          }),
          sort: "email",
          order:
            this.state.sort === "email"
              ? this.state.order === "asc"
                ? "desc"
                : "asc"
              : "asc",
        });
        break;
      case "phone":
        this.setState({
          employees: this.state.employees.sort((a, b) => {
            let aPhoneNumber = numbersFromString(a.phone);
            let bPhoneNumber = numbersFromString(b.phone);
            let ret =
              aPhoneNumber < bPhoneNumber
                ? -1
                : aPhoneNumber === bPhoneNumber
                ? 0
                : 1;
            if (this.state.sort === "phone") {
              return this.state.order === "asc" ? -ret : ret;
            } else {
              return ret;
            }
          }),
          sort: "phone",
          order:
            this.state.sort === "phone"
              ? this.state.order === "asc"
                ? "desc"
                : "asc"
              : "asc",
        });
        break;
      default:
        this.setState({
          employees: this.state.employees.sort((a, b) => {
            let aFullName = `${a.name.first.toLowerCase()} ${a.name.last.toLowerCase()}`;
            let bFullName = `${b.name.first.toLowerCase()} ${b.name.last.toLowerCase()}`;
            let ret =
              aFullName < bFullName ? -1 : aFullName === bFullName ? 0 : 1;
            if (this.state.sort === "name") {
              return this.state.order === "asc" ? -ret : ret;
            } else {
              return ret;
            }
          }),
          sort: "name",
          order:
            this.state.sort === "name"
              ? this.state.order === "asc"
                ? "desc"
                : "asc"
              : "asc",
        });
        break;
    }
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      this.setState({
        phone: numbersFromString(value),
      });
    } else {
      // Updating the input's state
      this.setState({
        [name]: value,
      });
    }
  };

  render() {
    return (
      <>
        <Jumbotron />
        <Container>
          <table className="table table-striped table-hover">
            <thead className="thead-dark">
              <EmployeeHeaderRow
                sortByName={() => {
                  this.sortBy("name");
                }}
                sortByEmail={() => {
                  this.sortBy("email");
                }}
                sortByPhone={() => {
                  this.sortBy("phone");
                }}
                handleInputChange={this.handleInputChange}
                name={this.state.name}
                email={this.state.email}
                phone={this.state.phone}
              />
            </thead>
            <tbody>
              {this.state.employees
                .filter((employee) => {
                  return (
                    new RegExp(escapeRegex(this.state.name), "gi").test(
                      `${employee.name.first} ${employee.name.last}`
                    ) &&
                    new RegExp(escapeRegex(this.state.email), "gi").test(employee.email) &&
                    new RegExp(escapeRegex(this.state.phone), "g").test(
                      numbersFromString(employee.phone)
                    )
                  );
                })
                .map((employee) => (
                  <EmployeeRow key={employee.email} employee={employee} />
                ))}
            </tbody>
          </table>
        </Container>
      </>
    );
  }
}

export default Directory;
