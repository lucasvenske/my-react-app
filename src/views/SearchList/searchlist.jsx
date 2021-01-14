import React, { Component } from 'react';
import './searchlist.css';
import SearchRow from '../../components/SearchRow/searchrow.jsx';
import ModalSearchForm from '../../modals/CreateNewSearch/createsearch.jsx';
import ModalQuestionForm from '../../modals/CreateNewQuestion/createquestion.jsx';
import QuestionRow from '../../components/QuestionRow/questionrow.jsx';

class SearcList extends Component{
    constructor(props) {
        super(props);
        var searchIndex = 0;
        var questionsLocal = [];
        var exist = false;
        if(JSON.parse(localStorage.getItem('search-list')) !== null && JSON.parse(localStorage.getItem('search-list')) !== ''){
            questionsLocal = JSON.parse(localStorage.getItem('search-list'));
            exist = true;
        }
        this.state = {
            searchSelected:searchIndex,
            questions:questionsLocal,
            isModalQuestionVisible:false,
            isModalVisible:false,
            arrayQuestionsExist:exist
        }
    }
    
    createSarch(title){
        const newSearch = {
                title: title,
                questions: []
            };
        const newSearchArray = [...this.state.questions, newSearch];
        const newState = {
            questions:newSearchArray
        }
        this.setState(newState);
        this.setState({arrayQuestionsExist:true});
        localStorage.setItem('search-list', JSON.stringify(newState.questions));
    }

    createQuestion(title, description){
        const newQuestion = {
                title: title,
                description: description
            };
        this.state.questions[this.state.searchSelected].questions.push(newQuestion);
        const newQuestionArray = this.state.questions;
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
    modalQuestionController(){
        if(this.state.isModalQuestionVisible){
            this.setState({isModalQuestionVisible:false});
        }else{
            this.setState({isModalQuestionVisible:true});
        }
    }

    questionsController(index){
        this.setState({searchSelected:index});
    }

    render(){
        
        return(
            <section className="main">
                <div className="container-list">
                    {this.state.isModalVisible ? <ModalSearchForm createSarch={this.createSarch.bind(this)} modalController={this.modalController.bind(this)}/> : null}
                    <h1 className="title">Search List</h1>
                    <div className="container-search">
                        {this.state.questions.map((item, key)=>(
                            <SearchRow key={key} index={key} title={item.title} questionsController={this.questionsController.bind(this)}/>
                        ))}
                    </div>
                    <p className="button" onClick={this.modalController.bind(this)}>Create new</p>
                </div>
                <div className="container-list" id="container-questions">
                    {this.state.isModalQuestionVisible ? <ModalQuestionForm createQuestion={this.createQuestion.bind(this)} modalController={this.modalQuestionController.bind(this)}/> : null}
                    <h1 className="title">Questions</h1>
                    <div className="container-questions">
                        {this.state.arrayQuestionsExist
                            ?
                            this.state.questions[this.state.searchSelected].questions.map((item, key)=>( 
                                <QuestionRow key={key} index={key} title={item.title} description={item.description}/> 
                            )) 
                            : 
                            ''
                        }
                    </div>
                    <p className="button" onClick={this.modalQuestionController.bind(this)}>Create new</p>
                </div>
            </section>
        )
    }
}
export default SearcList;