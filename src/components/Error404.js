import React, { Component } from 'react'
import { Button, Label} from 'reactstrap';

class Error404 extends Component{

   render(){
       return (
           <div>
        <Label >Page not found</Label>
        <Button size="small" color="primary" onClick={() => this.props.history.push("/")}>
        Go Home
       </Button>
      </div>
       )
   } 
   
}

export default Error404