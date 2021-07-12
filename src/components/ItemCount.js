import React, {useState} from 'react';

export default function ItemCount({initial, stock, onAdd}){

    const [contador, setContador] = useState(initial)
    
     const agregar = () => {
         if(contador < stock){
            setContador(contador +1)
         }
    }
    const restar = () => {
        if(contador > initial){
            setContador(contador -1)
         }
    }
    return(
        <span style={
            {height:'500px',
            width:'500px',
            display:'inline-block',
            verticalAlign:'middle'}}>
            <h1>stock total: {stock}</h1>
            <h1>stock disponible: {stock - contador} </h1>
            {console.log(contador), console.log(stock)}
            <button onClick={agregar} >agregar</button>
            <br />
            <span>{contador}</span>
            <br />
            <button onClick={restar}>restar</button>
            <br />
            <button onClick={()=> onAdd(contador)}>Agregar contenido</button>
        </span>
    )   
}

