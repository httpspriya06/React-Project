import React from "react";
import "./App.css";

function Card({ Ccholdername, ccnumber, expYear, expMonth, cvnum }) {
  return (
    <>
      <div class="card">
        <div class="circle"></div>
        <div class="outlinecircle"></div>
        <p id="number">{ccnumber}</p>
        <p id="jane">{Ccholdername}</p>
        <p id="exp">
          {expMonth}/{expYear}
        </p>
      </div>
      <div class="cardback">
        <div class="rectangle"></div>
        <div class="cvv">{cvnum}</div>
      </div>
    </>
  );
}

export default Card;
