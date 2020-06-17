import React, {Component} from "react";

class FilterString extends Component{
    constructor(){
        super();
        this.state = {
            unFilteredString: ['James', 'Jessica', 'Melody', 'Tyler', 'Blake', 'Jennifer', 'Mark', 'Maddy'],
            userInput: '',
            filteredArray: []
        }
    }
    handleInput = (event) =>{
        this.setState({
            userInput: event
        })
    }

    filterStrings(prop) {
        let names = this.state.unFilteredString;
        let filteredNames = [];
        for (let i = 0; i < names.length; i++){
            if(names[i].includes(prop)){
                filteredNames.push(names[i])
            }
        }
        this.setState({
            filteredArray: filteredNames
        })
    }

    render() {
        return (
          <div className="puzzleBox filterStringPB">
            <h4> Filter String </h4>
            <span className="puzzleText">Unfiltered: { JSON.stringify(this.state.unFilteredString, null, 10) }</span>
            <input className="inputLine" onChange={(event) => this.handleInput(event)}/>
            <button className="confirmationButton" onClick={() => this.filterStrings(this.state.userInput)}> Filter </button>
            <span className="resultsBox filterStringRB">Filtered: { JSON.stringify(this.state.filteredArray, null, 10) }</span>
          </div>
        )}
}
    

export default FilterString;