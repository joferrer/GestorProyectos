import React, { Component } from 'react'
import '../styles/login.css'
import iconmail from '../img/icons/mail.png'
import contra from '../img/icons/cerrar-con-llave.png'
import App from '../App';
import Registro from './registro';

export class Login extends Component {
    constructor(props){
        super(props);
        this.logearse = this.logearse.bind(this);
        this.registrarse = this.registrarse.bind(this);
        this.state = {
            registrado:1, // 1 -> Si : 0-> NO
            usuarioId : 0,
            correoU: '',
            contraseña:''
        }
        
    }
    registrarse(){
        if(this.state.registrado ===1){
            this.setState({
                registrado : 0
            })
            
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
    console.log("Usuario login: "+this.state.usuarioId+ " : "+ this.state.correoU + 
    " + " + this.state.contraseña)
    if(this.state.usuarioId !== 0){
        return(<App usuario = {this.state.usuarioId} 
            correo = {this.state.correoU} 
            contraseña={this.state.contraseña}/>);
        
    }//*/
    
    
    if(this.state.registrado ===0 ){
        return <Registro/>
    }
    return (
        
        <section className='form-login'>
            <div className="login">
                <form action="" method="get">
                    <label for="id">
                        <span><img className="icon" src={iconmail} alt=""/></span>
                        <input type="email" name="id" id="id" required />
                    </label>
                    <label for="contraseña">
                        <span><img className="icon" src={contra} alt=""/></span>
                     <input type="password" name="constraseña" id="contraseña" required />
                    </label>
                    <input type="button" value="Ingresar" 
                    onClick={()=>this.logearse()} />
                </form>
        <button onClick={()=>this.registrarse()}>Registrarse</button>
    </div>
        </section>
        
    )
  }
}

export default Login;