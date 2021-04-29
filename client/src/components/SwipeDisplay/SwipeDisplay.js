import React from "react";
import "./SwipeDisplay.css";

function SwipeDisplay() {
    return (
        <div className="jumbotron">
        <div id="carousel-1" className="carousel slide multi-item-carousel" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carousel-1" data-slide-to="0" className="active"></li>
              <li data-target="#carousel-1" data-slide-to="1"></li>
              <li data-target="#carousel-1" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner" role="listbox">
              <div className="item active">
                <div className="item__third">
                  <img src="https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg" alt=""/>
                </div>
              </div>
              <div className="item">
                <div className="item__third">
                  <img src="https://media.rawg.io/media/games/121/1213f8b9b0a26307e672cf51f34882f8.jpg" alt=""/>
                </div>
              </div>
              <div className="item">
                <div className="item__third">
                  <img src="//placehold.it/900x300/69c/9cf/?text=3" alt=""/>
                </div>
              </div>
            </div>
          
            <a href="#carousel-1" className="left carousel-control" role="button" data-slide="prev"><span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span></a>
            <a href="#carousel-1" className="right carousel-control" role="button" data-slide="next"><span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span></a>
          </div>
        </div>
   
    );
}

export default SwipeDisplay;