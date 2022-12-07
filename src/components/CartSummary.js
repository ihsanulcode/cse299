import React, { useEffect } from "react";

function CartSummary({ cartItems, total, setTotal }) {
  console.log(cartItems);

  useEffect(() => {
    let totalPrice = 0;
    cartItems.map((item) => {
      totalPrice = totalPrice + JSON.parse(item.price);
      console.log(totalPrice);
    });
    setTotal(totalPrice);
  }, []);
  return (
    <div className="card border-secondary mb-5">
      <div className="card-header bg-light border-0">
        <h4 className="font-weight-semi-bold m-0">Cart Summary</h4>
      </div>
      <div className="card-body">
        <div className="d-flex justify-content-between mb-3 pt-1">
          <h6 className="font-weight-medium">Subtotal</h6>
          <h6 className="font-weight-medium">{total.toFixed(2)} tk</h6>
        </div>
        <div className="d-flex justify-content-between">
          <h6 className="font-weight-medium">Shipping</h6>
          <h6 className="font-weight-medium">10 tk</h6>
        </div>
      </div>
      <div className="card-footer border-secondary bg-transparent">
        <div className="d-flex justify-content-between mt-2">
          <h5 className="font-weight-bold">Total</h5>
          <h5 className="font-weight-bold">
            {cartItems.length === 0 ? total : (total + 10).toFixed(2)} tk
          </h5>
        </div>
        <button className="btn btn-block btn-primary my-3 py-3">
          Proceed To Checkout
        </button>
      </div>
    </div>
  );
}

export default CartSummary;
