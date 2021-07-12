import React from 'react'
import { Link } from 'react-router-dom'

export default function MostrarItem({id, title, price, pictureUrl, category}){
    return(
        <div>
        
            {id}
            {title}
            <img alt="" src={pictureUrl} />
            {price}
            <Link to={`/item/${id}`}>detalle del producto</Link>
        </div>
    )
}