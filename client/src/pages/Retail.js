import React, { Component } from "react";
// import Address from "../components/Retail/address";
import Checkout from "../components/Retail/checkout";
// import PaymentForm from "../components/Retail/paymentForm";
// import Review from "../components/Retail/review";
// import Checkout from "@material-ui/core/Checkout";

class Retail extends Component {
  render() {
    return (
      <div>
        <Checkout />
        {/* <Address />

        {/* <PaymentForm />
        <Review /> */}
      </div>
    );
  }
}

export default Retail;
