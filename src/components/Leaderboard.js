
import React, { Component, Fragment } from 'react'
import { connect } from "react-redux"
import { Table } from 'reactstrap';

class Leaderboard extends Component{

    render(){
        const { users } = this.props;
       
        return (
          <Fragment>
            <Table>
              <thead>
                <tr>
                  <th>Rank</th>
                  <th>Profile</th>
                  <th>User</th>
                  <th>Questions Asked</th>
                  <th>Questions Answered</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={user.id}>
                    <td>{index + 1}</td>
                    <td><img src={user.avatarURL} className='avatar' width='40' height='40'/></td>
                    <td>{user.name}</td>
                    <td>{user.questions.length}</td>
                    <td>{Object.keys(user.answers).length}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Fragment>
        )
    }
}

const mapStateToProps = ({ users }) => {
    const userScore = user =>
      Object.keys(user.answers).length + user.questions.length;
    return {
      users: Object.values(users).sort((a, b) => userScore(b) - userScore(a))
    }
  };
  
  export default connect(mapStateToProps)(Leaderboard)