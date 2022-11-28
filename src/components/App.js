import React from "react"

// react-router-dom allows you hve have multi page applications
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import { AuthProvider } from "../contexts/AuthContext"

import Chats from "./Chats"
import Login from "./Login"

// this function renders one of the routes 
//(one of the pages, login page or chats page)
function App() {
  return (
    <div style={{ fontFamily: 'Avenir' }}>
      <Router>
        <AuthProvider> 
          <Switch>
            <Route path="/chats" component={Chats} /> 
            <Route path="/" component={Login} /> 
          </Switch>
        </AuthProvider> 
      </Router>
    </div>
  )
}

export default App
