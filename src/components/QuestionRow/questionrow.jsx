import React, { Component } from 'react';
import './questionrow.css';

class questionRow extends Component {
    openRow(){
        console.log('id');
    };
    render(){
        return(
            <div className="row" onClick={this.openRow}>
                <div className="question-header">
                    <h1 className="title">{this.props.title}</h1>
                    <span className="date">{this.props.date}</span>
                </div>
                <p className="description">{this.props.description}</p>
                <textarea placeholder="Escreva a resposta aqui!"></textarea>
            </div>
        );
    };
}

export default questionRow;