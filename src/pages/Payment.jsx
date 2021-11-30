import React, { useEffect } from "react";

const Payment = () => {
  useEffect(() => {
    const Script = document.createElement("script");
    const Form = document.getElementById("pay");
    Script.setAttribute(
      "src",
      "https://checkout.razorpay.com/v1/payment-button.js"
    );
    Script.setAttribute("data-payment_button_id", "pl_IRWXaKDDZul3Gi");
    Form.appendChild(Script);
  }, []);

  return (
    <div>
      <form id="pay"> </form>
    </div>
  );
};

export default Payment;
