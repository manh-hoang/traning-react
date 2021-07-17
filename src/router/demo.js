import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Blog from '../component/blog';
import Detail from '../component/detail';
import Home from '../component/home';

class DemoRouter extends Component {
    render() {
        return (
            <div>
            <Route path="/home" component={Home} />
            <Route path="/blog" component={Blog} />
            <Route path="/detail/:id" component={Detail} />
            </div>
        );
    }
}

export default DemoRouter;