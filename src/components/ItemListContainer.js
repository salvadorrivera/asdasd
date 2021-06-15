import React from 'react';
import ItemCount from './ItemCount';

export default function ItemListContainer(props){

    const onAdd = (contador) => {
        alert(`El numero de items que tiene en el carrito es:  ${contador}` )
        }

    return(
    <div>
        <>
            {props.title} muy {props.name}
            <ItemCount initial = {0} stock={5} onAdd={onAdd} />
        </>
    </div>
    )
};



