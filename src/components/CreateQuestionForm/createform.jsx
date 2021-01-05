import React, { Component } from 'react';
import './createform.css';

class createform extends Component {

    constructor(props){
        super(props);
        this.title = "";
    }

    _changeTitle(evento){
        evento.stopPropagation();
        this.title = evento.target.value;
    }

    _createSarch(evento){
        evento.preventDefault();
        evento.stopPropagation();
        this.props.createSarch(this.title);
    };

    render(){
        return(
            <div className="container-form">
                <form className="form-cadastro" onSubmit={this._createSarch.bind(this)}>
                    <input type="text" placeholder="title" onChange={this._changeTitle.bind(this)}/>
                    <button>Register</button>
                </form>
            </div>
        );
    };
}

export default createform;