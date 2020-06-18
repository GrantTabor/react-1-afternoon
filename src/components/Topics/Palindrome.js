import React, {Component} from "react";

class Palindrome extends Component{
    constructor(){
        super();
        this.state = {
            userInput: "",
            palindrome: ""
        }
    }

    handleInput(event){
        this.setState({
            userInput: event
        })
    }
    palindromer(input){
        let arr = input.split('');
        let revArr = arr.reverse();
        let palindrome = revArr.join("");

        if (input === palindrome){
            this.setState({palindrome: "true"})
        }
        else{
            this.setState({palindrome: "false"})
        }
     
    }

    render() {
        return (
          <div className="puzzleBox palindromePB">
            <h4> Palindrome </h4>
            <input className="inputLine" onChange={(event) => this.handleInput(event.target.value)}/>
            <button className="confirmationButton" onClick={() => this.palindromer(this.state.userInput)}> Check </button>
        <span className="resultsBox">Palindrome: {this.state.palindrome}</span>
          </div>
        )
      }
}
export default Palindrome;