import React from 'react';

export default function ItemListContainer(props){
    return(
    <div>
        <h1>
            {props.title} muy {props.name}
        </h1>
    </div>
    )
}