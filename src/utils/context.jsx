import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
export const Context = createContext();

const AppContext = ({ children }) => {
  const [categories, setCategories] = useState();
  const [products, setProducts] = useState();
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartSubtotal, setCartSubtotal] = useState(0);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  useEffect(() => {
    let count = 0;
    // cartItems.map((item) => (count += item.attributes.quantity));
    count += cartItems.length;
    setCartCount(count);

    let subTotal = 0;
    cartItems.map(
      (item) => (subTotal += item.attributes.price * item.attributes.quantity)
    );
    setCartSubtotal(subTotal);
  }, [cartItems]);

  // methods to update Cart

  const handleAddToCart = (product, quantity) => {
    let items = [...cartItems];
    // finding the index of the item
    let index = items.findIndex((p) => p.id === product.id);
    // if item is already present cart
    if (index !== -1) {
      items[index].attributes.quantity += quantity;
    }
    // if item is not present in the cart
    else {
      product.attributes.quantity = quantity;
      items = [...items, product];
    }
    setCartItems(items);
  };

  const handleRemoveFromCart = (product) => {
    let items = [...cartItems];
    // filtering out all products except parameter product
    items = items.filter((p) => p.id !== product.id);
    setCartItems(items);
  };

  const handleCartProductQuantity = (type, product) => {
    let items = [...cartItems];
    // finding the index of the item
    let index = items.findIndex((p) => p.id === product.id);
    if (type === "increment") {
      items[index].attributes.quantity += 1;
    } else if (type === "decrement") {
      if (items[index].attributes.quantity === 1) return;
      items[index].attributes.quantity -= 1;
    }
    setCartItems(items);
  };

  return (
    <Context.Provider
      value={{
        categories,
        setCategories,
        products,
        setProducts,
        cartItems,
        setCartItems,
        cartCount,
        setCartCount,
        cartSubtotal,
        setCartSubtotal,
        handleAddToCart,
        handleRemoveFromCart,
        handleCartProductQuantity,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default AppContext;
