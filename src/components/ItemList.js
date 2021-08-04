import {useState, useEffect} from "react";
import MostrarItem from "./Item";
import { getFirestore } from "../firebase/firebase-index";


export default function Item(){
    
    const [item, setItem] = useState([])
    const [, setLoading] = useState(false)


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
        {item.map((component, exact) =>
         <MostrarItem key={exact} id={component.id} title={component.title} pictureUrl={component.pictureUrl} price={component.price} />)}
        </div>
    )
}