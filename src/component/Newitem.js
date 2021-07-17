import React, { Component } from 'react';
import './homecss.css';
import { NavLink } from "react-router-dom";


var Data = require('./data.json');




class Newitem extends Component {
    render() {
        return (
            <div>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css" />

                <div className="container">
                    <div className="row clearfix">
                        {Data.map((data, key) => {
                            return (

                                <div className="col-lg-3 col-md-4 col-sm-12">
                                    <div className="card product_item">
                                        <div className="body">
                                            <div className="cp_img">
                                                <img src={data.img} alt="Product" className="img-fluid" />
                                                <div className="hover">
                                                    <NavLink to={"/detail/" +data.id  } className="btn btn-primary btn-sm waves-effect"><i className="zmdi zmdi-plus" /></NavLink>
                                                    <NavLink to="/detail" className="btn btn-primary btn-sm waves-effect"><i className="zmdi zmdi-shopping-cart" /></NavLink>
                                                </div>
                                            </div>
                                            <div className="product_details">
                                                <h5><a href="ec-product-detail.html">{data.name}</a></h5>
                                                <ul className="product_price list-unstyled">
                                                    <li className="old_price">${data.price}</li>
                                                    <li className="new_price">${data.sale}</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>




                            );
                        })}
                    </div>

                </div>
            </div>
        );
    }
}

export default Newitem;