import React, { Component } from 'react';
import './homecss.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";

class Home extends Component {
    render() {
        return (
            <div>
                
               
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css" />
        <div className="container">
          <div className="row clearfix">
            <div className="col-lg-3 col-md-4 col-sm-12">
              <div className="card product_item">
                <div className="body">
                  <div className="cp_img">
                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="Product" className="img-fluid" />
                    <div className="hover">
                      <a href="javascript:void(0);" className="btn btn-primary btn-sm waves-effect"><i className="zmdi zmdi-plus" /></a>
                      <a href="javascript:void(0);" className="btn btn-primary btn-sm waves-effect"><i className="zmdi zmdi-shopping-cart" /></a>
                    </div>
                  </div>
                  <div className="product_details">
                    <h5><a href="ec-product-detail.html">Simple Black Clock</a></h5>
                    <ul className="product_price list-unstyled">
                      <li className="old_price">$16.00</li>
                      <li className="new_price">$13.00</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12">
              <div className="card product_item">
                <div className="body">
                  <div className="cp_img">
                    <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="Product" className="img-fluid" />
                    <div className="hover">
                      <a href="javascript:void(0);" className="btn btn-primary btn-sm waves-effect"><i className="zmdi zmdi-plus" /></a>
                      <a href="javascript:void(0);" className="btn btn-primary btn-sm waves-effect"><i className="zmdi zmdi-shopping-cart" /></a>
                    </div>
                  </div>
                  <div className="product_details">
                    <h5><a href="ec-product-detail.html">Simple Black Clock</a></h5>
                    <ul className="product_price list-unstyled">
                      <li className="old_price">$12.00</li>
                      <li className="new_price">$11.00</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12">
              <div className="card product_item">
                <div className="body">
                  <div className="cp_img">
                    <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="Product" className="img-fluid" />
                    <div className="hover">
                      <a href="javascript:void(0);" className="btn btn-primary btn-sm waves-effect"><i className="zmdi zmdi-plus" /></a>
                      <a href="javascript:void(0);" className="btn btn-primary btn-sm waves-effect"><i className="zmdi zmdi-shopping-cart" /></a>
                    </div>
                  </div>
                  <div className="product_details">
                    <h5><a href="ec-product-detail.html">Brone Candle</a></h5>
                    <ul className="product_price list-unstyled">
                      <li className="old_price">$23.00</li>
                      <li className="new_price">$17.00</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12">
              <div className="card product_item">
                <div className="body">
                  <div className="cp_img">
                    <img src="https://bootdey.com/img/Content/avatar/avatar4.png" alt="Product" className="img-fluid" />
                    <div className="hover">
                      <a href="javascript:void(0);" className="btn btn-primary btn-sm waves-effect"><i className="zmdi zmdi-plus" /></a>
                      <a href="javascript:void(0);" className="btn btn-primary btn-sm waves-effect"><i className="zmdi zmdi-shopping-cart" /></a>
                    </div>
                  </div>
                  <div className="product_details">
                    <h5><a href="ec-product-detail.html">Simple Black Clock</a></h5>
                    <ul className="product_price list-unstyled">
                      <li className="old_price">$16.00</li>
                      <li className="new_price">$10.00</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12">
              <div className="card product_item">
                <div className="body">
                  <div className="cp_img">
                    <img src="https://bootdey.com/img/Content/avatar/avatar5.png" alt="Product" className="img-fluid" />
                    <div className="hover">
                      <a href="javascript:void(0);" className="btn btn-primary btn-sm waves-effect"><i className="zmdi zmdi-plus" /></a>
                      <a href="javascript:void(0);" className="btn btn-primary btn-sm waves-effect"><i className="zmdi zmdi-shopping-cart" /></a>
                    </div>
                  </div>
                  <div className="product_details">
                    <h5><a href="ec-product-detail.html">Brone Lamp Glasses</a></h5>
                    <ul className="product_price list-unstyled">
                      <li className="old_price">$18.00</li>
                      <li className="new_price">$15.00</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12">
              <div className="card product_item">
                <div className="body">
                  <div className="cp_img">
                    <img src="https://bootdey.com/img/Content/avatar/avatar5.png" alt="Product" className="img-fluid" />
                    <div className="hover">
                      <a href="javascript:void(0);" className="btn btn-primary btn-sm waves-effect"><i className="zmdi zmdi-plus" /></a>
                      <a href="javascript:void(0);" className="btn btn-primary btn-sm waves-effect"><i className="zmdi zmdi-shopping-cart" /></a>
                    </div>
                  </div>
                  <div className="product_details">
                    <h5><a href="ec-product-detail.html">Unero Small Bag</a></h5>
                    <ul className="product_price list-unstyled">
                      <li className="old_price">$21.00</li>
                      <li className="new_price">$17.00</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12">
              <div className="card product_item">
                <div className="body">
                  <div className="cp_img">
                    <img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="Product" className="img-fluid" />
                    <div className="hover">
                      <a href="javascript:void(0);" className="btn btn-primary btn-sm waves-effect"><i className="zmdi zmdi-plus" /></a>
                      <a href="javascript:void(0);" className="btn btn-primary btn-sm waves-effect"><i className="zmdi zmdi-shopping-cart" /></a>
                    </div>
                  </div>
                  <div className="product_details">
                    <h5><a href="ec-product-detail.html">Unero Round lass</a></h5>
                    <ul className="product_price list-unstyled">
                      <li className="old_price">$16.00</li>
                      <li className="new_price">$10.00</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12">
              <div className="card product_item">
                <div className="body">
                  <div className="cp_img">
                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Product" className="img-fluid" />
                    <div className="hover">
                      <a href="javascript:void(0);" className="btn btn-primary btn-sm waves-effect"><i className="zmdi zmdi-plus" /></a>
                      <a href="javascript:void(0);" className="btn btn-primary btn-sm waves-effect"><i className="zmdi zmdi-shopping-cart" /></a>
                    </div>
                  </div>
                  <div className="product_details">
                    <h5><a href="ec-product-detail.html">Wood Simple Clock</a></h5>
                    <ul className="product_price list-unstyled">
                      <li className="old_price">$16.00</li>
                      <li className="new_price">$10.00</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12">
              <div className="card product_item">
                <div className="body">
                  <div className="cp_img">
                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="Product" className="img-fluid" />
                    <div className="hover">
                      <a href="javascript:void(0);" className="btn btn-primary btn-sm waves-effect"><i className="zmdi zmdi-plus" /></a>
                      <a href="javascript:void(0);" className="btn btn-primary btn-sm waves-effect"><i className="zmdi zmdi-shopping-cart" /></a>
                    </div>
                  </div>
                  <div className="product_details">
                    <h5><a href="ec-product-detail.html">Wood Long TV</a></h5>
                    <ul className="product_price list-unstyled">
                      <li className="old_price">$16.00</li>
                      <li className="new_price">$10.00</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12">
              <div className="card product_item">
                <div className="body">
                  <div className="cp_img">
                    <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="Product" className="img-fluid" />
                    <div className="hover">
                      <a href="javascript:void(0);" className="btn btn-primary btn-sm waves-effect"><i className="zmdi zmdi-plus" /></a>
                      <a href="javascript:void(0);" className="btn btn-primary btn-sm waves-effect"><i className="zmdi zmdi-shopping-cart" /></a>
                    </div>
                  </div>
                  <div className="product_details">
                    <h5><a href="ec-product-detail.html">Simple Black Clock</a></h5>
                    <ul className="product_price list-unstyled">
                      <li className="old_price">$16.00</li>
                      <li className="new_price">$10.00</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12">
              <div className="card product_item">
                <div className="body">
                  <div className="cp_img">
                    <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="Product" className="img-fluid" />
                    <div className="hover">
                      <a href="javascript:void(0);" className="btn btn-primary btn-sm waves-effect"><i className="zmdi zmdi-plus" /></a>
                      <a href="javascript:void(0);" className="btn btn-primary btn-sm waves-effect"><i className="zmdi zmdi-shopping-cart" /></a>
                    </div>
                  </div>
                  <div className="product_details">
                    <h5><a href="ec-product-detail.html">Wood Simple Chair</a></h5>
                    <ul className="product_price list-unstyled">
                      <li className="old_price">$16.00</li>
                      <li className="new_price">$10.00</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12">
              <div className="card product_item">
                <div className="body">
                  <div className="cp_img">
                    <img src="https://bootdey.com/img/Content/avatar/avatar4.png" alt="Product" className="img-fluid" />
                    <div className="hover">
                      <a href="javascript:void(0);" className="btn btn-primary btn-sm waves-effect"><i className="zmdi zmdi-plus" /></a>
                      <a href="javascript:void(0);" className="btn btn-primary btn-sm waves-effect"><i className="zmdi zmdi-shopping-cart" /></a>
                    </div>
                  </div>
                  <div className="product_details">
                    <h5><a href="ec-product-detail.html">Simple Black</a></h5>
                    <ul className="product_price list-unstyled">
                      <li className="old_price">$16.00</li>
                      <li className="new_price">$10.00</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
                
            </div>
        );
    }
}

export default Home;