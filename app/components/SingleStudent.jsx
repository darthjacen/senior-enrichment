import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

var StudentId;
export default class SingleStudent extends Component {
  constructor() {
    super();
    this.state = {
      selectedStudent: {}
    };
  }

  componentDidMount() {
    StudentId = this.props.match.params.StudentId;
    axios
      .get(`/api/Students/${StudentId}`)
      .then(res => res.data)
      .then(student => this.setState({ selectedStudent: student }));
  }

  handleDelete() {
    axios.delete(`/api/Students/${StudentId}`);
  }

  render() {
    return (
      <div>
        <div>
          <h3>
            <div>
              <span>
                {this.state.selectedStudent.firstName}{" "}
                {this.state.selectedStudent.lastName}
              </span>
            </div>
            <div>
              <span>{this.state.selectedStudent.gpa}</span>
            </div>
          </h3>
          <Link to={`/CampusList/${this.state.selectedStudent.campusId}`}>
            <div>
              <h4>Campus : {this.state.selectedStudent.campusId}</h4>
            </div>
          </Link>
          <div>
            <Link to="/">
              <button onClick={this.handleDelete}>
                Delete this Student forever?
              </button>
            </Link>
            <div>
            <Link to={`/Students/${StudentId}/UpdateStudent`}>
            <button> Update Student? </button>
            </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
