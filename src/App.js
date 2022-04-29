import React from 'react';
import './App.css';
import Header from './componentes/header';
import Proyectos from './componentes/proyectos';
import Tasks from './componentes/Tasks';

export class App extends React.Component {
  constructor(props){
    super(props);

    this.cambiarPestaña = this.cambiarPestaña.bind(this);

    this.state ={
      //0 --> Proyectos
      //1--> Tareas.
      //3 --> Proyecto
      pestana : 0 ,
      usuario: this.props.usuario,
      nombreU: this.props.correo
    }
  }
  
   cambiarPestaña() {
    let nueva = this.state.pestana === 0 ? 1 : 0;
    this.setState({
      pestana : nueva
    });
    
  }
  render(){
    console.log(this.state.usuario+ " auwu"+this.state.nombreU)
    let prueba = ()=>{
        switch(this.state.pestana){
          case 0: 
              return <Proyectos usrId={this.state.usuario}/>
              
          case 1: 
              return <Tasks/>
        }
    } 
    //prueba += <Proyectos/>
     return (  
       <div >
          <div className='header'><Header nombre = {'J'} pestana ={this.state.pestana} cambiarPestana={this.cambiarPestaña}/></div>
          <div className='main'>{prueba()}</div>
       </div>
          
    );   
  };
}

export default App;
