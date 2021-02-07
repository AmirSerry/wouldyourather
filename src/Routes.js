import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import Signin from './components/Signin'
import Home from './components/Home'
import Leaderboard from './components/Leaderboard'
import AddQuestion from './components/AddQuestion'
import QuestionDetails from './components/QuestionDetails'
import Signout from './components/Signout'
import Error404 from './components/Error404'

function Routes(props){
  console.log(props)
    return <div> 
    <Switch>
      {
        
        props.notSignIn ? <Route component={Signin}/> :
          <Fragment>
            <Route path='/' exact component={Home} />
            <Route path='/leaderboard' exact component={Leaderboard} />
            <Route path="/questions/:id" component={QuestionDetails} />
            <Route path='/add' component={AddQuestion}/>
            <Route exact path='/signout' component={Signout} />
            <Route exact path='/notfound'component={Error404} />
          </Fragment>
      }
      <Route component={Error404} />
    </Switch>

    </div>
}


export default Routes;