import React from 'react';
import Ifornecedor from '../Interface/Iforncedor';

let fornecedor: Ifornecedor ={
    nome: "",
    telefone:0,
    endereco:""

}
let listaFornec:Array<Ifornecedor> = []

export default function Salvar(fornec: Ifornecedor):Ifornecedor{
    listaFornec.push(fornec)
console.log(listaFornec)
return fornecedor

}