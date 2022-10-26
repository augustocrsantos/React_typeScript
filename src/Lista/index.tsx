import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import Ifornecedor from '../Interface/Iforncedor';
import { Button } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import DownloadDoneIcon from '@mui/icons-material/DownloadDone';
import RestorePageIcon from '@mui/icons-material/RestorePage';
import {
  randomCreatedDate,
  randomTraderName,
  randomUpdatedDate,
} from '@mui/x-data-grid-generator';

let fornec: Ifornecedor
let rows = [{}];
let edit: boolean = false;




type Prop ={
    listfornec: Array<Ifornecedor>,
    OnClickDeletar: (fornec : Ifornecedor) => void,
    OnClickAtualizar : (fornec : Ifornecedor) => void
  }  

export default function TabelaCheckbox({listfornec, OnClickDeletar, OnClickAtualizar}:Prop) {   

  const columnDefs = [
    {
        field: 'nome',
        // enables editing
        
    }
];

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'Codigo', width: 200 },  
  { field: 'nome', headerName: 'Nome', width: 225, editable: true },
  { field: 'endereco', headerName: 'Endereco', width: 225, editable: true },
  { field: 'telefone', headerName: 'Telefone', width: 225, editable: true  }, 
  { field: 'Apagar',width: 70, renderCell : (cellValues) =>{
    return(
        <IconButton aria-label="delete" size="large" 
        onClick={()=>ExcluirRegistro(cellValues.row) } >        
        <DeleteIcon fontSize="inherit" />        
      </IconButton>
    )
  }} ,
  { field: 'Salvar Edição', width: 110, renderCell : (cellValues) =>{
    return(
        <IconButton aria-label="editar" size="large" 
          onClick={()=>EditarRegistro(cellValues.row)}>         
        <DownloadDoneIcon fontSize="inherit" />        
      </IconButton>
    )
  }}, 
  { field: 'Reverter Edição', width: 130, renderCell : (cellValues) =>{
    return(
        <IconButton aria-label="reverter" size="large" 
          onClick={()=> edit = true}>         
        <RestorePageIcon fontSize="inherit" />        
      </IconButton>
    )
  }} 
 
];

  const ExcluirRegistro = (fornec: Ifornecedor) =>{    
    OnClickDeletar(fornec);   
  }
 const EditarRegistro = (fornec: Ifornecedor) =>{
  OnClickAtualizar(fornec)
 }
 const ReverterEdicao = (fornec:Ifornecedor)=>{

 }

    let teste: boolean = true;
    rows = [];
    listfornec.forEach(element => {
        rows.push({id:element.id,  nome: element.nome, endereco: element.endereco, telefone: element.telefone})      
    });
   
  return ( 
    <div style={{ height: 400, width: '90%', marginLeft:'5%'}}>
      <DataGrid
        rows={rows}        
        columns={columns}
        pageSize={4}
        rowsPerPageOptions={[20]}     
        experimentalFeatures={{ newEditingApi: true }}
        onCellClick ={ev=> console.log(ev.row)}
      />


    </div>
  );
}