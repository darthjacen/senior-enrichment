import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
var name = {};
var campusId = {};

export default class NewStudentForm extends Component {
  constructor() {
    super();
  }

  handleNameChange(event) {
    name = { studentName: event.target.value };
  }

  handleCampusChange(event) {
    campusId = { campusId: event.target.value };
  }

  handleSubmit() {
    axios.post("/api/NewStudentForm", {
      firstName: name.studentName,
      lastName: "random",
      email: "fake@gmail.com",
      gpa: 3.2,
      campusId: campusId.campusId,
      createdAt: Date.now(),
      updatedAt: Date.now()
    });
  }

  render() {
    return (
      <form>
        <input
          placeholder="New Student First Name"
          onChange={this.handleNameChange}
        />
        <input placeholder="Campus" onChange={this.handleCampusChange} />
        <Link to="/">
          <button onClick={this.handleSubmit}> Complete </button>
        </Link>
      </form>
    );
  }
}
