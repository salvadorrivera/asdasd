import {useState, useEffect} from "react";
import MostrarItem from "./Item";
import { Array } from "./array";

export default function Item(){
    
    const [item, setItem] = useState([])


    useEffect(() => {
        new Promise((resolve, reject) => {
        setTimeout(resolve(Array), 2000);
        }).then((NewItem) =>{
        setItem(NewItem)
        }).catch((reason) =>{
            alert(`No se pudo efectuar por el siguiente problema:  ${reason}` )
        });
    });

    return(
        <div>
        {item.map((component) =>
         <MostrarItem key={component.toString()} id={component.id} title={component.title} pictureUrl={component.pictureUrl} price={component.price} />)}
        </div>
    )
}