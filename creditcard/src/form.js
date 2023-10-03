import React, { useState } from "react";
import "./App.css";

// function for cardholder and card num
const Form = ({ onFormSubmit }) => {
  const [Ccholdername, setCcholdername] = useState("");
  const [ccnumber, setCcnumber] = useState("");
  const [expMonth, setexpMonth] = useState("");
  const [expYear, setexpYear] = useState("");
  const [cvnum, setCvnum] = useState("");
  const [error, setError] = useState(false);
  const handelSubmit = (e) => {
    e.preventDefault();
    if (!Ccholdername || !ccnumber || !cvnum || !expMonth || !expYear) {
      setError(true);
      onFormSubmit(null);
    } else {
      setError(false);
      onFormSubmit({ Ccholdername, ccnumber, expYear, expMonth, cvnum });
    }
  };
  return (
    <div className="right">
      <form className="details" onSubmit={handelSubmit}>
        <label for="cxname">CARDHOLDER NAME</label>
        <input
          type="text"
          id="cxname"
          value={Ccholdername}
          placeholder="e.g Jane Appleseed"
          onChange={(e) => setCcholdername(e.target.value)}
        />
        {error && Ccholdername.length <= 0 ? (
          <label id="err">Cardholder name required</label>
        ) : (
          ""
        )}
        <label for="cxname">CARD NUMBER</label>
        <input
          type="number"
          id="cxname"
          value={ccnumber}
          placeholder="e.g 1234 5678 9123 0000"
          onChange={(e) => setCcnumber(e.target.value)}
        />
        {error && ccnumber.length <= 0 ? (
          <label id="err">Card number required</label>
        ) : (
          ""
        )}
        <div className="info">
          <label for="cxname">EXP. DATE(MM/YY)</label>
          <input
            type="number"
            id="fill"
            value={expMonth}
            placeholder="MM"
            onChange={(e) => setexpMonth(e.target.value)}
          />
          {error && expMonth.length <= 0 ? (
            <div>
              <label id="err">Exp date must be numeric</label>
            </div>
          ) : (
            ""
          )}
          <input
            type="number"
            id="fill"
            value={expYear}
            placeholder="YY"
            onChange={(e) => setexpYear(e.target.value)}
          />
          {error && expYear.length <= 0 ? (
            <div>
              <label id="err">Exp date must be numeric</label>
            </div>
          ) : (
            ""
          )}

          <label for="cxname">CVC</label>
          <input
            type="number"
            id="fillcv"
            value={cvnum}
            placeholder="e.g. 123"
            onChange={(e) => setCvnum(e.target.value)}
          />
          {error && cvnum.length <= 0 ? (
            <div>
              <label id="err">Cvc must be numeric</label>
            </div>
          ) : (
            ""
          )}
          <div>
            <button>CONFIRM</button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Form;
