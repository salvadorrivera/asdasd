import React,{useEffect, useState} from 'react'
import ItemDetail from './itemDetail'

const Array = [
    {
        title: "One Piece tomo 1",
        description:"Primera edicion de la saga One Piece",
        pictureUrl:"https://static.wikia.nocookie.net/onepiece/images/3/3a/Volumen_1.png/revision/latest?cb=20130123231516&path-prefix=es",
        price: 600,
    },
    {
        title: "One Piece tomo 2",
        description:"Segunda edicion de la saga One Piece",
        pictureUrl:"https://static.wikia.nocookie.net/onepiece/images/9/9a/Volumen_2.png/revision/latest?cb=20130123231527&path-prefix=es",
        price: 600,
    },
]


export default function ItemDetailContainer() {
    const [detail, setDetail] = useState([])
    
    useEffect(() => {
        new Promise((resolve, reject) =>{
            setTimeout(resolve(Array[0]),2000);
        }).then((getItems) =>{setDetail(getItems)})
        .catch((err)=>{console.log(err)})
    }, [])
    
    console.log(Array)

 return(
     <>
     <ItemDetail item={detail} />
     <h1>hola</h1>
     </>
 )
}

