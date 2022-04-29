import React, { Component } from 'react'

export  class Liproyecto extends Component {
    constructor(props){
        super(props);
    }
  render() {
    return (
      <div>{this.props.nombre}</div>
    )
  }
}
export default Liproyecto
