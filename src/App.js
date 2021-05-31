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

  constructor(props){
    super(props);
    this.state={contador:this.props.contadorInicial}
    setInterval(()=>{
      this.setState({contador:this.state.contador+1})
    },1000)
  }

  render(){
    return (<p>{this.state.contador}</p>)
  }
}

Contador.defaultProps={
  contadorInicial:0
}

function Ap() {
  return (
    <div className="App">
      <Hello title="Hola Bryan"/>
      <Text text="Programacion react" />
      <Contador />
    </div>
  );
}

class App extends Component{
  constructor(){
    super();
    this.state={
      inputName:"Hola mundo"
    };
  }

  Click=(e)=>{
    e.preventDefault();
   // const texto=document.getElementById('texto').value;
   const texto=this.inputName.value;
    console.log(texto);
  }

  render(){
    const numbers=[1,2,3,4,5];
    return (
      <div> Lista de numeros 
          {numbers.map((number,index)=>{
            return <p key={index}>Soy el numero {number}</p>
          })}
          <Ap />
          <form>
            <input 
            type="text" 
            id='texto' 
            placeholder="Hola mundo" 
            ref={inputElement=>this.inputName=inputElement}
            value={this.state.inputName}
            onChange={e=>this.setState({inputName:e.target.value})}
            />
            <button onClick={this.Click}>Click me</button>
          </form>
        </div>
      )
  }
}


export default App;
