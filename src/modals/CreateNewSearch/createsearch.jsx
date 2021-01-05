import React, { Component } from 'react';
import './createsearch.css';

class createsearch extends Component {

    _modalController(){
        this.props.modalController();
    };

    _modalControllerOut(e){
        if(e.target.id === 'overlayer'){
            this.props.modalController();
        }
    };

    _changeTitle(evento){
        evento.stopPropagation();
        this.title = evento.target.value;
    }

    _createSarch(evento){
        evento.preventDefault();
        evento.stopPropagation();
        this._modalController();
        this.props.createSarch(this.title);
    };

    render(){
        return(
            <div className="container-modal-overlayer" id="overlayer" onClick={this._modalControllerOut.bind(this)}>
                <div className="container-modal">
                    <h1 className="title">Search form</h1>
                    <div className="container-form">
                        <form className="form-cadastro" onSubmit={this._createSarch.bind(this)}>
                            <input type="text" placeholder="title" onChange={this._changeTitle.bind(this)}/>
                            <button className="button">Save</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    };
}

export default createsearch;