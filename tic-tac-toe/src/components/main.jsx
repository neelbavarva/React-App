import React, { Component } from 'react';

class Main extends Component {

    state = {
        clicks : 0,
        tie : "",
        game : "",
        put : "put",
        btn1 : 0,
        btn2 : 0,
        btn3 : 0,
        btn4 : 0,
        btn5 : 0,
        btn6 : 0,
        btn7 : 0,
        btn8 : 0,
        btn9 : 0,
        btn1clr : "m-2 btn btn-primary",
        btn2clr : "m-2 btn btn-primary",
        btn3clr : "m-2 btn btn-primary",
        btn4clr : "m-2 btn btn-primary",
        btn5clr : "m-2 btn btn-primary",
        btn6clr : "m-2 btn btn-primary",
        btn7clr : "m-2 btn btn-primary",
        btn8clr : "m-2 btn btn-primary",
        btn9clr : "m-2 btn btn-primary",
        winOf1: 0,
        winOf2: 0,
        
    }

   handlePlay = () => {
       
       this.setState({clicks : 0});
       this.setState({tie : ""});
       this.setState({game : ""});
       this.setState({put : "put"});
       this.setState({btn1 : 0});
       this.setState({btn2 : 0});
       this.setState({btn3 : 0});
       this.setState({btn4 : 0});
       this.setState({btn5 : 0});
       this.setState({btn6 : 0});
       this.setState({btn7 : 0});
       this.setState({btn8 : 0});
       this.setState({btn9 : 0});
       this.setState({btn1clr : "m-2 btn btn-primary"});
       this.setState({btn2clr : "m-2 btn btn-primary"});
       this.setState({btn3clr : "m-2 btn btn-primary"});
       this.setState({btn4clr : "m-2 btn btn-primary"});
       this.setState({btn5clr : "m-2 btn btn-primary"});
       this.setState({btn6clr : "m-2 btn btn-primary"});
       this.setState({btn7clr : "m-2 btn btn-primary"});
       this.setState({btn8clr : "m-2 btn btn-primary"});
       this.setState({btn9clr : "m-2 btn btn-primary"});
       
       this.setState({winOf1 : this.state.winOf1 + 1});
       
       this.setState({winOf2 : this.state.winOf2 + 1});
       
   }

    handelBtn1 = () => {
        
        if(this.state.clicks===9){
            this.setState({tie : <h1>Tie</h1>});
        }
        if (this.state.clicks < 9){
            this.setState({clicks : this.state.clicks + 1});
            console.log("btn1");
        }
        if((parseInt(this.state.clicks))%2===0) {
            this.setState({btn1 : 1});
            this.setState({btn1clr : "m-2 btn btn-warning"});
            console.log("if called");
        }
        else {
            this.setState({btn1 : 2});
            this.setState({btn1clr : "m-2 btn btn-success"});
            console.log("else called");
        }

        console.log(this.state.btn1);
    }

    handelBtn2 = () => {
        if(this.state.clicks===9){
            this.setState({tie : <h1>Tie</h1>});
        }
        if (this.state.clicks < 9){
            this.setState({clicks : this.state.clicks + 1});
            console.log("btn2");
        }
        if((parseInt(this.state.clicks))%2===0) {
            this.setState({btn2 : 1});
            this.setState({btn2clr : "m-2 btn btn-warning"});
        }
        else {
            this.setState({btn2 : 2});
            this.setState({btn2clr : "m-2 btn btn-success"});
        }
        console.log(this.state.btn2);
    }

    handelBtn3 = () => {
        if(this.state.clicks===9){
            this.setState({tie : <h1>Tie</h1>});
        }
        if (this.state.clicks < 9){
            this.setState({clicks : this.state.clicks + 1});
            console.log("btn3");
        }
        if((parseInt(this.state.clicks))%2===0) {
            this.setState({btn3 : 1});
            this.setState({btn3clr : "m-2 btn btn-warning"});
        }
        else {
            this.setState({btn3 : 2});
            this.setState({btn3clr : "m-2 btn btn-success"});
        }
        console.log(this.state.btn3);
    }

    handelBtn4 = () => {
        if(this.state.clicks===9){
            this.setState({tie : <h1>Tie</h1>});
        }
        if (this.state.clicks < 9){
            this.setState({clicks : this.state.clicks + 1});
            console.log("btn4");
        }
        if((parseInt(this.state.clicks))%2===0) {
            this.setState({btn4 : 1});
            this.setState({btn4clr : "m-2 btn btn-warning"});
        }
        else {
            this.setState({btn4 : 2});
            this.setState({btn4clr : "m-2 btn btn-success"});
        }
    }

    handelBtn5 = () => {
        if(this.state.clicks===9){
            this.setState({tie : <h1>Tie</h1>});
        }
        if (this.state.clicks < 9){
            this.setState({clicks : this.state.clicks + 1});
            console.log("btn5");
        }
        if((parseInt(this.state.clicks))%2===0) {
            this.setState({btn5 : 1});
            this.setState({btn5clr : "m-2 btn btn-warning"});
        }
        else {
            this.setState({btn5 : 2});
            this.setState({btn5clr : "m-2 btn btn-success"});
        }
    }

    handelBtn6 = () => {
        if(this.state.clicks===9){
            this.setState({tie : <h1>Tie</h1>});
        }
        if (this.state.clicks < 9){
            this.setState({clicks : this.state.clicks + 1});
            console.log("btn6");
        }
        if((parseInt(this.state.clicks))%2===0) {
            this.setState({btn6 : 1});
            this.setState({btn6clr : "m-2 btn btn-warning"});
        }
        else {
            this.setState({btn6 : 2});
            this.setState({btn6clr : "m-2 btn btn-success"});
        }
    }

    handelBtn7 = () => {
        if(this.state.clicks===9){
            this.setState({tie : <h1>Tie</h1>});
        }
        if (this.state.clicks < 9){
            this.setState({clicks : this.state.clicks + 1});
            console.log("btn7");
        }
        if((parseInt(this.state.clicks))%2===0) {
            this.setState({btn7 : 1});
            this.setState({btn7clr : "m-2 btn btn-warning"});
        }
        else {
            this.setState({btn7 : 2});
            this.setState({btn7clr : "m-2 btn btn-success"});
        }
    }

    handelBtn8 = () => {
        if(this.state.clicks===9){
            this.setState({tie : <h1>Tie</h1>});
        }
        if (this.state.clicks < 9){
            this.setState({clicks : this.state.clicks + 1});
            console.log("btn8");
        }
        if((parseInt(this.state.clicks))%2===0) {
            this.setState({btn8 : 1});
            this.setState({btn8clr : "m-2 btn btn-warning"});
        }
        else {
            this.setState({btn8 : 2});
            this.setState({btn8clr : "m-2 btn btn-success"});
        }
    }

    handelBtn9 = () => {
        if(this.state.clicks===9){
            this.setState({tie : <h1>Tie</h1>});
        }
        if (this.state.clicks < 9){
            this.setState({clicks : this.state.clicks + 1});
            console.log("btn9");
        }
        if((parseInt(this.state.clicks))%2===0) {
            this.setState({btn9 : 1});
            this.setState({btn9clr : "m-2 btn btn-warning"});
        }
        else {
            this.setState({btn9 : 2});
            this.setState({btn9clr : "m-2 btn btn-success"});
        }
    }

    

    render() { 
        let answer = "";
        if(this.state.btn1=== 1 && this.state.btn2=== 1 && this.state.btn3=== 1){
            answer+= "Player 1 won";
            
            // return "Player 1 won";
        }
        else if(this.state.btn1=== 2 && this.state.btn2=== 2 && this.state.btn3=== 2){
            // return "Player 2 won";
            answer+= "Player 2 won";
        } 
        //row1
        else if(this.state.btn4=== 1 && this.state.btn5=== 1 && this.state.btn6=== 1){
            // return "Player 1 won";
            answer+= "Player 1 won";
        }
        else if(this.state.btn4=== 2 && this.state.btn5=== 2 && this.state.btn6=== 2){
            // return "Player 2 won";
            answer+= "Player 2 won";
        }
        //row2
        else if(this.state.btn7=== 1 && this.state.btn8=== 1 && this.state.btn9=== 1){
            // return "Player 1 won";
            answer+= "Player 1 won";
        }
        else if(this.state.btn7=== 2 && this.state.btn8=== 2 && this.state.btn9=== 2){
            // return "Player 2 won";
            answer+= "Player 2 won";
        }
        //row3
        else if(this.state.btn1=== 1 && this.state.btn4=== 1 && this.state.btn7=== 1){
            // return "Player 1 won";
            answer+= "Player 1 won";
        }
        else if(this.state.btn1=== 2 && this.state.btn4=== 2 && this.state.btn7=== 2){
            // return "Player 2 won";
            answer+= "Player 2 won";
        }
        //col1
        else if(this.state.btn2=== 1 && this.state.btn5=== 1 && this.state.btn8=== 1){
            // return "Player 1 won";
            answer+= "Player 1 won";
        }
        else if(this.state.btn2=== 2 && this.state.btn5=== 2 && this.state.btn8=== 2){
            // return "Player 2 won";
            answer+= "Player 2 won";
        }
        //col2
        else if(this.state.btn3=== 1 && this.state.btn6=== 1 && this.state.btn9=== 1){
            // return "Player 1 won";
            answer+= "Player 1 won";
        }
        else if(this.state.btn3=== 2 && this.state.btn6=== 2 && this.state.btn9=== 2){
            // return "Player 2 won";
            answer+= "Player 2 won";
        }
        //col3
        else if(this.state.btn1=== 1 && this.state.btn5=== 1 && this.state.btn9=== 1){
            // return "Player 1 won";
            answer+= "Player 1 won";
        }
        else if(this.state.btn1=== 2 && this.state.btn5=== 2 && this.state.btn9=== 2){
            // return "Player 2 won";
            answer+= "Player 2 won";
        }//cross1
        else if(this.state.btn3=== 1 && this.state.btn5=== 1 && this.state.btn7=== 1){
            // return "Player 1 won";
            answer+= "Player 1 won";
        }
        else if(this.state.btn3=== 2 && this.state.btn5=== 2 && this.state.btn7=== 2){
            // return "Player 2 won";
            answer+= "Player 2 won";
        }//cross2
        else if(this.state.clicks===9 && answer==="") {
            answer+= "Tie hogaya bro";
        }
        
        
        return ( 
            <div>
                
                    {/* <h3>Player 1 {this.state.winOf1}</h3> <h4>Player 2 {this.state.winOf2}</h4>  
                    */}
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button type="button" class="btn btn-info">
                 <span>Number Of Matches Played : </span>
                 <span className="badge badge-light "> { this.state.winOf1}</span>
                </button>
                </nav>
                <div className="App">
                <br/><br/><br/>
                <h4>Press any button to start the game noobs !</h4>
                <br/><br/>
                {/* <h3>{this.state.clicks === 9 ? <span class="badge badge-light">{answer}</span> : 
                <span class="badge badge-light">Come on noobs</span>}</h3> */}
                <h3><span class="badge badge-light">{answer}</span></h3>
                <br/>
                
                <button onClick={() => this.handelBtn1()} 
                    className={this.state.btn1clr}>{this.state.btn1}</button>
                <button onClick={() => this.handelBtn2()} 
                    className={this.state.btn2clr}>{this.state.btn2}</button>
                <button onClick={() => this.handelBtn3()} 
                    className={this.state.btn3clr}>{this.state.btn3}</button>
                <br/>
                
                <button onClick={() => this.handelBtn4()} 
                    className={this.state.btn4clr}>{this.state.btn4}</button>
                <button onClick={() => this.handelBtn5()} 
                    className={this.state.btn5clr}>{this.state.btn5}</button>
                <button onClick={() => this.handelBtn6()} 
                    className={this.state.btn6clr}>{this.state.btn6}</button>
                <br/>

                <button onClick={() => this.handelBtn7()} 
                    className={this.state.btn7clr}>{this.state.btn7}</button>
                <button onClick={() => this.handelBtn8()} 
                    className={this.state.btn8clr}>{this.state.btn8}</button>
                <button onClick={() => this.handelBtn9()} 
                    className={this.state.btn9clr}>{this.state.btn9}</button>
                <br/>
                

                <button onClick={() => this.handlePlay()} className="btn btn-danger m-2">PLAY AGAIN</button>
                <br/><br/><br/>
                </div>
                <span className="badge badge-light offset-4"><h6>Instructions : </h6></span><br/>
                <span className="offset-4"><span class="badge badge-dark">1 </span> Consider 1 as "X" and 2 as "O"</span><br/>
                <span className="offset-4"><span class="badge badge-dark">2 </span> Every game will start from player 1 </span><br/>
                <span className="offset-4"><span class="badge badge-dark">3 </span> Don't reload the game </span><br/>
                <span className="offset-4"><span class="badge badge-dark">4 </span> CSS itna nahi lagaya kyoki boor maar raha tha </span><br/>
                <span className="offset-4"><span class="badge badge-danger">5 </span> Code bohot ganda likha hai please matt dekhna</span>
            </div>
        );
    }
}
 
export default Main;