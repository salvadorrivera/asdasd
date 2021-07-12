
import Item from './ItemList';


export default function ItemListContainer(props){


    return(
    <div>
        <>
            {props.title}{props.name}
            <Item  />
        </>
    </div>
    )
};