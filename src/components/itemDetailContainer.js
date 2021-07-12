import React,{useEffect, useState} from 'react'
import { Link, useParams } from 'react-router-dom'
import ItemDetail from './itemDetail'
import { Array } from './array'
/*{
        id: "1",
        title: "One Piece tomo 1",
        description:"Primera edicion de la saga One Piece",
        pictureUrl:"https://static.wikia.nocookie.net/onepiece/images/3/3a/Volumen_1.png/revision/latest?cb=20130123231516&path-prefix=es",
        price: 600,
        stock: 100,
    },
    {
        id: "2",
        title: "One Piece tomo 2",
        description:"Segunda edicion de la saga One Piece",
        pictureUrl:"https://static.wikia.nocookie.net/onepiece/images/9/9a/Volumen_2.png/revision/latest?cb=20130123231527&path-prefix=es",
        price: 600,
        stock: 57,
    },
    {
        id: "3",
        title: "One Piece tomo 3",
        description:"Tercera edicion de la saga One Piece",
        pictureUrl:"https://static.wikia.nocookie.net/onepiece/images/9/9a/Volumen_2.png/revision/latest?cb=20130123231527&path-prefix=es",
        price: 600,
        stock: 50,
    }, 
const array = [
    {
        id: "1",
        category:"ropa",
        title: " Remera vouge M para mujer",
        price: 500,
        pictureUrl: "https://d26lpennugtm8s.cloudfront.net/stores/146/800/products/667fd18a-b3e6-4675-8e17-96bb144f1802_nube-dfb7628f533f70d16815366997107381-1024-1024.jpg",
    
        },
        {
        id: "2",
        category:"ropa",
        title: " Pantalon L para mujer",
        price: 500,
        pictureUrl: "https://cdn.fashiola.mx/L558418123/gucci-hombre-pantalones-pantalones-deportivos-gg-supreme-de-algodon.jpg",
    
        },
        {
        id: "3",
        category:"electrodomestico",
        title: " Lenovo IdeaPad 5 Ordenador portátil",
        price: 8000,
        pictureUrl: "https://m.media-amazon.com/images/I/610aKJkEMhL._AC_SL1000_.jpg",
    
        },
        {
        id: "4",
        category:"electrodomestico",
        title: " Heladera Top House 286",
        price: 5000,
        pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_998099-MLA31631960687_072019-O.jpg",
    
        },
]*/

 
export default function ItemDetailContainer() {
    const [detail, setDetail] = useState([])
    const { id } = useParams();

    useEffect(() => {
        new Promise((resolve, reject) =>{
            setTimeout(resolve(Array),2000);
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
    console.log(Array)
 return(
     <>
     <h1>Libros:</h1>
     {Array.map((product, key, exact)=>
        <li key={key} exact={exact}>
             
        <Link to={`/item/${product.id}`}>{product.title}</Link>
        </li>
     )}
       <ItemDetail item={detail}/>
     </>
 )
}
  
