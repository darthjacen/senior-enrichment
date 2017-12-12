import React, { Component } from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class AllStudents extends Component {
    constructor() {
      super();
      this.state = {
        students: []
      }
    }
    componentDidMount(){
      axios.get('/api/Students')
      .then((res) => res.data)
      .then(students=> this.setState({students}))
    }
  
  
    render() {
      return (
        <div>
          <h1 className='title' > Students </h1>
          {
              <div>
            {this.state.students.map(student => {
              return (
                <div key={student.id}>
                <Link to={`/Students/${student.id}`}>
                    <div>
                      <h3>
                        <span>{student.firstName} {student.lastName}</span>
                        </h3>
                        <h4>
                        <span>{student.gpa}</span>
                        </h4>
                    </div>
                    </Link>
                    <Link to={`/CampusList/${student.campusId}`}>
                    <div>
                        <h4>Campus : {student.campusId}</h4>
                        </div>
                        </Link>
                </div>
                
              );
            })}
          </div>}
        </div>
      );
    }
  }