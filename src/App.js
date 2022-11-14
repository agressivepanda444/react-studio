import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */


function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [total, setTotal] = useState(0);
  
  function AddToCart(props) {
    const [count, setCount] = useState(0);
    return (
      <div className="AddToCart">
        <button onClick={() => {setCount(count + 1)}}>Add To Cart</button>
        <h2>Current count: {count}</h2>
      </div>
    );
  }
  
  function BakeryItem(props) {
  
    return (
      <div className="BakeryItem">
        <img  src={props.img}/>
        <h1>{props.name} </h1>
        <p>{props.description}</p>
        <p>{props.price}</p>
        <AddToCart price = {props.price}/>
      </div>
    );
  }
  
  function CartItem(props) {
  
    return (
      <div className="CartItem">
        <h1>{props.count}x {props.name} </h1>
      </div>
    );
  }

  return (
    <div className="App">
      <h1>Jordan's Bakery</h1> {/* TODO: personalize your bakery (if you want) */}

      {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
        <BakeryItem name = {item.name} description = {item.description} img = {item.image} price = {item.price}/>
      ))}

      <div>
        <h2>Cart</h2>
        {/* TODO: render a list of items in the cart */}
        {/* <CartItem count = {BakeryItem.AddToCart.count}/> */}
        <h2>Total: {total}</h2>
      </div>
    </div>
  );
}

export default App;
