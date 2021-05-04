import React from "react";
import "./GameCard.css";
// import Carousel from 'react-bootstrap/Carousel'

function GameCard(props) {
    return (
        <div className= "switch">
        
            <div className="controller">
                <div className="controller-left ">
                    <div className="button-minus"></div>
                    <div  onClick={() => props.removeGame(props.id)} classNameName="remove" id="controller-joystick"><i className="fas fa-thumbs-down"></i></div>
                    <div className="button-top button-top-right"></div>
                    <div className="buttons">
                        <div className="button"></div>
                        <div className="button"></div>
                        <div className="button"></div>
                        <div className="button"></div>
                    </div>
                    <div className="button button-home"></div>
                </div>

                <div className="jumbotron gameInfo">
                    <div className="container-text">
                        <div className="jumbotron-body">
                            <div className="card">
                            <div className="img-container">
                                <img alt={props.name} src={props.image} />
                            </div>
                            <div className="content">
                            <ul>
                                <li>
                                <strong>Name:</strong> {props.name}
                                </li>
                                <li>
                                    <strong>Occupation:</strong> {props.occupation}
                                </li>
                                <li>
                                <strong>Location:</strong> {props.location}
                                </li>
                                </ul>
                            </div>
                            <span onClick={() => props.removeGame(props.id)} classNameName="remove">
                                𝘅
                            </span>
                            </div> 
                            </div>
                        </div>
                    </div>
                <div>
                    <div className="controller-right p-0">
                        <div className="button-plus"></div>
                        <div  onClick={() => props.addGame(props.id)} classNameName="add" id="controller-joystick"><i className="fas fa-thumbs-up"></i></div>
                        <div className="button-top button-top-right"></div>
                            <div className="buttons">
                                <div className="button"></div>
                                <div className="button"></div>
                                <div className="button"></div>
                                <div className="button"></div>
                            </div>
                        <div className="button button-capture"></div>
                    </div>
                </div>
            </div>
        </div>

    );
}
  
export default GameCard;

// function GameCard(props) {
//   return (
    
//     <div classNameName="card">
//       <div classNameName="img-container">
//         <img alt={props.name} src={props.image} />
//       </div>
//       <div classNameName="content">
//         <ul>
//           <li>
//             <strong>Name:</strong> {props.name}
//           </li>
//           <li>
//             <strong>Occupation:</strong> {props.occupation}
//           </li>
//           <li>
//             <strong>Location:</strong> {props.location}
//           </li>
//         </ul>
//       </div>
//       <span onClick={() => props.removeFriend(props.id)} classNameName="remove">
//         𝘅
//       </span>
//     </div>
//   );
// }

// export default GameCard;
