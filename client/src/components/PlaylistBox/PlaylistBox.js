import React from "react";
import "./PlaylistBox.css"

const games = [
    {id:"Hollow Knight",played:false},
    {id:"Borderlands",played:false},
    {id:"Little Big Planet 2",played:false},
    {id:"Crash Bandicoot",played:true},
    {id:"Spyro",played:true},
    {id:"Mario Party 2",played:true},
    {id:"The Lion King",played:true},

]


class PlaylistBox extends React.Component {


    constructor(props){
        super(props);
        this.state = {
            values: []
        }
    }

    render () {
        return (
            <div>
            <div className="container">
            <div class="row">
                
                <div class="jumbotron col-l-12 ">
                    <div class="col-l-4 p-2">
                        <div class="logo">
                            <img class="logo"
                                src="https://user-images.githubusercontent.com/74163812/116794268-b77be380-aa99-11eb-9b5c-c3298c088690.png"
                                alt="highscore"/>
                        </div>
                    </div>

                    <div class="col-l-8">
                        <div class="row">
                            <div class="col-6">
                                <div class="container1">
                                    <h2>Games to beat:</h2>
                                    {games.map((game) => (
                                    <ul>
                                    <li>{game.id}</li>
                                    </ul>
                                    ))};
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="container2">
                                    <h2>Games in the Vault:</h2>
                                    {games.map((game) => (
                                    <ul>
                                    <li>{game.id}</li>
                                    </ul>
                                    ))};
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               
            </div> 
        </div>
      </div>
    );}
} 

export default PlaylistBox;
