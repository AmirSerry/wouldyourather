import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'

class User extends Component {
  render() {
    const { user } = this.props;
    return (
      <Fragment>
        <img src={user.avatarURL} className='avatar' width='40' height='40'/>
        <div>{user.name}</div>
      </Fragment>
    );
  }
}


function mapStateToProps ({ users }, { id }) {
  return {
    user : users[id]
  }
}


export default connect(mapStateToProps)(User)