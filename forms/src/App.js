import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Content/>
      </div>
    );
  }
}
class Header extends Component{
    render(){
        return(
            <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h2>Welcome to React</h2>
            </div>
        );
    }
}
class Content extends Component{
    constructor(props){
        super(props);
        this.state={
            myInputValue:"My Input..."
        };
        this.myInputChange = this.myInputChange.bind(this);
    }
    myInputChange(e){
        //console.log(e);
        //console.log(e.target);
        //console.log(e.target.value);
        this.setState({myInputValue:e.target.value});
    }
    render(){
        return(
            <div className="App-intro">
                <h1>Forms in REACT!</h1>
                <InputComponent InputValue={this.state.myInputValue} InputChange={this.myInputChange}/>
                <h4>{this.state.myInputValue}</h4>
                <EssayComponent/>
                <FlavorForm/>
            </div>
        );
    }
}
class InputComponent extends Component{
    render(){
        return(
            <div>
                <input value={this.props.InputValue}  onChange={this.props.InputChange}/>
            </div>
        );
    }
}
class EssayComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            value:"once upon a time"
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e){
        this.setState({
            value:e.target.value
        });
    }
    handleSubmit(e){
        alert(this.state.value);
        e.preventDefault();
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <textarea value={this.state.value}  onChange={this.handleChange}/>
                <h4>{this.state.value}</h4>
                <button type="submit">SUBMIT</button>
            </form>
        );
    }
}
class FlavorForm extends Component{
    constructor(props){
        super(props);
        this.state={
            value:"grapefruit"
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e){
        this.setState({
            value:e.target.value
        });
    }
    handleSubmit(e){
        alert(this.state.value);
        e.preventDefault();
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Pick Your Favourite FlavorForm!
                    <select onChange={this.handleChange}>
                        <option value="grapefruit">Grape Fruit</option>
                        <option value="apple">Apple</option>
                        <option value="choclate">Choclate</option>
                        <option value="banana">Banana</option>
                    </select>
                </label>
                <button type="submit">submit</button>
            </form>
        );
    }
}
export default App;
