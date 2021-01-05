import React, { Component } from 'react';
import './searchlist.css';
import SearchRow from '../../components/SearchRow/searchrow.jsx';
import ModalSearchForm from '../../modals/CreateNewSearch/createsearch.jsx';


class SearcList extends Component{
    constructor(props) {
        super(props);
        var questionsLocal = [];
        if(JSON.parse(localStorage.getItem('search-list')) !== null && JSON.parse(localStorage.getItem('search-list')) !== ''){
            questionsLocal = JSON.parse(localStorage.getItem('search-list'));
        }
        this.state = {
            questions:questionsLocal,
            isModalVisible:false
        }
    }
    
    createSarch(title){
        const newQuestion = {title};
        const newQuestionArray = [...this.state.questions, newQuestion];
        const newState = {
            questions:newQuestionArray
        }
        this.setState(newState);
        localStorage.setItem('search-list', JSON.stringify(newState.questions));
    }

    modalController(){
        if(this.state.isModalVisible){
            this.setState({isModalVisible:false});
        }else{
            this.setState({isModalVisible:true});
        }
    }

    questionsController(){
    }

    render(){
        
        return(
            <section className="main">
                <div className="container-list">
                    {this.state.isModalVisible ? <ModalSearchForm createSarch={this.createSarch.bind(this)} modalController={this.modalController.bind(this)}/> : null}
                    <h1 className="title">Search List</h1>
                    <div className="container-search">
                        {this.state.questions.map((item, key)=>(
                            <SearchRow key={key} index={key} title={item.title} questionsController={this.questionsController}/>
                        ))}
                    </div>
                    <p className="button" onClick={this.modalController.bind(this)}>Create new</p>
                </div>
                <div className="container-list">
                    <h1 className="title">Questions</h1>
                    <div className="container-questions">
                    </div>
                    <p className="button" onClick={this.modalController.bind(this)}>Create new</p>
                </div>
            </section>
        )
    }
}
export default SearcList;