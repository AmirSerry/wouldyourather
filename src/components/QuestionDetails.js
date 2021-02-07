import React, { Component } from 'react';
import { Card, CardHeader,CardBody, CardTitle, FormGroup, Label, Input, Form, Button, Row, Col, Progress} from 'reactstrap';
import { connect } from 'react-redux';
import User from './User';
import { handleAnswer } from '../actions/sharedAction';
import { Redirect } from 'react-router-dom'

class QuestionDetails extends Component {
  state = {
    selectedOption: '',
    redirect: false
  };

  radioSelected = (event) => {
    this.setState({
      selectedOption: event.target.value
    });
   
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.userAnswer(this.state.selectedOption);
    this.setState({ redirect: true })
  };

  render() {
    if (this.state.redirect) {
        return <Redirect to='/' />
      }
    const { question, author, answer, totalVotes, valueOne, valuetwo} = this.props;
    const { selectedOption } = this.state;
    return (
      <Row>
        <Col sm="8" md={{ size: 8, offset: 2 }}>
          <Card>
            <CardHeader>
              <User id={author.id}/>
            </CardHeader>
            <CardBody>
              <CardTitle>Would You Rather</CardTitle>
              {answer ?
                <div>
                  <FormGroup>
                    <FormGroup check disabled>
                      <Label check>
                        <Input type="radio" checked={answer==="optionOne"} readOnly/>{' '}
                        {question.optionOne.text}
                      </Label>
                    </FormGroup>
                    <FormGroup check disabled>
                      <Label check>
                        <Input type="radio" checked={answer==="optionTwo"} readOnly/>{' '}
                        {question.optionTwo.text}
                      </Label>
                    </FormGroup>
                  </FormGroup>
                  <div>
                  <div className="text-center">{valueOne}%</div>
                  <Progress value={valueOne}/>
                  <div className="text-center">{valuetwo}%</div>
                  <Progress value={valuetwo}/>
                  </div>
                  <div className="total">
                    votes: {totalVotes}
                  </div>
                </div>:
                <Form onSubmit={this.handleSubmit}>
                  <FormGroup tag="fieldset">
                    <FormGroup >
                      <Label >
                        <Input type="radio" name="radio1" value="optionOne" onChange={this.radioSelected} />{' '}
                        {question.optionOne.text}
                      </Label>
                    </FormGroup>
                    <FormGroup >
                      <Label >
                        <Input type="radio" name="radio1" value="optionTwo" onChange={this.radioSelected} />{' '}
                        {question.optionTwo.text}
                      </Label>
                    </FormGroup>
                  </FormGroup>
                  <Button disabled={selectedOption === ''}>Submit</Button>
                </Form>
              }
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}



function cal(value) {
  return Number.parseFloat(value).toFixed(1);
}

function mapStateToProps ({ questions, users, userAuth }, { match }) {
  const answers = users[userAuth].answers;
  let answer, valueOne, valuetwo, totalVotes;
  const { id } = match.params;
  const question = questions[id];
  if (answers.hasOwnProperty(question.id)) {
    answer = answers[question.id]
  }
 
  const author = users[question.author];
  totalVotes = question.optionOne.votes.length + question.optionTwo.votes.length;
  valueOne = cal((question.optionOne.votes.length / totalVotes) * 100);
  valuetwo = cal((question.optionTwo.votes.length / totalVotes) * 100);
    return {
      question,
      author,
      answer,
      totalVotes,
      valueOne,
      valuetwo
  }
}

function mapDispatchToProps(dispatch, props) {
  const { id } = props.match.params;

  return {
    userAnswer: (answer) => {
      dispatch(handleAnswer(id, answer))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionDetails)