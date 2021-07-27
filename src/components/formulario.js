import React, {useContext, useState} from 'react';
import { useForm } from 'react-hook-form';
import { getFirestore} from '../firebase/firebase-index'
import firebase from 'firebase';
import { CartContext } from './cartContext';


export default function Formulario() {
    const {register, handleSubmit} = useForm();
    const [idOrder, setIdOrder] = useState("")
    const {cart, Reducer } = useContext(CartContext)

    const onSubmit=(data)=>{
        const db = getFirestore();
        const orders = db.collection("order")
        const userInfo={
            name: data.name,
            mail: data.email,
            age: data.age
        }
        
        const carrito = (cart)
        
        const newOrder = {
            total: Reducer,
            users: userInfo,
            items: carrito,
            
            date: firebase.firestore.Timestamp.fromDate(new Date()),
        }
        orders.add(newOrder).then(({id})=>{
            setIdOrder(id)
            alert(`su id es: ${id}`)
            console.log(id)
        }).catch(error =>{console.log("error ->", error)})
        
    }


  

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" name="name" id="name" placeholder="Nombre y Apellido" {...register('name',{required: "Required"})} />
        
        <br />
        <input type="text" name="email" id="email" placeholder="E-mail" {...register('email',{required: "Required"})} />
        
        <br/>
        <input type="text" name="age" id="age" placeholder="edad" {...register('age',{required: "Required"})} />
        <br />
        <input type="submit" value="Enviar" />
        {console.log(Reducer)}
        </form>
    )
}