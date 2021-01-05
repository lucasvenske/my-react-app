import React, { Component } from 'react';
import './questionrow.css';

class questionRow extends Component {
    render(){
        return(
            <div className="row">
                <div className="question-header">
                    <h1 className="title">{this.props.title}</h1>
                </div>
                <p className="description">{this.props.description}</p>
                <textarea placeholder="Escreva a resposta aqui!"></textarea>
            </div>
        );
    };
}

export default questionRow;