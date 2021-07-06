import ItemCount from './ItemCount';
import Item from './ItemList';

export default function ItemListContainer(props){

    const onAdd = (contador) => {
        alert(`El numero de items que tiene en el carrito es:  ${contador}` )
        }

    return(
    <div>
        <>
            {props.title}{props.name}
            <Item  />
            <ItemCount initial = {0} stock={5} onAdd={onAdd} />
        </>
    </div>
    )
};