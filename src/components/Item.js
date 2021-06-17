import React from 'react'

export default function MostrarItem({id, title, price, pictureUrl}){
    return(
        <div>
            {id}
            {title}
            {price}
            <img src={pictureUrl} />
        </div>
    )
}