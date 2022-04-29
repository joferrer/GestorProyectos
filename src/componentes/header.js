import React from 'react'
import '../styles/header.css'
import iconTask from "../img/icons/taskicon.svg" 
import iconProyects from "../img/icons/proyectoicon.png" 


export class Header extends React.Component{
    constructor(props){
        super(props);
       
    }
    
    
    render(){
        console.log(this.props)
        const p = this.props.pestana;//Pestaña
        //Funcion cambiar Pesataña
        const cambiarP =()=>{
            this.props.cambiarPestana();
        }
         function cambiarPestaña(nueva){
         
           
           console.log("Hola a"+p)
            let cambiar = ( p=== 0 && nueva!==0) || (p === 1 && nueva!==1);
            console.log("Hola "+cambiar)
            if(cambiar){
                cambiarP();
            }
            
        }

        /**
         * Cambia el color del boton en header según la pesataña seleccionada
         * @param {*} pestana 0--> Proyectos
         *                    1 --> Tareas
         * @returns Color en hexadecimal. 
         */
        let pestanaSelect = (pestana)=>{
            console.log("MMM: "+this.props.pestana)
            
            if( this.props.pestana ===0 && pestana === 'Proyectos'){
                return  '#D9D9D9';
            }
            if( this.props.pestana ===1 && pestana === 'Tareas'){
                return '#D9D9D9';
            }
        }

        return(
            <header>
                <section className='header-container'>
                   <img className='logo-ufps'
                   alt='logo de la ufps'
                   src={require("../img/logoufps.png")} />

                   <div className='header-opciones'>
                   <button 
                        title="Proyectos" 
                        style={{backgroundColor: pestanaSelect('Proyectos')}}
                        className='header-button'
                        onClick={()=>cambiarPestaña(0)} >
                            <img src={iconProyects}
                                alt='task icon' />
                        </button>
                        <button 
                        title="Tareas" 
                        style={{backgroundColor: pestanaSelect('Tareas')}} 
                        className='header-button'
                        onClick={()=>cambiarPestaña(1)} >
                            <img src={iconTask}
                            alt='task icon' />
                        </button>

                        
                   </div>

                   <button className='header-button' value={this.props.nombre}>
                   {this.props.nombre}
                    </button>
                </section>
                
            </header>
        );  
        
    };

}

export default Header;