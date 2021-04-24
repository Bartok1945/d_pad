import React from "react";
import "./LoginSignup.css";

function LoginSignup() {
    return (
        // <div className="container mt-3">
            <div className="row">
                <div className="jumbotron2">
                        <div className="col-sm-4">
                            <img src="https://user-images.githubusercontent.com/74163812/115132393-bcd32b80-9fcd-11eb-978b-d63343ea6823.png"
                                className="signupIMG" alt="signupIMG"></img>
                            <form>
                                <div className="form-group">
                                    <label for="inputEmail">Email</label>
                                    <input type="email" className="form-control" id="inputEmail" name="signupEmail"></input>
                                </div>
                                <div className="form-group">
                                    <label for="inputMessage">Password</label>
                                    <input type="text" className="form-control" id="inputMessage" name="signupPassword"></input>
                                </div>
                                <button type="submit" className="btn btn-primary">Press Start</button>
                            </form>
                        </div>
                        <div className="col-sm-2">
                             <img src="https://user-images.githubusercontent.com/74163812/115129566-1c710d00-9fb5-11eb-9c8e-e4529c58bb3e.png"
                            className="track" alt="track"></img>
                        </div>
                       
                        <div className="col-sm-4">
                            <div className="login">
                                <img src="https://user-images.githubusercontent.com/74163812/115132318-1edf6100-9fcd-11eb-8c2b-d907335b7850.png"
                                    className="loginIMG" alt="loginIMG"></img>
                                <form>
                                    <div className="form-group">
                                        <label for="inputEmail">Email</label>
                                        <input type="email" className="form-control" id="inputEmail" name="loginEmail"></input>
                                    </div>
                                    <div className="form-group">
                                        <label for="inputMessage">Password</label>
                                        <input type="text" className="form-control" id="inputMessage" name="loginPassword"></input>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Press Start</button>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            // </div>
   
    );
}

export default LoginSignup;