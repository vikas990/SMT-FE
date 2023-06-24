import React, { useEffect, useRef } from "react";
import ReactToPrint from "react-to-print";
import "./Basket.css";
import { useNavigate } from "react-router-dom";
import { inWords } from "../../helper";

const Basket = ({
  cartItems,
  currencyOptions,
  currencyName,
  setCurrencyName,
  currency,
  formatter,
}) => {
  const navigate = useNavigate();
  const componentRef = useRef();
  const totalPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);

  useEffect(() => {
    document.title = "Quotation";
  }, []);

  return (
    <>
      <div className="Quatation_button">
        <button
          onClick={() => navigate("/")}
          type="button"
          className="btn btn-primary"
        >
          Back
        </button>
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
        <ReactToPrint
          trigger={() => (
            <button type="button" className="btn btn-success">
              Print / Download
            </button>
          )}
          content={() => componentRef.current}
        />
      </div>
      <div className="MainContainer" ref={componentRef}>
        <br />
        <br />
        <div className="FirstPage">
          <div className="CompanyDetails">
            <p>SARSWATI MACHINE TOOLS PVT.LTD.</p>
            <p>P-2, Street No. -10, Anand Parbat Industrial Area,</p>
            <p>New Delhi-110005.TEL: 9810147460, 28762164</p>
            <p>GST No.07AAOCS8295A1ZZ,</p>
            <p>CIN: U29200DL2010PTC205221, PAN No. GAGSBSGA.</p>
            <p>E-mail: ramsmtpl1961@gmail.com, smtools2007@gmail.com</p>
          </div>
          <hr />
          <div className="SecondSection">
            <p>Ref:No.SMTPL/06/21</p>
            <p>Date:12/06/2021</p>
          </div>
          <div className="ProductDetail">
            <p>{cartItems[0]?.MainName}</p>
            <p>{cartItems[0]?.ProductionCapacity}</p>
          </div>
          <table>
            <tr>
              <th>S. No.</th>
              <th>Description</th>
              <th>Qty</th>
              <th>Amount (Rs.)</th>
            </tr>
            {cartItems.map((item, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{inWords(item.qty)}</td>
                <td>
                  {currency?.rates[currencyName] * item.price == NaN
                    ? 0
                    : formatter.format(
                        currency?.rates[currencyName] * item.price
                      )}
                </td>
              </tr>
            ))}
            <tr>
              <td></td>
              <td className="Total">Total</td>
              <td></td>
              <td className="Total">
                {" "}
                {currency?.rates[currencyName] * totalPrice == NaN
                  ? 0
                  : formatter.format(
                      currency?.rates[currencyName] * totalPrice
                    )}
              </td>
            </tr>
          </table>
          <p className="TermsAndConditionName">Terms & Conditions attached.</p>
          <div className="Signature">
            <p>For SARSWATI MACHINE TOOLS PVT. LTD.</p>
            <p> Authorized Signatory </p>
          </div>
        </div>
        {/* Second Page Content */}
        <br />
        <br />
        <br />
        <br />
        <div className="SecondPage">
          <div className="SecondPage__CompanyDetails">
            <p>SARSWATI MACHINE TOOLS PVT.LTD.</p>
            <p>P-2, Street No. -10, Anand Parbat Industrial Area,</p>
            <p>New Delhi-110005.TEL: 9810147460, 28762164</p>
            <p>GST No.07AAOCS8295A1ZZ,</p>
            <p>CIN: U29200DL2010PTC205221, PAN No. GAGSBSGA.</p>
            <p>E-mail: ramsmtpl1961@gmail.com, smtools2007@gmail.com</p>
          </div>
          <hr />
          <div className="SecondSection">
            <p>Ref:No.SMTPL/06/21</p>
            <p>Date:12/06/2021</p>
          </div>
          <div className="ProductDetail">
            <p>TERMS & CONDITIONS</p>
          </div>
          <table>
            <tr>
              <th>PRICE</th>
              <th>:</th>
              <td>
                The prices quoted are Ex-factory, New Delhi. Price is based on
                present raw material rates In case of any change in basic
                prices, our prices too will be revised accordingly.
              </td>
            </tr>
            <tr>
              <th>DELIVERY</th>
              <th>:</th>
              <td>
                The delivery period 120 to 150 days, and that will be treated
                from the date of your valued confirm order along with advance.
                The delivery period is also subject to force major clause &
                factors beyond our control. In case of order cancellation,
                advance paid if any will be forfeited.
              </td>
            </tr>
            <tr>
              <th>GST & OTHER EXPENSES</th>
              <th>:</th>
              <th>
                GST and all other charges to your account to be charged extra as
                applicable at the time of dispatch.
              </th>
            </tr>
            <tr>
              <th>FRIEGHT/INSURANCE /PACKING</th>
              <th>:</th>
              <td>As per actual to be bourne by you.</td>
            </tr>
            <tr>
              <th>VALIDITY</th>
              <th>:</th>
              <td>The validity of our quotation will be 30 days.</td>
            </tr>
            <tr>
              <th>PAYMENT TERMS</th>
              <th>:</th>
              <td>
                50% Security Money at the time of confirmed order and 100%
                Payment against delivery before dispatch of machine, after will
                be return your security money.
              </td>
            </tr>
            <tr>
              <th>TRAIL & INSPECTION</th>
              <th>:</th>
              <td>
                At our works in the presence of your authorized representative.
                Raw material for trial to be provided by you.
              </td>
            </tr>
            <tr>
              <th>COMMISSIONING</th>
              <th>:</th>
              <td>
                We can undertake installation of the same anywhere in India at
                no extra cost. However, the incidental expenses like traveling,
                boarding, lodging and any other expenses shall be bourne by you.
              </td>
            </tr>
            <tr>
              <th>SERVICING</th>
              <th>:</th>
              <td>
                The service charges would be Rs.1500/- per day + our incidental
                expenses as per our Technician from the day he leaves our
                factory.
              </td>
            </tr>
            <tr>
              <th>GUARANTEE</th>
              <th>:</th>
              <td>
                One year against any manufacturing defect on a singly shift
                basis except electrical, press tools, mishandling / accident.
              </td>
            </tr>
            <tr>
              <th>OUR BANK DETAILS</th>
              <th>:</th>
              <td>
                SARSWATI MACHINE TOOLS PVT. LTD. <br />
                Bank of Baroda,
                <br />
                32, Community Centre Indl., Area, Phase-1, Naraina, <br />
                New Delhi-110028, <br />
                C.C. A/c No. 07920500000033 <br />
                RTGS/NEFT CODE; BARB0INDNAR
              </td>
            </tr>
          </table>
          <p className="TermsAndConditionName">Note:-</p>
          <table>
            <tr>
              <th>a)</th>
              <th>All the matters subject to Delhi jurisdiction only</th>
            </tr>
            <tr>
              <th>b)</th>
              <th>Order once placed will not be cancelled</th>
            </tr>
            <tr>
              <th>c)</th>
              <th>
                We reserve the right to forfeit the advance in the event of
                cancellation of order.
              </th>
            </tr>
          </table>
          <div className="Signature">
            <p>For SARSWATI MACHINE TOOLS PVT. LTD.</p>
            <p> Authorized Signatory </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Basket;
