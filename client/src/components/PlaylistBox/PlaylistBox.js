import React from "react";
import "./PlaylistBox.css"

const BUTTONS = [
    {id:"xbox series x", title:'xbox series x',src:"https://user-images.githubusercontent.com/74163812/115413574-4a2ba100-a1c3-11eb-9e31-df0c27c42236.png"},
    {id:"xbox one", title:'xbox on',src:"https://user-images.githubusercontent.com/74163812/115413645-557ecc80-a1c3-11eb-9c9e-37bddeb52b5b.png"},
    {id:"switch", title:'switch',src:"https://user-images.githubusercontent.com/74163812/116321936-10d9cf00-a789-11eb-920f-9253a9ae301e.png"},
    {id:"ps5", title:'ps5',src:"https://user-images.githubusercontent.com/74163812/115413821-819a4d80-a1c3-11eb-9c90-268ea194502b.png"},
    {id:"ps4", title:'ps4',src:"https://user-images.githubusercontent.com/74163812/115413889-8fe86980-a1c3-11eb-8332-1f0174e68514.png"},
    {id:"PC", title:'PC',src:"https://user-images.githubusercontent.com/74163812/115414117-c58d5280-a1c3-11eb-8d21-5ded721aace5.png"},
]

class PlaylistBox extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            values: []
        }
    }
    handleButton = button => {
        let tmp = this.state.values;
        if (this.state.values.includes(button)) {
            this.setState({
                values: this.state.values.filter(el => el !== button)
            })
        } else {
            tmp.push(button);
            this.setState({
                values: tmp
            })
        }
    }
    render () {
        return (
            <div>
                <div class="jumbotron">
            <div class="row">
                <div class="col">
                    <div class="logo">
                        <img class="logo"
                            src="https://user-images.githubusercontent.com/74163812/116794268-b77be380-aa99-11eb-9b5c-c3298c088690.png"
                            alt="highscore"/>
                    </div>
                </div>
    
                <div class="col">
                    <div class="row">
                        <div class="col-6">
                            <div class="container1">
                                <h2>Games to beat:</h2>
    
                                <ul>
                                   <li>Hollow Knight</li>
                                   <li>Borderlands</li>
                                   <li>Little Big Planet 2</li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="container2">
                                <h2>Games in the Vault:</h2>
    
                                <ul>
                                    <li>Crash Bandicoot</li>
                                    <li>Spyro</li>
                                    <li>Mario Party 2</li>
                                    <li>The Lion King</li>
                                </ul>
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
