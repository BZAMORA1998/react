import logo from './logo.svg';
import './App.css';
import React,{Component} from 'react';

function Hello(props){
  return <h1>{props.title}</h1>
}

class Text extends Component{
  render(){
    const{
      text
    }=this.props

    return (<p>{text}</p>)
  }
}

class Contador extends Component{

  constructor(){
    super();
    this.state={contador:1}
    setInterval(()=>{
      this.setState({contador:this.state.contador+1})
    },1000)
  }

  render(){
    return (<p>{this.state.contador}</p>)
  }
}

function App() {
  return (
    <div className="App">
      <Hello title="Hola Bryan"/>
      <Text text="Programacion react" />
      <Contador />
    </div>
  );
}


export default App;
