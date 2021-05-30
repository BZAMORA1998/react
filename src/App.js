import logo from './logo.svg';
import './App.css';
import React,{Component} from 'react';

function Hello(props){
  return <h1>{props.title}</h1>
}

class Text extends Component{
  render(){
    return <p>{this.props.text}</p>
  }
}

function App() {
  return (
    <div className="App">
      <Hello title="Hola Bryan"/>
      <Text text="Programacion react" />
    </div>
  );
}


export default App;
