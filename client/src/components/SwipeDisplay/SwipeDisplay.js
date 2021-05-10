import React from "react";
import "./SwipeDisplay.css";

// import {useCountContext} from "../utils/GlobalState";

function SwipeDisplay(props) {
  // const [state, dispatch] = useCountContext();
    return (
        <div class="jumbotron">
        <div id="carousel-1" class="carousel slide multi-item-carousel" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#carousel-1" data-slide-to="0" class="active"></li>
              <li data-target="#carousel-1" data-slide-to="1"></li>
              <li data-target="#carousel-1" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner" role="listbox">
              <div class="item active">
                <div class="item__third">
                  <img src="https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg" alt=""/>
                </div>
              </div>
              <div class="item">
                <div class="item__third">
                  <img src="https://media.rawg.io/media/games/121/1213f8b9b0a26307e672cf51f34882f8.jpg" alt=""/>
                </div>
              </div>
              <div class="item">
                <div class="item__third">
                  <img src="//placehold.it/900x300/69c/9cf/?text=3" alt=""/>
                </div>
              </div>
            </div>
          
            {/* <a href="#carousel-1" class="left carousel-control" role="button" data-slide="prev"><span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span></a>
            <a href="#carousel-1" class="right carousel-control" role="button" data-slide="next"><span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span></a> */}
          </div>
        </div>
   
    );
}

export default SwipeDisplay;