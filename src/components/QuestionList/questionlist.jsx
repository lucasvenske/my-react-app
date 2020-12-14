import React, { Component } from 'react';
import './questionlist.css';
import QuestionRow from '../QuestionRow/questionrow.jsx';

export default class QuestionList extends Component{
    constructor(props) {
        super(props);
        this.questions = [
            { 
                "title": "Map function in reactJS", 
                "description": "Write with your words for what we use map function.",
                "date": "2-7-2017"
            }, 
            { 
                "title": "How create array variable in ReactJS?", 
                "description": "Write small text of how create a array in reactJS and print this array with map.",
                "date": "2-7-2017" 
            }, 
            { 
                "title": "How create array variable in ReactJS?", 
                "description": "Write small text of how create a array in reactJS and print this array with map.",
                "date": "2-7-2017" 
            } 
        ];
    }
    openRow(){
        console.log('s');
    }
    render(){
        return(
            <div className="container-list">
                <h1 className="title">Questions List</h1>
                {this.questions.map((item, key)=>(
                    <QuestionRow key={key} title={item.title} description={item.description} date={item.date}/>
                ))}
            </div>
        )
    }
}