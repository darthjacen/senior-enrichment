import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


var CampusId;
export default class DeleteCampus extends Component{
    constructor(){
        super();
    }

    handleDelete(){
    CampusId = this.props.match.params.CampusId
    axios.delete(`/api/DeleteCampus/${CampusId}`, {
        CampusId
    })
    }

    render(){
        return(
            <div>
            <button onClick={this.handleDelete}>Delete this campus forever?</button>
            </div>
        )
    }
}