import React, { Component } from 'react';

class Main extends Component {
  
       state={
           input: "",
           previousNumber: "",
           currentNumber: "",
           operator: ""
       }
       
       addToInput = val => {
            this.setState({input: this.state.input + val});
           
       }

       handleAdd = val => {
            this.state.previousNumber= this.state.input;
            this.state.operator = "plus";
            this.setState({input: ""});
       }

       handleSub = val => {
        this.state.previousNumber= this.state.input;
        this.state.operator = "minus";
        this.setState({input: ""});
       }

       handleAdd = val => {
        this.state.previousNumber= this.state.input;
        this.state.operator = "plus";
        this.setState({input: ""});
       }

       handleDiv = val => {
        this.state.previousNumber= this.state.input;
        this.state.operator = "div";
        this.setState({input: ""});
       }

       handleMul = val => {
        this.state.previousNumber= this.state.input;
        this.state.operator = "mul";
        this.setState({input: ""});
       }

       handleDecimal = val => {
           return null;
       }

       clearInput = val => {
        this.setState({input: "" });
       }
       
       showAns = () => {
           this.state.currentNumber = this.state.input;
           if(this.state.operator == "plus") {
               this.setState({
                   input: parseInt(this.state.previousNumber)
                        + parseInt(this.state.currentNumber)
               });
           }
           if(this.state.operator == "minus") {
            this.setState({
                input: parseInt(this.state.previousNumber)
                     - parseInt(this.state.currentNumber)
            });
            }
            if(this.state.operator == "mul") {
                this.setState({
                    input: parseInt(this.state.previousNumber)
                         * parseInt(this.state.currentNumber)
                });
            }
            if(this.state.operator == "div") {
                this.setState({
                    input: parseInt(this.state.previousNumber)
                         / parseInt(this.state.currentNumber)
                });
            }
                
           else 
            return null;
       }
  
    render() { 
        return (
            <div className="App"><br/><br/>
                <div className="row">
                <h4 className="offset-5"><span class="badge badge-light offset-5">{this.state.input}</span></h4>
                </div><br/>
                <div className="col">
                <button onClick={() => this.addToInput(7)} className="btn btn-primary m-2">7</button>
                <button onClick={() => this.addToInput(8)} className="btn btn-primary m-2">8</button>
                <button onClick={() => this.addToInput(9)} className="btn btn-primary m-2">9</button>
                <button onClick={() => this.handleDiv()}className="btn btn-warning m-2">/</button><br/>
                <button onClick={() => this.addToInput(4)}className="btn btn-primary m-2">4</button>
                <button onClick={() => this.addToInput(5)}className="btn btn-primary m-2">5</button>
                <button onClick={() => this.addToInput(6)}className="btn btn-primary m-2">6</button>
                <button onClick={() => this.handleMul()}className="btn btn-warning m-2">*</button><br/>
                <button onClick={() => this.addToInput(1)}className="btn btn-primary m-2">1</button>
                <button onClick={() => this.addToInput(2)}className="btn btn-primary m-2">2</button>
                <button onClick={() => this.addToInput(3)}className="btn btn-primary m-2">3</button>
                <button onClick={() => this.handleAdd()} className="btn btn-warning m-2">+</button><br/>
                <button onClick={() => this.handleDecimal()}className="btn btn-primary m-2">.</button>
                <button onClick={() => this.addToInput(0)}className="btn btn-primary m-2">0</button>
                <button onClick={() => this.showAns()}className="btn btn-success m-2">=</button>
                <button onClick={() => this.handleSub()}className="btn btn-warning m-2">-</button><br/>
                <button onClick={() => this.clearInput()}className="btn btn-danger m-2">C L E A R</button>
                </div>

                <br/><br/><h2>Handling decimal, handling zero, BDMAS</h2>
                
            </div>
        );
    }
}
 
export default Main;