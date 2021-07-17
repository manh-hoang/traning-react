import React, { Component } from 'react';
import './homecss.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";
import Newitem from './Newitem';

var Data = require('./data.json');



export const stockData = Data;


function Domeget() {
    return (
        <div >
            {Data.map((data, key) => {
                return (
                    <div key={key}>
                        {data.id +
                            " , " +
                            data.name +
                            " ," +
                            data.img +
                            ", " +
                            data.price}
                    </div>
                );
            })}
        </div>
    )
}

class Home extends Component {
    render() {
        return (
            <div>
                <h1>hello</h1>
                <Newitem></Newitem>
            </div>
        );
    }
}

export default Home;