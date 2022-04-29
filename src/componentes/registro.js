import React, { Component } from 'react'
import '../styles/login.css'
import iconmail from '../img/icons/mail.png'
import contra from '../img/icons/cerrar-con-llave.png'
import usuarioicon from '../img/icons/usuario.png'
import App from '../App';

export class Registro extends Component {
    constructor(props){
        super(props);
        this.logearse = this.logearse.bind(this);
        this.state = {
            usuarioId : 0,
            correoU: '',
            contraseña:''
        }
        
    }
    
    logearse(){
        let cred = document.getElementsByTagName('input');
        this.setState({
            usuarioId: 1152004, //Se pide por peticion
            correoU: cred[0].value,
            constraseña: cred[1].value
        })
        console.log(this.state.usuarioId + " : "+ this.state.correoU + 
        " + " + this.state.contraseña);
        
    }
  render() {
    
    //  /*
    console.log("Usuario: "+this.state.usuarioId+ " : "+ this.state.correoU + 
    " + " + this.state.contraseña)
    if(this.state.usuarioId !== 0){
        return(<App usuario = {this.state.usuarioId} 
            correo = {this.state.correoU} 
            contraseña={this.state.contraseña}/>);
        
    }//*/
    
    return (
        
        <section className='form-login'>
            <div className="login">
                <form action="" method="get">
                <label for="nombre">
                        <span><img className="icon" src={usuarioicon} alt=""/></span>
                        <input type="name" name="nombre" id="nombre" required />
                    </label>
                    <label for="email">
                        <span><img className="icon" src={iconmail} alt=""/></span>
                        <input type="email" name="email" id="email" required />
                    </label>
                    <label for="contraseña">
                        <span><img className="icon" src={contra} alt=""/></span>
                     <input type="password" name="constraseña" id="contraseña" required />
                    </label>
                    <input type="button" value="Registrar" 
                    onClick={()=>this.logearse()} />
                </form>
        
    </div>
        </section>
        
    )
  }
}

export default Registro;