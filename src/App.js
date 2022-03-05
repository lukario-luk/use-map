import React, { Component } from "react";

class App extends Component{
  state={
    cadastro:[
      {
        CompleteName:"Lucas de Souza Pinto",
        email: "lucasdesouzapinto2000@gmail.com",
        tell: "24 999883540",
      },
      {
        CompleteName:"Maria Santos do Carmo",
        email: "mariasantosc@gmail.com",
        tell: "44 998624772",
      },
      {
        CompleteName:"Pedro Wilhan Matos Costa",
        email: "Pedrostone15@gmail.com",
        tell: "47 999172539",
      },
      {
        CompleteName:"Paulo Gustavo de Andrade",
        email: "Paulogustavoandrade@gmail.com",
        tell: "41 999528815",
      },
      {
        CompleteName:"Jusé Santos Milhãn",
        email: "jsm1111@gmail.com",
        tell: "11 999132161",
      },
      {
        CompleteName:"Paulo do Rodo da Grassa",
        email: "Paulo_rg267@hotmail.com",
        tell: "15 999812502",
      },
    ]
  }

  render(){
    return(
      <div>
        <h1>Ficha de inscrição vai na web</h1>
        <ul>
          {this.state.cadastro.map((item)=>(
            <li><h2>{item.CompleteName}</h2>
            <h3>{item.email}</h3>
            <h3>{item.tell}</h3></li>
          ))}
        </ul>
      </div>
    )
  }



}

export default App;