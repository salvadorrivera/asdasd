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
    const clear = () => {
        setContador(initial)
    }
    const addItem = (value) =>{
        if(contador<stock && contador > initial){
            setContador(contador + addItem)
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
            <button onClick={agregar} >agregar</button>
            <input type="number" max={stock} onAdd={addItem}/>
            <br />
            <span>{contador}</span>
            <br />
            <button onClick={restar}>restar</button>
            <br />
            <button onClick={clear}>reset</button>
            <br />
            <button onClick={()=> onAdd(contador)}>Agregar contenido</button>
        </span>
    )   
}

