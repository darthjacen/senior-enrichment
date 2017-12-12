import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
var name = {};
var descr = {};
var CampusId;

export default class UpdateCampus extends Component {
    constructor() {
      super();
    }
  
    handleNameChange(event) {
      name = { name: event.target.value };
    }
  
    handleCampusChange(event) {
      descr = { description: event.target.value };
    }

    componentDidMount() {
        CampusId = this.props.match.params.CampusId;
        axios
          .get(`/api/CampusList/${CampusId}`)
    }
  
    handleSubmit() {
      axios.put(`/api/CampusList/${CampusId}/UpdateCampus`, {
        name: name.name,
        description: descr.description,
        updatedAt: Date.now()
      });
    }
  
    render() {
      return (
        <form>
          <input
            placeholder="Update Campus Name"
            onChange={this.handleNameChange}
          />
          <input placeholder="Update Campus Description" onChange={this.handleCampusChange} />
          <Link to="/">
            <button onClick={this.handleSubmit}> Complete </button>
          </Link>
        </form>
      );
    }
  }