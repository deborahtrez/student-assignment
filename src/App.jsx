import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter, Route} from 'react-router-dom'
import Nav from './Nav'
import Assignments from './Assignments'
import CreatedAssignment from './CreatedAssignment'
import RegisterStudent from './RegisterStudent'

class App extends Component {
    render() { 
        return ( 
            <BrowserRouter>
                <Nav>
                    <div className="container">
                        <Route path= '/signup' component={RegisterStudent} />
                        <Route path= '/create' component={CreatedAssignment} />
                        <Route path= '/' exact component={Assignments} />
                    </div>
                </Nav>
            </BrowserRouter>
         );
    }
}
 
export default App;