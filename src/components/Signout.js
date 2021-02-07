import React, { Component } from 'react'
import { connect } from "react-redux"
import { Redirect } from 'react-router-dom'
import {unsetUserAuth} from '../actions/userAuth'


class Signout extends Component{
    componentWillMount () {
        this.props.dispatch(unsetUserAuth())
      }
      render () {
        return <Redirect to='/' />
      }
}

export default connect()(Signout)