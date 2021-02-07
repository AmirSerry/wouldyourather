import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom';
import { handleData }  from './actions/sharedAction'
import Routes from './Routes'
import Navigation from './components/Navigation';

class App extends Component {
  componentDidMount(){
    this.props.handleData()
  }
  render() {
    const { notSignIn } = this.props;

    return (
      <Router>
        <Fragment>
          <div>
            <Navigation/>
            <Routes notSignIn={notSignIn}/>
          </div>
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps ({ userAuth }) {
  return {
    notSignIn: userAuth === null
  }
}

function mapDispatchToProps(dispatch) {
  return {
    handleData: () => {
      dispatch(handleData())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)