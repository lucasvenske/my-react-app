import React, { Component } from 'react';
import './createquestion.css';

class createsearch extends Component {

    _modalController(){
        this.props.modalController();
    };

    _modalControllerOut(e){
        if(e.target.id === 'overlayer-question'){
            this.props.modalController();
        }
    };

    _changeTitle(evento){
        evento.stopPropagation();
        this.title = evento.target.value;
    }
    _changeDescription(evento){
        evento.stopPropagation();
        this.description = evento.target.value;
    }

    _createQuestion(evento){
        evento.preventDefault();
        evento.stopPropagation();
        this._modalController();
        this.props.createQuestion(this.title, this.description);
    };

    render(){
        return(
            <div className="container-modal-overlayer" id="overlayer-question" onClick={this._modalControllerOut.bind(this)}>
                <div className="container-modal">
                    <h1 className="title">Search form</h1>
                    <div className="container-form">
                        <form className="form-cadastro" onSubmit={this._createQuestion.bind(this)}>
                            <input type="text" placeholder="title" onChange={this._changeTitle.bind(this)}/>
                            <textarea type="text" placeholder="description" onChange={this._changeDescription.bind(this)}/>
                            <button className="button">Save</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    };
}

export default createsearch;