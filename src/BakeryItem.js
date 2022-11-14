// TODO: create a component that displays a single bakery item
import bakeryData from "../assets/bakery-data.json";

export default function BakeryItem(prop) {
    const {item, updateCart, cart}  = prop;
    const handleClick = () => {
        //do stuff
        //console.log( 'clicked ${item.name}')

        updateCart([...cart, item]);
        
    }

    console.log(prop.item)
	return (
		<div> 
            <h1> hi </h1>
            <img src ={item.image} width = "400px" height = "400px"/>
            <h2>{item.name}</h2>
            <p>{item.price}</p>
            <p>{item.description}</p>
            <button onClick = {handleClick}>Add to Cart</button>


        </div>
	);
}

