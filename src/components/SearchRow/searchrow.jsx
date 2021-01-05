import React, { Component } from 'react';
import './searchrow.css';

class searchRow extends Component {
    _questionsController(evento){
        evento.target.className = "row ativo";
        this.props.questionsController();
    };

    render(){
        return(
            <div className="row" onClick={this._questionsController.bind(this)}>
                <div className="question-header">
                    <h1 className="title">{this.props.title} {this.props.index}</h1>
                </div>
            </div>
        );
    };
}

export default searchRow;