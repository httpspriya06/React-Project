import { useState } from "react";
import "./App.css";
import CARD from "./card";
import Form from "./form";

function App() {
  const [CardDetails, setCardDetails] = useState({
    ccnumber: "0000 0000 0000 0000",
    Ccholdername: "JANE APPLESEED",
    expMonth: "00",
    expYear: "00",
    cvnum: "000",
  });

  const handelSubmit = (newCardDetails) => {
    setCardDetails(newCardDetails);
  };

  return (
    <div className="container">
      <Splitt />
      <Form onFormSubmit={handelSubmit} />
      <CARD {...CardDetails} />
    </div>
  );
}
function Splitt() {
  return <div className="left"></div>;
}

export default App;
