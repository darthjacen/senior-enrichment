import React, { Component } from "react";
import {Link} from 'react-router-dom';

export default class Navbar extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <div>
          <Link to="/CampusList">
          <button >Home</button>
          </Link>
          <Link to="/Students">
          <button >Students</button>
          </Link>
        </div>
      </div>
    );
  }
}
