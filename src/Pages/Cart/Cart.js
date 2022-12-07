import React from "react";
import { useLoaderData } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

import Row from "../../components/Row";
import CartSummary from "../../components/CartSummary";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";

function Cart() {
  const cart = useLoaderData();
  const [cartItems, setCartItems] = useState(cart);
  const [total, setTotal] = useState(0);
  const { user } = useContext(AuthContext);

  const handleDelete = (item, itemTotal) => {
    setTotal(total - itemTotal);
    const agree = window.confirm(
      `Are you sure you want to delete: ${item.name}`
    );
    if (agree) {
      fetch(`https://machbazar-server.vercel.app/deleteItem/${item._id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);

          if (data.deletedCount > 0) {
            alert("item deleted successfully");
            const remainingItems = cartItems.filter((it) => it._id != item._id);
            setCartItems(remainingItems);
          }
        });
    }
  };

  // useEffect(() => {
  //   fetch(`https://machbazar-server.vercel.app/cart/${user.uid}`)
  //     .then((res) => res.json())
  //     .then((data) => setCartItems(data));
  // }, [total]);

  return (
    <div>
      <div className="container-fluid pt-5">
        <div className="row px-xl-5">
          <div className="col-lg-8 table-responsive mb-5">
            <table className="table table-bordered text-center mb-0">
              <thead className="bg-light text-dark">
                <tr>
                  <th>Products</th>
                  <th>Price</th>
                  <th>Weight</th>
                  <th>Total</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody className="align-middle">
                {cartItems.map((item) => (
                  <Row
                    item={item}
                    key={item._id}
                    handleDelete={handleDelete}
                    total={total}
                    setTotal={setTotal}
                  ></Row>
                ))}
              </tbody>
            </table>
          </div>
          <div className="col-lg-4">
            {/* <!-- cart summary section --> */}
            <CartSummary
              cartItems={cartItems}
              total={total}
              setTotal={setTotal}
            ></CartSummary>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
