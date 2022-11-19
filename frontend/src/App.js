import Header from "./components/Header";
import Main from "./components/Main";
import Basket from "./components/Basket";
import data from "./data";
import { useState } from "react";
function App() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]); //setting default value to empty array

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.uuid === product.uuid);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.uuid === product.uuid ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.uuid === product.uuid);
    console.log(exist);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.uuid !== product.uuid));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.uuid === product.uuid ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <div className="App">
      <Header countCartItems={cartItems.length}></Header>
      <div className="row">
        <Main products={products} onAdd={onAdd}></Main>
        <Basket
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
        ></Basket>
      </div>
    </div>
  );
}

export default App;
