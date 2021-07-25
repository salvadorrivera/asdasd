import React,{useEffect, useState, useContext} from 'react'
import { Link, useParams } from 'react-router-dom'
import ItemDetail from './itemDetail'
import { Array } from './array'
import { CartContext } from './cartContext'
import { getFirestore } from '../firebase/firebase-index'


/*
  new Promise((resolve, reject) =>{
            setTimeout(resolve(Array),2000);
        }).then((getItems) =>
         getItems.filter((element) => {
             if(element.id === id){
             return setDetail(element)
         }
        }))
        .catch((err)=>{console.log(err)})
 */
 /* */
export default function ItemDetailContainer() {
    const [detail, setDetail] = useState([])
    const { id } = useParams();
    const {setBoton} = useContext(CartContext)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
       setLoading(true)
        const db = getFirestore();
        const itemCollection = db.collection("items");
        itemCollection.orderBy("id","asc");
        const item = itemCollection.doc(id)

        item.get().then((doc)=>{
            setDetail({id: doc.id, ...doc.data()})
            console.log(doc.data())
        }).catch((error)=>{
           console.log("Error", error)
       }).finally(()=>{
           setLoading(false)
       })
      
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
  
