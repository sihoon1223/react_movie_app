import React, {Component} from 'react';
import {HashRouter, Route} from "react-router-dom";
import About from "./routes/About"
import Home from "./routes/Home"
import Navigation from "./components/Navigation"

function App() {
    return (
        <HashRouter>
            {/*link는 무조건 router 안에*/}
            <Navigation/>
            <Route path="/" exact={true} component={Home}/>
            <Route path="/about" component={About}/>
        </HashRouter>

    );
}

export default App;