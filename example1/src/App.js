import React, { Component } from 'react';
import Textos, { texto0 } from "./Textos";
import Input from './Input';

const Element = ({ title }) => {
  return (
    <h1>{ title }</h1>
  );
};

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-6">
            <button 
              style={{
                width: "40%", 
                height: 80, 
                backgroundColor: "#575757", 
                color: "red", 
                fontSize:12
              }}
            >CLICK</button>
            <Input/>
          </div>
          <div className="col-6">
            <Element title={ texto0 } />
            <Element title={ Textos.texto1 } />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
