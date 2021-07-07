import React from 'react'

export default function MostrarItem({id, title, price, pictureUrl}){
    return(
        <div>
        
            {id}
            {title}
            <img alt="" src={pictureUrl} />
            {price}
            
        
        </div>
    )
}