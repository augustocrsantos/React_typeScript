import React, { useState } from 'react';
import Formulario from './Formulario';

import './App.css';
import TabelaCheckbox from './Lista';
import Ifornecedor from './Interface/Iforncedor';


function App() {
  
  const[listfornecedor, setlistFornec] = useState<Ifornecedor[]>([])
  let index: number = 0;
  
  const OnClickSalvar = (fornec: Ifornecedor) =>{
    index =listfornecedor.length+1
    let list = [...listfornecedor];
    list.push({
      id:index,
      nome: fornec.nome,
      endereco: fornec.endereco,
      telefone:fornec.telefone
    });
    setlistFornec(list);

  }

  const OnClickDeletar = (fornec: Ifornecedor) =>{    
    let novaLista:Array<Ifornecedor>  = []
    let listaAntiga: Array<Ifornecedor> = []
    listaAntiga =  [...listfornecedor];   
    listaAntiga.forEach(element => {
      if(element.id != fornec.id){
         novaLista.push(element)
      }
     });
     console.log(novaLista)
     setlistFornec(novaLista);
  }
  const OnClickAtualizar = (fornec: Ifornecedor) =>{
    let index:number =0;
    let novaLista:Array<Ifornecedor>  = []
    let listaAntiga: Array<Ifornecedor> = []
    listaAntiga =  [...listfornecedor];   
    listaAntiga.forEach(element => {
      if(element.id == fornec.id){
         element.endereco = fornec.endereco
         element.nome = fornec.nome
         element.endereco = fornec.endereco 
      }      
      index = index+1;
      console.log(index)
     });
     console.log(novaLista)
     setlistFornec(listaAntiga);
  }
  
  return (
    <div className="App">
     <h1>Cadastro de Fornecedor</h1>     
      <Formulario OnClickSalvar={OnClickSalvar}></Formulario>      
      <TabelaCheckbox listfornec={listfornecedor} OnClickDeletar={OnClickDeletar} OnClickAtualizar={OnClickAtualizar}></TabelaCheckbox>
     { /*<TabelaForncedor  listfornec={listfornecedor}></TabelaForncedor>*/}
      
     
    </div>
  );
}

export default App;