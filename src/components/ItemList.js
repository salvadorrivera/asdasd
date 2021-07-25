import {useState, useEffect} from "react";
import MostrarItem from "./Item";
import { getFirestore } from "../firebase/firebase-index";

/* new Promise((resolve, reject) => {
        setTimeout(resolve(Array), 2000);
        }).then((NewItem) =>{
        setItem(NewItem)
        }).catch((reason) =>{
            alert(`No se pudo efectuar por el siguiente problema:  ${reason}` )
        });*/ 
export default function Item(){
    
    const [item, setItem] = useState([])
    const [loading, setLoading] = useState(false)


    useEffect(() => {
       setLoading(true);
       const db = getFirestore();
       const itemCollection = db.collection("items");
       itemCollection.get().then((querySnapshot)=>{
           if(querySnapshot.size === 0){
               console.log('No hay resultados')
           }
           setItem(querySnapshot.docs.map(doc => doc.data()))
       }).catch((error)=>{
           console.log("Error", error)
       }).finally(()=>{
           setLoading(false)
       })
    },[]);

    return(
        <div>
        {item.map((component) =>
         <MostrarItem key={component.toString()} id={component.id} title={component.title} pictureUrl={component.pictureUrl} price={component.price} />)}
        </div>
    )
}