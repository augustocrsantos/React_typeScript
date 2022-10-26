import React,{useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Ifornecedor from '../Interface/Iforncedor';

type Prop = {
  OnClickSalvar: (fornec : Ifornecedor) => void
}
export default function Formulario({OnClickSalvar}: Prop){
    
    let fornec: Ifornecedor = {};

    const[fornecedor, setFornec] = useState(fornec); 

    const EventoClick = () =>{
      OnClickSalvar(fornecedor);
      setFornec({
        nome:'',
        endereco:'',
        telefone: 0
      });
    }
    return(
        <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >        

        <TextField id="nome" 
        label="Nome"
        variant="outlined" 
        value={fornecedor.nome}
        onChange={ev => setFornec({ ...fornecedor, nome: ev.target.value })}
        /><br></br>

        <TextField id="endereco" 
        label="Endereço" 
        variant="outlined"
        value={fornecedor.endereco}
        onChange={ev => setFornec({ ...fornecedor, endereco: ev.target.value })}
         /><br></br>

        <TextField id="telefone"
         label="Telefone" 
         variant="outlined"
         value={fornecedor.telefone}
         onChange={ev => setFornec({ ...fornecedor, telefone: parseInt(ev.target.value) })}
         /><br></br>
            
     
            <Button variant="contained" 
            onClick={()=> EventoClick()}
            >Salvar</Button>

            <label htmlFor="">   </label>
            <Button variant="outlined">Cancelar</Button>
   
      </Box>
    );
}

 