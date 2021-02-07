import React, { Component } from 'react'
import { connect } from "react-redux"
import {setUserAuth} from '../actions/userAuth'
import { Form, FormGroup, Label, Input} from 'reactstrap';

class Signin extends Component {
  constructor(props) {
    super(props);
        this.state = {userId : ''};
        this.handleChangeUser = this.handleChangeUser.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleChangeUser(event) {
        this.setState({userId: event.target.value});
      }
      
      handleSubmit(event) {
        const { userId } = this.state;
        const { auth } = this.props;
        if (userId) {
            auth(userId);
        } else {
          alert('Please select User');
        }
        event.preventDefault();
      }   

    render() {
     const { users } = this.props;
     const { userId } = this.state;
     return (  
        <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label for="userSelection">Select User</Label>
          <Input 
              id="userSelection"
              type="select"
              name="select"
              value={userId}
              onChange={this.handleChangeUser}
          >
            <option value="" disabled>Select</option>
            {
              Object.keys(users).map(user =>
              <option key={user} value={user}>
                {users[user].name}
              </option>)
            }
          </Input>
        </FormGroup>
        <input disabled={userId === ''} type="submit" value="Submit" />
      </Form>
     )
      }
      
}

function mapStateToProps ({ users }) {
    return {
      users
    }
}
  
function mapDispatchToProps(dispatch) {
    return {
      auth: (id) => {
        dispatch(setUserAuth(id))
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signin)