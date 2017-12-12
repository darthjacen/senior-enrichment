import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class SingleCampus extends Component {
    constructor(){
        super();
        this.state = {
            students: [],
        }
    }

    componentDidMount(){
        const CampusId = this.props.match.params.CampusId
        axios.get(`/api/CampusList/${CampusId}`)
        .then((res) => res.data)
        .then(students => this.setState({students}))
      }

    render(){
        return(
            <div>
                  <h1>Campus : {this.state.students.campusId} </h1>
                  <div>
                    <h3>
                    <Link to={`/Students/${this.state.students.id}`}>
                      <span>{this.state.students.firstName}</span>
                      </Link>
                    </h3>
                  </div>
              </div>
        )
    }
}