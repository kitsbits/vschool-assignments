import React from "react";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            Counter: 0,
            Color: "red"
        };

        this.addClick = this.addClick.bind(this);
        this.subtractClick = this.subtractClick.bind(this);
        this.changeColor = this.changeColor.bind(this);
    }

    addClick() {
        this.setState(prevState => {
            return {
                Counter: prevState.Counter + 1
            }
        })
    }
    subtractClick() {
        this.setState(prevState => {
            return {
                Counter: prevState.Counter - 1
            }
        })
    }

    changeColor() {
        let color = document.getElementById('input-color').value;
        this.setState(prevState => {
            return {
                Color: color
            }
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.Counter}</h1>
                <button type="button" onClick={this.addClick}>+</button>
                <button type="button" onClick={this.subtractClick}>-</button>
            <div id="box" className="box" style={{backgroundColor: `${this.state.Color}`}}>
                    <input id="input-color" type="text" name="" placeholder="give me a color" onChange={this.changeColor} style={{color: `${this.state.Color}`, outlineColor: `${this.state.Color}`}}/>
                </div>
            </div>
        )
    }
}

export default App;
