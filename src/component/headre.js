import React, { Component } from 'react';

class Header extends Component {
constructor(props){
super(props);
}
    render() {
        return (
        
          <div>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="#">
        <img src="https://cdn.pixabay.com/photo/2018/03/28/04/02/logo-3268177_1280.png" alt="logo" style={{width: '45px'}} />
      </a>            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navb">
       <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navb">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <a className="nav-link" href="javascript:void(0)">Page1</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="javascript:void(0)">Page2</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="javascript:void(0)">Page3</a>
                </li>
              </ul>
              <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                <button className="btn btn-secondary my-2 my-sm-0" type="button">Search</button>
              </form>
            </div>
          </nav>
        </div>
        
        
          );
    }
}

export default Header;