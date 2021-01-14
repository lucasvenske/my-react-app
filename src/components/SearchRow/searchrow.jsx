import React, { Component } from 'react';
import './searchrow.css';

class searchRow extends Component {
    _questionsController(index){
        var rows = document.getElementsByClassName('row');
        for(var i =0; i < rows.length; i++){
            if(rows[i].id === 'row-' + index){
                if(rows[i].classList.contains('ativo')){
                    rows[i].classList.remove('ativo');
                    document.getElementById('container-questions').style.display = "none"
                }else{
                    rows[i].classList.add('ativo');
                    document.getElementById('container-questions').style.display = "block"
                    this.props.questionsController(index);
                }
            }else{
                rows[i].classList.remove('ativo');
            }
        }
    };

    render(){
        return(
            <div className="row" id={'row-'+this.props.index} onClick={() => this._questionsController(this.props.index)}>
                <div className="question-header">
                    <h1 className="title">{this.props.title}</h1>
                </div>
            </div>
        );
    };
}

export default searchRow;