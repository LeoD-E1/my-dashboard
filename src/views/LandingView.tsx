import React from 'react'
import { Route, Switch} from 'wouter'
// Importing Components
import HomePage from './Visitor/HomePage'


const LandingView = () => {
  return (
   
  <Switch>
    <Route path="/" component={HomePage} />
    <Route path="/other" />
  </Switch>
    
   
   
  )
}

export default LandingView