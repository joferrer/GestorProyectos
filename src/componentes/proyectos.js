import React, { Component } from 'react'
import Liproyecto from './liproyecto';

export  class Proyectos extends Component {
  constructor(props){
    super(props);
    this.state={
      id_usuario: this.props.usrId,
      proyectos: []
    }
  }
  
  render() {
    const usrId = this.props.usrId;
    let url = "http://localhost:3200/api/user/"+usrId;
    let urlP = 'http://localhost:3200/api/proyecto/';
    let v = 0;
    let datos = ()=>fetch(urlP)
          .then(response =>response.json())
          .then(response=>{
            
            v++;
              console.log("d"+v);
              document.getElementById('lista-proyectos').innerHTML+=" "+response[0].nombre +" "+ response[0].descripcion;
            

          })
    const proyectos = async()=>{
      
      
      fetch(url,{mode:'cors'})
          .then(response => response.json())
          .then(response=>{
              let iter = 0;
              
              while(iter <response.length){
                 v++;
                  console.log("p"+v);
                  document.getElementById('lista-proyectos').innerHTML=response[iter].idProyecto;
                  urlP+= response[iter].idProyecto;
                  datos();
                  iter++;
              }
              
                              
            });   
      
    }
    proyectos();

    return (
        <div>
            <h1>Hola Jeison</h1>
            <h2>Estos son tus proyectos</h2>
            <div id='lista-proyectos'></div>
            <ul>
                <li>
                    <Liproyecto nombre = {'proyecto 1 Xd'}/>
                </li>
            </ul>
        </div>
      
    )
  }
}
export default  Proyectos;