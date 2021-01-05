import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './questionregister.css';
import CreateForm from '../../components/CreateQuestionForm/createform.jsx';

class questionregister extends Component{
    render(){
        return(
            <div className="container-register">
                <Link to="/">
                    <p class="button"> ← Back</p>
                </Link>
                <h1 className="title">Questions Register</h1>
                <CreateForm/>
            </div>
        )
    }
}
export default questionregister;