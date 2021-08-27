import React from 'react'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Contact from './Contact'
import Home from './Home'
import Login from './Login'
import Register from './Register'


function Routes() {
    return (
        <div>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/contact" exact component={Contact} />
                <Route path="/login" exact component={Login} />
                <Route path="/register" exact component={Register} />
            </Switch>
        </div>
    )
}

export default Routes


// for App.js
//  <Header/>
// <Routes/>
