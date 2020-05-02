import React, { Component } from "react";
import EmployeeRow from "../components/EmployeeRow";
import Container from "../components/Container";
import Jumbotron from "../components/Jumbotron";
import randomUsers from "../randomuser.json";
import EmployeeHeaderRow from "../components/EmployeeHeaderRow";

class Directory extends Component {
  state = {
    employees: randomUsers.results,
    filter: "",
    sort: "",
    order: "asc"
  };

  sortBy = (sortField) => {
    switch (sortField) {
      case "email":
        console.log("sort by email");
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
          order: this.state.sort === "email" ? (this.state.order === "asc" ? "desc" : "asc") : "asc"
        });
        break;
      default:
        console.log("sort by name");
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
          order: this.state.sort === "name" ? (this.state.order === "asc" ? "desc" : "asc") : "asc"
        });
        break;
    }
  };

  //   handleSortByEmail = ()

  render() {
    return (
      <>
        <Jumbotron />
        <Container>
          <EmployeeHeaderRow
            sortByName={() => {
              this.sortBy("name");
            }}
            sortByEmail={() => {
              this.sortBy("email");
            }}
          />

          {this.state.employees.map((employee) => (
            <EmployeeRow key={employee.email} employee={employee} />
          ))}
        </Container>
      </>
    );
  }
}

export default Directory;
