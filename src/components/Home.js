import React, { Component } from 'react'
import { connect } from "react-redux"
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import Question from './Question';

class Home extends Component {

    state = {
        activeTab: '1'
      };
    
      toggle(tab) {
        if (this.state.activeTab !== tab) {
          this.setState({
            activeTab: tab
          });
        }
      }

    render() {
      const { unansweredQuestions, answeredQuestions } = this.props;
      return (
        <div>
          <Nav tabs>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === '1' })}
                onClick={() => { this.toggle('1'); }}
              >
                Unanswered
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === '2' })}
                onClick={() => { this.toggle('2'); }}
              >
                Answered
              </NavLink>
            </NavItem>
          </Nav>
  
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="1">
              <Row>
                {unansweredQuestions.map(questionId =>
                  <Col key={questionId} sm="6" md="4">
                    <Question id={questionId}/>
                  </Col>
                )}
              </Row>
            </TabPane>
            <TabPane tabId="2">
              <Row>
                {answeredQuestions.map(questionId =>
                  <Col key={questionId} sm="6" md="4">
                    <Question id={questionId}/>
                  </Col>
                )}
              </Row>
            </TabPane>
          </TabContent>
        </div>
      );
    }
}


function mapStateToProps ({ questions, users, userAuth }) {
    const user = users[userAuth];
    const answeredQuestions = Object.keys(user.answers)
      .sort((a,b) => questions[b].timestamp - questions[a].timestamp);
    return {
      unansweredQuestions : Object.keys(questions).filter(questionId => !answeredQuestions.includes(questionId))
        .sort((a,b) => questions[b].timestamp - questions[a].timestamp),
      answeredQuestions
    
    }
  }
  
export default connect(mapStateToProps)(Home)