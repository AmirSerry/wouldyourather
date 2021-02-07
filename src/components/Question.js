import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Card, CardBody, CardTitle } from 'reactstrap';
import {  withRouter } from 'react-router-dom';

class Question extends Component{

    constuctor() {
        this.loadDetails = this.routeChange.bind(this);
    }

    loadDetails(e,questionId){
        let path = '/questions/' + questionId;
        this.props.history.push(path);

    }

    render() {
        const {question, userAuth} = this.props;
        return (
          <Card onClick={(e) => this.loadDetails(e, question.id)}>
            <CardBody>
              <CardTitle>Would You Rather</CardTitle>
              <ul>
                  
                <li className={question.optionOne.votes.includes(userAuth) ? "text-primary" : ""}>{question.optionOne.text}</li>
                <li className={question.optionTwo.votes.includes(userAuth) ? "text-primary" : ""}>{question.optionTwo.text}</li>
              </ul>
            </CardBody>
          </Card>
        );
      }
 }

function mapStateToProps (state, { id }) {
    return {
      question : state.questions[id],
      userAuth: state.userAuth
    }
  }

export default withRouter(connect(mapStateToProps)(Question))