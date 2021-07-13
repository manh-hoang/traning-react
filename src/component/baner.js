import React, { Component } from 'react';


class Baner extends Component {
    render() {
        return (
            <div className="containerfull">
            <div id="demo" className="carousel" data-ride="carousel">
              
              {/* The slideshow */}
              <div style={{height: '500px'}} className="carousel-inner">
                <div className="carousel-item active">
                  <img src="https://img.freepik.com/free-vector/abstract-website-banner-with-modern-shapes_1361-1738.jpg?size=626&ext=jpg" alt="Los Angeles" width={1700}  />
                </div>
                
              </div>
              
            </div>
          </div>
        );
    }
}

export default Baner;

