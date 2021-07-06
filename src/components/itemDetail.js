import React from 'react';
import { useParams } from 'react-router-dom';

export default function ItemDetail({ item }) {
    const { id } = useParams();

    return(
        <div>
                 producto con id {id}
                 {item.id}
                 {item.title}
                 {item.description}
                 <img alt=""src={item.pictureUrl} />
                 {item.price}
                
         </div>
    )}
    
  