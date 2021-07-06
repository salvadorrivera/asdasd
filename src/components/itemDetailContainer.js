import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import ItemDetail from './itemDetail'

const array = [
    {
        id: 1,
        title: "One Piece tomo 1",
        description:"Primera edicion de la saga One Piece",
        pictureUrl:"https://static.wikia.nocookie.net/onepiece/images/3/3a/Volumen_1.png/revision/latest?cb=20130123231516&path-prefix=es",
        price: 600,
    },
    {
        id: 2,
        title: "One Piece tomo 2",
        description:"Segunda edicion de la saga One Piece",
        pictureUrl:"https://static.wikia.nocookie.net/onepiece/images/9/9a/Volumen_2.png/revision/latest?cb=20130123231527&path-prefix=es",
        price: 600,
    },
    {
        id: 3,
        title: "One Piece tomo 3",
        description:"Tercera edicion de la saga One Piece",
        pictureUrl:"https://static.wikia.nocookie.net/onepiece/images/9/9a/Volumen_2.png/revision/latest?cb=20130123231527&path-prefix=es",
        price: 600,
    },
]

//<Link to={`/item/${product.id}`} />
export default function ItemDetailContainer() {
    const [detail, setDetail] = useState([])

    useEffect(() => {
        new Promise((resolve, reject) =>{
            setTimeout(resolve(array),2000);
        }).then((getItems) => {return setDetail(getItems)})
        .catch((err)=>{console.log(err)})
    }, [])
    
    console.log(array.id)
 return(
     <>
     <h1>Libros:</h1>
     {array.map((product, key, exact)=>
        <li key={key} exact={exact}>
             
        <Link to={`/item/${product.id.toString()}`}>{product.title}</Link>
        </li>
     )}
        <ItemDetail item={detail} />
     </>
 )
}
// 
