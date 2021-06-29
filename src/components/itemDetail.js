import React from 'react'

export default function ItemDetail({ item }) {
    return(
    <>
            {item.title}
            {item.description}
            <img alt="" src={item. pictureUrl} />
            {item.price}
    </>
    )}
  