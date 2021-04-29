import React from "react";
import "./ConsoleButton.css"


const ConsoleButton = () => {
  return (
        <div>
        <div className="container-text">
            <div className="jumbotron-body">
                <main>
                    <div className="container">
                        <div className="row align-items-start">
                        <div className="col">
                                <button>
                                    <img className="images"
                                        src="https://user-images.githubusercontent.com/74163812/115413574-4a2ba100-a1c3-11eb-9e31-df0c27c42236.png"
                                        alt="xbox series x"/>
                                </button>
                            </div>
                            <div className="col">
                                <button>
                                <img className="images"
                                    src="https://user-images.githubusercontent.com/74163812/115413645-557ecc80-a1c3-11eb-9c9e-37bddeb52b5b.png"
                                    alt="xbox one"/>
                                </button>
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col">
                                <button>
                                    <img className="images" src="https://user-images.githubusercontent.com/74163812/116321936-10d9cf00-a789-11eb-920f-9253a9ae301e.png"
                                    alt="switch"/>
                                </button>
                            </div>
                            <div className="col">
                                <button>
                                <img className="images"
                                    src="https://user-images.githubusercontent.com/74163812/115413821-819a4d80-a1c3-11eb-9c90-268ea194502b.png"
                                    alt="ps5"/>
                                </button>
                            </div>
                        </div>
                        <div className="row align-items-end">
                            <div className="col">
                                <button>
                                <img className="images"
                                    src="https://user-images.githubusercontent.com/74163812/115413889-8fe86980-a1c3-11eb-8332-1f0174e68514.png"
                                    alt="ps4"/>
                                </button>
                            </div>
                            <div className="col">
                                <div className="col">
                                    <button>
                                    <img className="images"
                                        src="https://user-images.githubusercontent.com/74163812/115414117-c58d5280-a1c3-11eb-8d21-5ded721aace5.png"
                                        alt="PC"/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    </div>
  )
};

export default ConsoleButton;