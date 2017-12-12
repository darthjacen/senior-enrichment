import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
var name = {};
var descr = {};

export default class NewStudentForm extends Component {
  constructor() {
    super();
  }

  handleNameChange(event) {
    name = { campusName: event.target.value };
  }

  handleDescrChange(event) {
    descr = { description: event.target.value };
  }

  handleSubmit() {
    axios.post("/api/NewCampusForm", {
      name: name.campusName,
      description: descr.description,
      imgUrl: "http://s2.thingpic.com/images/T1/gnjX9zqNBEF1WSHBem5iWmPu.jpeg",
      createdAt: Date.now(),
      updatedAt: Date.now()
    });
  }

  render() {
    return (
      <form>
        <input placeholder="New Campus Name" onChange={this.handleNameChange} />
        <input
          placeholder="Campus Description"
          onChange={this.handleDescrChange}
        />
        <Link to="/">
          <button onClick={this.handleSubmit}> Complete </button>
        </Link>
      </form>
    );
  }
}
