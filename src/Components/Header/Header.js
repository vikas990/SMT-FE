import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Main from "../Main/Main";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logo from "../../Images/Logo.png";
import { Data } from "../Data";

const Header = ({
  AddItemToCart,
  RemoveItemToCart,
  cartItems,
  currencyOptions,
  currencyName,
  setCurrencyName,
  currency,
  formatter,
  setProductGroup,
  productGroup,
  AddProductGroup,
  addedProductGroup,
  RemoveProductGroup,
}) => {
  const data = Data;
  return (
    <>
      <div className="Header">
        {/* Drawer*/}
        <div className="Drawer">
          <a
            class="btn"
            data-bs-toggle="offcanvas"
            href="#offcanvasExample"
            role="button"
            aria-controls="offcanvasExample"
          >
            <FontAwesomeIcon
              icon={faBars}
              size="2x"
              border
              className="MenuIcon"
            />
          </a>
          <div
            className="offcanvas offcanvas-start"
            tabindex="-1"
            id="offcanvasExample"
            aria-labelledby="offcanvasExampleLabel"
          >
            <div class="offcanvas-header">
              <img src={logo} alt="Logo" className="CompanyLogo" />
              <h5 class="offcanvas-title" id="offcanvasExampleLabel">
                Sarawati Machine tools
              </h5>
              <button
                type="button"
                className="text- close-btn"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              >
                X
              </button>
            </div>
            <hr className="BottomLine" />
            <div class="offcanvas-body">
              <div>
                <ul className="Quatation_list">
                  <li
                    data-bs-dismiss="offcanvas"
                    onClick={() => setProductGroup("All Products")}
                  >
                    All Products
                  </li>
                  {data?.map((productGroup, i) => (
                    <li
                      data-bs-dismiss="offcanvas"
                      onClick={() => setProductGroup(productGroup.MainName)}
                    >
                      {productGroup.MainName}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Drawer Ends here*/}

        <div className="logoSection">
          <img src={logo} alt="Logo" className="CompanyLogo" />
          <p>Sarswati Machine Tools</p>
        </div>
        <Link className="quat_Button" to={"/Basket"}>
          Get Quotation
        </Link>
      </div>
      <div>
        <Main
          AddItemToCart={AddItemToCart}
          RemoveItemToCart={RemoveItemToCart}
          cartItems={cartItems}
          currencyOptions={currencyOptions}
          currencyName={currencyName}
          setCurrencyName={setCurrencyName}
          currency={currency}
          formatter={formatter}
          productGroup={productGroup}
          AddProductGroup={AddProductGroup}
          addedProductGroup={addedProductGroup}
          RemoveProductGroup={RemoveProductGroup}
        />
      </div>
    </>
  );
};

export default Header;
