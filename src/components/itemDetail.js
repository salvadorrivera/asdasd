import React from 'react';


export default function ItemDetail({ item }) {

    return(
        <div>
                 {item.id}
                 {item.title}
                 {item.description}
                 <img alt=""src={item.pictureUrl} />
                 {item.price}
                
         </div>
    )}
    
  