import React,{useEffect, useState} from 'react'
import { Link, useParams } from 'react-router-dom'
import ItemDetail from './itemDetail'

const array = [
    {
        id: "1",
        title: "One Piece tomo 1",
        description:"Primera edicion de la saga One Piece",
        pictureUrl:"https://static.wikia.nocookie.net/onepiece/images/3/3a/Volumen_1.png/revision/latest?cb=20130123231516&path-prefix=es",
        price: 600,
    },
    {
        id: "2",
        title: "One Piece tomo 2",
        description:"Segunda edicion de la saga One Piece",
        pictureUrl:"https://static.wikia.nocookie.net/onepiece/images/9/9a/Volumen_2.png/revision/latest?cb=20130123231527&path-prefix=es",
        price: 600,
    },
    {
        id: "3",
        title: "One Piece tomo 3",
        description:"Tercera edicion de la saga One Piece",
        pictureUrl:"https://static.wikia.nocookie.net/onepiece/images/9/9a/Volumen_2.png/revision/latest?cb=20130123231527&path-prefix=es",
        price: 600,
    },
]

  //{detail.title.map((components, key) => <ItemDetail item={detail} key={key} id={components.id}title={components.title} description={components.description} pictureUrl={components.pictureUrl} price={components.price} />)} 
export default function ItemDetailContainer() {
    const [detail, setDetail] = useState([])
    const { id } = useParams();

    useEffect(() => {
        new Promise((resolve, reject) =>{
            setTimeout(resolve(array),2000);
        }).then((getItems) =>
         getItems.filter((element) => {
             if(element.id === id){
             return setDetail(element)
         }
        }))
        .catch((err)=>{console.log(err)})
    }, [id])
    console.log(detail)
    console.log(id)
 return(
     <>
     <h1>Libros:</h1>
     {array.map((product, key, exact)=>
        <li key={key} exact={exact}>
             
        <Link to={`/item/${product.id}`}>{product.title}</Link>
        </li>
     )}
       <ItemDetail item={detail}/>
        
     </>
 )
}
  
