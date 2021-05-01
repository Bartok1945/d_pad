import React from "react";
import "./ConsoleButton.css";
import API from "../../utils/API";


const BUTTONS = [
  {
    id: "XboxSeries",
    title: "xbox series x",
    name: "XboxSeries",
    src:
      "https://user-images.githubusercontent.com/74163812/115413574-4a2ba100-a1c3-11eb-9e31-df0c27c42236.png",
  },
  {
    id: "XboxOne",
    title: "xbox on",
    name: "XboxOne",
    src:
      "https://user-images.githubusercontent.com/74163812/115413645-557ecc80-a1c3-11eb-9c9e-37bddeb52b5b.png",
  },
  {
    id: "Switch",
    title: "switch",
    name: "Switch",
    src:
      "https://user-images.githubusercontent.com/74163812/116321936-10d9cf00-a789-11eb-920f-9253a9ae301e.png",
  },
  {
    id: "PS5",
    title: "ps5",
    Name: "PS5",
    src:
      "https://user-images.githubusercontent.com/74163812/115413821-819a4d80-a1c3-11eb-9c90-268ea194502b.png",
  },
  {
    id: "PS4",
    title: "ps4",
    name: "PS4",
    src:
      "https://user-images.githubusercontent.com/74163812/115413889-8fe86980-a1c3-11eb-8332-1f0174e68514.png",
  },
  {
    id: "PC",
    title: "PC",
    name: "PC",
    src:
      "https://user-images.githubusercontent.com/74163812/115414117-c58d5280-a1c3-11eb-8d21-5ded721aace5.png",
  },
];

class ConsoleButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      values: [],
      consoles: {
      PS5: false,
      PS4: false,
      Switch: false,
      XboxOne: false,
      XboxSeries: false,
      PC: false,
      }
  }
}

  str2bool = (value) => {
    if (value && typeof value === "string") {
      if (value.toLowerCase() === "true") return true;
      if (value.toLowerCase() === "false") return false;
    }
    return value;
  };

  handleSelected = (event, button) => {
    event.preventDefault();
    let tmp = this.state.values;
    if (tmp.includes(button)) {
      this.setState({ ...this.state,
        values: this.state.values.filter((el) => el !== button),
        consoles: {
          ...this.state.consoles,
          [button]: !this.state.consoles[button],
        }
      });
    } else {
      tmp.push(button);
      this.setState({ ...this.state,
        values: tmp,
        consoles: {
          ...this.state.consoles,
          [button]: !this.state.consoles[button],
        }
      });
    }
  };

  savePlatforms = (consoles) => {
    API.userPlatform(consoles)
      .then(console.log("Consoles have been added!"))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <div className="container-text">
          <div className="jumbotron-body">
            <main>
              <div className="container">
                <div className="row align-items-start">
                  {BUTTONS.map((bt) => (
                    <button
                      key={bt.id}
                      onClick={(event) => this.handleSelected(event, bt.id)}
                      className={
                        this.state.values.includes(bt.id)
                          ? "buttonPressed"
                          : "button"
                      }
                    >
                      <img className="images" src={bt.src} alt={bt.id} />
                    </button>
                  ))}
                </div>
              </div>
              <button onClick={() => this.savePlatforms(this.state.consoles)}>Press Start</button>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default ConsoleButton;
