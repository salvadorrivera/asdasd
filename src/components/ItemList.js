import {useState, useEffect} from "react";
import MostrarItem from "./Item";

const itemArray = [
    {
    id: "Tshirt",
    title: " Remera vouge M para mujer",
    price: 500,
    pictureUrl: "https://d26lpennugtm8s.cloudfront.net/stores/146/800/products/667fd18a-b3e6-4675-8e17-96bb144f1802_nube-dfb7628f533f70d16815366997107381-1024-1024.jpg",

}]


export default function Item(){
    
    const [item, setItem] = useState([])


    useEffect(() => {
        new Promise((resolve, reject) => {
        setTimeout(resolve(itemArray), 2000);
        }).then((NewItem) =>{
        setItem(NewItem)
        }).catch((reason) =>{
            alert(`No se pudo efectuar por el siguiente problema:  ${reason}` )
        });
    });

    return(
        <div>
        {item.map((component) => <MostrarItem key={component.toString()} id={component.id} title={component.title} price={component.price} pictureUrl={component.pictureUrl} />)}
        </div>
    )
}