import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import DeleteCampus from "./DeleteCampus";

var CampusId;
export default class SingleCampus extends Component {
  constructor() {
    super();
    this.state = {
      students: []
    };
  }

  componentDidMount() {
    CampusId = this.props.match.params.CampusId;
    axios
      .get(`/api/CampusList/${CampusId}`)
      .then(res => res.data)
      .then(students => this.setState({ students }));
  }

  handleDelete() {
    axios.delete(`/api/CampusList/${CampusId}`);
  }

  render() {
    return (
      <div>
        <h1>Campus : {CampusId} </h1>
        <div>
          <h3>
            <span>
              {this.state.students.map(student => {
                return (
                  <div key={student.id}>
                    <Link to={`/Students/${student.id}`}>
                      {student.firstName}
                    </Link>
                  </div>
                );
              })}
            </span>
          </h3>
        </div>
        <div>
          <Link to="/">
            <button onClick={this.handleDelete}>
              Delete this campus forever?
            </button>
          </Link>
          <div>
            <Link to={`/CampusList/${CampusId}/UpdateCampus`}>
            <button> Update Campus? </button>
            </Link>
            </div>
        </div>
      </div>
    );
  }
}
