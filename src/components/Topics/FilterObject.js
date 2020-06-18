import React, {Component} from "react";

class FilterObject extends Component {
    constructor(){
        super();
        this.state ={
            unFilteredArray: [ //stolen from details, I hope thats fine
                {
                  name: 'Jimmy Joe',
                  title: 'Hack0r',
                  age: 12,
                },
                {
                  name: 'Jeremy Schrader',
                  age: 24,
                  hairColor: 'brown'
                },
                {
                  name: 'Carly Armstrong',
                  title: 'CEO',
                }
              ],
            userInput: "",
            filteredArray: []
        }
    }

    filterObjects = (prop) =>{
        let array = this.state.unFilteredArray;
        let filteredArray = [];
        for(let i = 0; i < array.length; i++){
            if(array[i].hasOwnProperty(prop)){
                filteredArray.push(array[i]);
              
            }
        }
      
        this.setState({
            filteredArray: filteredArray
    })
  
    }


    render() {
        return (
          <div className="puzzleBox filterObjectPB">
            <h4> Filter Object </h4>
            <span className="puzzleText">Original: { JSON.stringify(this.state.unFilteredArray, null, 10) }</span>
            <input className="inputLine" onChange={(event) => this.setState({userInput: event.target.value})}/>
            <button className="confirmationButton" onClick={ () => { this.filterObjects(this.state.userInput)}}> Filter </button>
            <span className="resultsBox filterObjectRB">Filtered: { JSON.stringify(this.state.filteredArray, null, 10) }</span>
          </div>
        )
      }
}
export default FilterObject;