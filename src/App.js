import { useEffect, useState } from "react";
import Basket from "./Components/Basket/Basket";
import Header from "./Components/Header/Header";
import { Routes, Route } from "react-router-dom";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [currencyOptions, setCurrencyOprtions] = useState([]);
  const [currencyName, setCurrencyName] = useState("INR");
  const [currency, setCurrency] = useState();
  const [productGroup, setProductGroup] = useState("All Products");
  const [addedProductGroup, setAddedProductGroup] = useState(false);
  /**
   * @description:- This use effect is used to fetch currency details
   */
  useEffect(() => {
    fetch(`https://api.exchangerate.host/latest?base=INR`)
      .then((res) => res.json())
      .then((data) => {
        setCurrencyOprtions([data.base, ...Object.keys(data.rates)]);
        // const firstCurrency = currencyOptions.filter((o) => o === "INR");
        // setCurrencyName(firstCurrency[0]);
        setCurrency(data);
      });
  }, []);

  /**
   * @param:- need to provide a single product
   * @description:- used to add product to the basket
   */
  const AddItemToCart = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      const newCartItems = cartItems.map((x) =>
        x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
      );
      setCartItems(newCartItems);
    } else {
      const newCartItems = [...cartItems, { ...product, qty: 1 }];
      setCartItems(newCartItems);
    }
  };

  /**
   * @param:- need to provide a single product
   * @description:- used to remove product to the basket
   */
  const RemoveItemToCart = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      const newCartItems = cartItems.filter((x) => x.id !== product.id);
      setCartItems(newCartItems);
    } else {
      const newCartItems = cartItems.map((x) =>
        x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
      );
      setCartItems(newCartItems);
    }
  };

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currencyName,
  });

  const AddProductGroup = (product) => {
    const updateProductList = product[0].Data.map((d) => ({
      ...d,
      qty: 1,
      MainName: product[0].MainName,
      ProductionCapacity: product[0].ProductionCapacity,
    }));
    setCartItems(updateProductList);
    setAddedProductGroup(true);
  };

  const RemoveProductGroup = (product) => {
    setCartItems([]);
    setAddedProductGroup(false);
  };
  // console.log(cartItems);

  return (
    <>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Header
              AddItemToCart={AddItemToCart}
              RemoveItemToCart={RemoveItemToCart}
              cartItems={cartItems}
              currencyOptions={currencyOptions}
              currencyName={currencyName}
              setCurrencyName={setCurrencyName}
              currency={currency}
              formatter={formatter}
              setProductGroup={setProductGroup}
              productGroup={productGroup}
              AddProductGroup={AddProductGroup}
              addedProductGroup={addedProductGroup}
              RemoveProductGroup={RemoveProductGroup}
            />
          }
        />
        <Route
          path="/Basket"
          element={
            <Basket
              cartItems={cartItems}
              currencyOptions={currencyOptions}
              currencyName={currencyName}
              setCurrencyName={setCurrencyName}
              currency={currency}
              formatter={formatter}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
