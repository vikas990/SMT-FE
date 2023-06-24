import React, { useEffect } from "react";
import "./Main.css";
import { Data } from "../Data";

const Main = ({
  AddItemToCart,
  RemoveItemToCart,
  cartItems,
  currencyOptions,
  currencyName,
  setCurrencyName,
  currency,
  formatter,
  productGroup,
  AddProductGroup,
  addedProductGroup,
  RemoveProductGroup,
}) => {
  console.log(cartItems);
  let newProductData = Data.filter(
    (product) => product.MainName === productGroup
  );

  if (newProductData.length === 0) {
    newProductData = Data;
  }

  useEffect(() => {
    document.title = "Sarswati Machine Tools";
  }, []);

  return (
    <div className="Container">
      <div className="DropDownContainer">
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {currencyName ? currencyName : "Select Currency"}
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            {currencyOptions.map((option, i) => (
              <li
                className="dropdown-item"
                onClick={() => {
                  setCurrencyName(option);
                }}
                key={i}
              >
                {option}
              </li>
            ))}
          </div>
        </div>
        {productGroup === "All Products" ? (
          ""
        ) : addedProductGroup ? (
          <a
            className="btn btn-danger groupButton"
            onClick={() => RemoveProductGroup(newProductData)}
          >
            Remove Product Group
          </a>
        ) : (
          <a
            className="btn btn-success groupButton"
            onClick={() => AddProductGroup(newProductData)}
          >
            Add Product Group
          </a>
        )}
      </div>
      <div className="Grid_container">
        {newProductData.map((product, index) => {
          return product.Data.map((details) => {
            return (
              <>
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    className="card-img-top"
                    src={details.image}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{details.name}</h5>
                    {/* <p className="card-text">{details.description}</p> */}
                    <p style={{ fontWeight: "bold" }}>
                      Price:-{" "}
                      {currency?.rates[currencyName] * details.price == NaN
                        ? 0
                        : formatter.format(
                            currency?.rates[currencyName] * details.price
                          )}
                    </p>
                    {cartItems.find((x) => x.id === details.id) ? (
                      <div className="CartCount">
                        <button
                          className="btn btn-danger"
                          onClick={() =>
                            RemoveItemToCart(
                              cartItems.find((x) => x.id === details.id)
                            )
                          }
                        >
                          -
                        </button>
                        <span>
                          {cartItems.find((x) => x.id === details.id).qty}
                        </span>
                        <button
                          className="btn btn-success"
                          onClick={() => AddItemToCart(details)}
                        >
                          +
                        </button>
                      </div>
                    ) : (
                      <button
                        className="btn btn-primary"
                        onClick={() => AddItemToCart(details)}
                      >
                        Add to Quatation
                      </button>
                    )}
                  </div>
                </div>
              </>
            );
          });
        })}
      </div>
    </div>
  );
};

export default Main;
