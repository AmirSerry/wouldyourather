import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Card, CardBody, CardTitle, Col, Form, FormGroup, Input, Label,Row} from 'reactstrap';
import { handleQuestion } from '../actions/sharedAction'
import { Redirect } from 'react-router-dom'

class AddQuestion extends Component {
    state = {
        optionOne: '',
        optionTwo: '',
        redirect: false
    };

    handleOptionOneChange = (event) => {
        event.preventDefault();
        this.setState({
          optionOne : event.target.value
        })
      };

      handleOptionTwoChange = (event) => {
        event.preventDefault();
        this.setState({
          optionTwo : event.target.value
        })
      };

    handleSubmit = (event) => {
        event.preventDefault();
        const { optionOne, optionTwo } = this.state;
        this.props.addQuestion(optionOne, optionTwo);
        this.setState({ redirect: true })
    };

    render() {
        if (this.state.redirect) {
          return <Redirect to='/' />
        }
        const { optionOne, optionTwo } = this.state;
        return (
            <Row>
              <Col sm="12" md={{ size: 8, offset: 2 }}>
                <Card>
                  <CardBody>
                    <CardTitle>Would You Rather</CardTitle>
                    <Form onSubmit={this.handleSubmit}>
                      <FormGroup>
                        <Label for="optionOne">Option One</Label>
                        <Input type="text"
                          name="optionOne"
                          value={optionOne}
                          onChange={this.handleOptionOneChange}
                          placeholder="Option One" />
                      </FormGroup>
                      <FormGroup>
                        <Label for="optionTwo">Option Two</Label>
                        <Input type="text"
                          name="optionTwo"
                          value={optionTwo}
                          onChange={this.handleOptionTwoChange}
                          placeholder="Option Two" />
                      </FormGroup>
                      <Button disabled={optionOne === '' || optionTwo === ''}>Submit</Button>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          );
    }
}



function mapDispatchToProps(dispatch) {
    return {
      addQuestion: (optionOne, optionTwo) => {
        dispatch(handleQuestion(optionOne, optionTwo))
      }
    }
  }


export default connect(null, mapDispatchToProps)(AddQuestion)