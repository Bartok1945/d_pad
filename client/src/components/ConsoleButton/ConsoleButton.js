import React, { useState } from "react";
import "./ConsoleButton.css"

const BUTTONS = [
    {id:"xbox series x", title:'xbox series x',src:"https://user-images.githubusercontent.com/74163812/115413574-4a2ba100-a1c3-11eb-9e31-df0c27c42236.png"},
    {id:"xbox one", title:'xbox on',src:"https://user-images.githubusercontent.com/74163812/115413645-557ecc80-a1c3-11eb-9c9e-37bddeb52b5b.png"},
    {id:"switch", title:'switch',src:"https://user-images.githubusercontent.com/74163812/116321936-10d9cf00-a789-11eb-920f-9253a9ae301e.png"},
    {id:"ps5", title:'ps5',src:"https://user-images.githubusercontent.com/74163812/115413821-819a4d80-a1c3-11eb-9c90-268ea194502b.png"},
    {id:"ps4", title:'ps4',src:"https://user-images.githubusercontent.com/74163812/115413889-8fe86980-a1c3-11eb-8332-1f0174e68514.png"},
    {id:"PC", title:'PC',src:"https://user-images.githubusercontent.com/74163812/115414117-c58d5280-a1c3-11eb-8d21-5ded721aace5.png"},
]

class ConsoleButton extends React.Component {
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
                <div className="container-text">
                    <div className="jumbotron-body">
                        <main>
                            <div className="container">
                                <div className="row align-items-start">
                                    {BUTTONS.map(bt => (
                                        <button key={bt.id} onClick={() => this.handleButton(bt.id)} className={this.state.values.includes(bt.id) ? "buttonPressed" : "button"}>
                                            <img className="images"
                                                src={bt.src}
                                                alt={bt.id}/>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
    );}
} 


export default ConsoleButton;