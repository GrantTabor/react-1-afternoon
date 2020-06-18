import React, {Component} from "react";

class Sum extends Component {
    constructor(){
        super();
        this.state = {
            num1: 0,
            num2: 0,
            sum: null
        }
    }

    handleInput1(event){
        this.setState({num1: parseInt(event) })
    }
    handleInput2(event){
        this.setState({num2: parseInt(event) })
    }
    add(num1, num2){
        let sum = num1 + num2;
        this.setState({sum: sum})
    }


    render() {
        return (
          <div className="puzzleBox sumPB">
            <h4> Sum </h4>
            <input className="inputLine" type="number" onChange={(event) => this.handleInput1(event.target.value)}/>
            <input className="inputLine" type="number" onChange={(event) => this.handleInput2(event.target.value)}/>
            <button className="confirmationButton" onClick={() => this.add(this.state.num1, this.state.num2)}> Add </button>
        <span className="resultsBox">Sum: {this.state.sum}</span>
          </div>
        )
      }
}
export default Sum;