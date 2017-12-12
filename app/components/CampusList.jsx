import React, { Component } from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';
import NewCampusForm from './NewCampusForm';

export default class CampusList extends Component {
  constructor() {
    super();
    this.state = {
      campuses: []
    }
  }
  componentDidMount(){
    axios.get('/api/CampusList')
    .then((res) => res.data)
    .then(campuses => this.setState({campuses}))
  }


  render() {
    return (
      <div>
        <h1 className='title' > Campuses </h1>
        <Link to="/NewCampusForm" >
        <div>
          <button>Create New Campuse
            </button>
            </div>
            </Link>
        {
            <div>
          {this.state.campuses.map(campus => {
            return (
              <div key={campus.id}>
              <Link to={`/CampusList/${campus.id}`}>
                  <img height='100px' width='100px' src={campus.imageUrl} />
                  <div>
                    <h3>
                      <span>{campus.name}</span>
                    </h3>
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
