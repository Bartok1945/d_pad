import React from "react";
import "./GenreButton.css"


const GenreButton = () => {
  return (
    <div>
    <div className="container-text">
        <div className="jumbotron-body">
            <main>
                <div className="container">
                    <div className="row align-items-start">
                    <div className="col">
                            <button>
                            <img class="images"
                                    src="https://user-images.githubusercontent.com/74163812/115316936-5f171e80-a148-11eb-8a8c-1d4ba4045c68.png"
                                    alt="rpg"/>
                            </button>
                        </div>
                        <div className="col">
                            <button>
                            <img class="images"
                                    src="https://user-images.githubusercontent.com/74163812/115320103-2f1f4980-a14f-11eb-8156-5d1ffe992a10.png"
                                    alt="sports"/>
                            </button>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col">
                            <button>
                            <img class="images"
                                src="https://user-images.githubusercontent.com/74163812/116322659-75e1f480-a78a-11eb-8a1a-0623bcca060f.png"
                                alt="adventure"/>
                            </button>
                        </div>
                        <div className="col">
                            <button>
                            <img class="images"
                                src="https://user-images.githubusercontent.com/74163812/115320952-d3ee5680-a150-11eb-922a-eb35c0e56e28.png"
                                alt="shooter"/>
                            </button>
                        </div>
                    </div>
                    <div className="row align-items-end">
                        <div className="col">
                            <button>
                            <img class="images"
                                src="https://user-images.githubusercontent.com/74163812/115321000-e799bd00-a150-11eb-877c-8dc072094a4a.png"
                                alt="action"/>
                            </button>
                        </div>
                        <div className="col">
                            <div className="col">
                                <button>
                                <img class="images"
                                    src="https://user-images.githubusercontent.com/74163812/116322917-ff91c200-a78a-11eb-99a2-4616b03b1b86.png"
                                    alt="strategy"/>
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

export default GenreButton;