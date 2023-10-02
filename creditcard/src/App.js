import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Splitt />
      <CreditDetails />
    </div>
  );
}
function Splitt() {
  return <div className="left"></div>;
}
// function for cardholder and card num
function CreditDetails() {
  const [Ccholdername, setCcholdername] = useState("");
  const [ccnumber, setCcnumber] = useState("");
  const [expmonth, setexpmonth] = useState("");
  const [expyear, setexpyear] = useState("");
  const [cvnum, setCvnum] = useState("");
  const [error, setError] = useState(false);
  const handelSubmit = (e) => {
    e.preventDefault();
    if (
      Ccholdername.length === 0 ||
      ccnumber.length === 0 ||
      cvnum.length === 0 ||
      expmonth.length === 0 ||
      expyear.length === 0
    ) {
      setError(true);
    }
    if (Ccholdername && ccnumber && cvnum && expmonth && expyear) {
      console.log(
        "e.g Jane Appleseed:",
        Ccholdername,
        "\ne.g 1234 5678 9123 0000:",
        ccnumber,
        "\ne.g. 123:",
        cvnum,
        "\nMM:",
        expmonth,
        "\nYY:",
        expyear
      );
    }
  };
  return (
    <div className="right">
      <form className="details" onSubmit={handelSubmit}>
        <label for="cxname">CARDHOLDER NAME</label>
        <input
          type="text"
          id="cxname"
          name="cardname"
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
          name="cardname"
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
            name="cardname"
            placeholder="MM"
            onChange={(e) => setexpmonth(e.target.value)}
          />
          {error && expmonth.length <= 0 ? (
            <div>
              <label id="err">Exp month must be numeric</label>
            </div>
          ) : (
            ""
          )}
          <input
            type="number"
            id="fill"
            name="cardname"
            placeholder="YY"
            onChange={(e) => setexpyear(e.target.value)}
          />
          {error && expyear.length <= 0 ? (
            <div>
              <label id="err">Exp year must be numeric</label>
            </div>
          ) : (
            ""
          )}

          <label for="cxname">CVC</label>
          <input
            type="number"
            id="fillcv"
            name="cardname"
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
}

export default App;
