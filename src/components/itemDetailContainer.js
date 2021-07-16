import React,{useEffect, useState, useContext} from 'react'
import { Link, useParams } from 'react-router-dom'
import ItemDetail from './itemDetail'
import { Array } from './array'
import { CartContext } from './cartContext'


 
export default function ItemDetailContainer() {
    const [detail, setDetail] = useState([])
    const { id } = useParams();
    const {setBoton} = useContext(CartContext)

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

 return(
     <>
     <h1>Libros:</h1>
     {Array.map((product, key, exact)=>
        <li key={key} exact={exact}> 
        <Link onClick={()=>{setBoton(false)}} to={`/item/${product.id}`}>{product.title}</Link>
        </li>
     )}
       <ItemDetail item={detail}/>
     </>
 )
}
  
