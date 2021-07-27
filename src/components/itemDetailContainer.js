import React,{useEffect, useState, useContext} from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './itemDetail'
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
 /* const filterProducts = () => {
        const db = getFirestore();
        const itemCollection = db.collection("items")
        .where("id", "==", `${id}`)
        return itemCollection.get().then((querySnapshot) => {
            if(querySnapshot.size === 0){
                console.log('no results')
            } else {
                setDetail(querySnapshot.docs.map(doc => doc.data()))
            }
        }).catch(error => {
            console.log('error ->', error)
        })
    }*/

export default function ItemDetailContainer() {
    const [detail, setDetail] = useState([])
    const { id } = useParams();
    const {setBoton} = useContext(CartContext)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        const db = getFirestore();
        const itemCollection = db.collection("items")
        .where("id", "==", id)
        return itemCollection.get().then((querySnapshot) => {
            if(querySnapshot.size === 0){
                console.log('no results')
            } else {
                setDetail(querySnapshot.docs.map(doc => doc.data())[0]) 
                
            }
        }).catch(error => {
            console.log('error ->', error)
        }).finally(()=>{setLoading(false)})
       
     }, [id])
/* {Array.map((product, key, exact)=>
        <li key={key} exact={exact}> 
        <Link onClick={()=>{setBoton(false)}} to={`/item/${product.id}`}>{product.title}</Link>
        </li>
     )}*/ 
 return(
     <>
     <h1>Producto: </h1>
    
       <ItemDetail item={detail}/>
     </>
 )
}
  
