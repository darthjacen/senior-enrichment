import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
var name = {};
var campusId = {};
var StudentId;

export default class UpdateStudent extends Component {
    constructor() {
      super();
    }
  
    handleNameChange(event) {
      name = { studentName: event.target.value };
    }
  
    handleCampusChange(event) {
      campusId = { campusId: event.target.value };
    }

    componentDidMount() {
        StudentId = this.props.match.params.StudentId;
        axios
          .get(`/api/Students/${StudentId}`)
    }
  
    handleSubmit() {
      axios.put(`/api/Students/${StudentId}/UpdateStudent`, {
        firstName: name.studentName,
        lastName: "random",
        email: "fake@gmail.com",
        gpa: 3.2,
        campusId: campusId.campusId,
        updatedAt: Date.now()
      });
    }
  
    render() {
      return (
        <form>
          <input
            placeholder="Update Student First Name"
            onChange={this.handleNameChange}
          />
          <input placeholder="Update Campus" onChange={this.handleCampusChange} />
          <Link to="/">
            <button onClick={this.handleSubmit}> Complete </button>
          </Link>
        </form>
      );
    }
  }