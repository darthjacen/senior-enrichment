import React, { Component } from "react";
import Navbar from "./Navbar";
import CampusList from "./CampusList";
import axios from "axios";
import SingleCampus from "./SingleCampus";
import AllStudents from "./AllStudents";
import SingleStudent from "./SingleStudent";
import NewStudentForm from "./NewStudentForm";
import NewCampusForm from "./NewCampusForm";
import UpdateStudent from './UpdateStudent';
import UpdateCampus from './UpdateCampus';
import { HashRouter as Router, Route } from "react-router-dom";

export default class Home extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Router>
        <div>
          <div>
            <Navbar />
          </div>

          <div>
            <Route exact path="/" component={CampusList} />
            <Route exact path="/CampusList" component={CampusList} />
            <Route
              exact
              path="/CampusList/:CampusId"
              component={SingleCampus}
            />
            <Route exact path="/Students" component={AllStudents} />
            <Route
              exact
              path="/Students/:StudentId"
              component={SingleStudent}
            />
            <Route exact path="/NewStudentForm" component={NewStudentForm} />
            <Route exact path="/NewCampusForm" component={NewCampusForm} />
            <Route exact path="/Students/:StudentId/UpdateStudent" component={UpdateStudent} />
            <Route exact path="/CampusList/:CampusId/UpdateCampus" component={UpdateCampus} />
          </div>
        </div>
      </Router>
    );
  }
}
