import React, { useState } from "react";
import { useEffect } from "react";
import { FaTimes, FaPlus, FaMinus } from "react-icons/fa";

function Row({ item, handleDelete, total, setTotal }) {
  const [itemTotal, setItemTotal] = useState(JSON.parse(item.price));
  const [btnValue, setBtnValue] = useState(JSON.parse(item.quantity));
  const [updatedItem, setUpdatedItem] = useState({ ...item });

  const handleUpdate = (price, quantity) => {
    console.log(price, quantity);
    const newItem = { ...item };
    newItem.price = price;
    newItem.quantity = quantity;
    setUpdatedItem({ ...newItem });
    console.log(updatedItem);

    fetch(`https://machbazar-server.vercel.app/updateCart/${updatedItem._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedItem),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
        }
      });
  };

  const handlePlus = () => {
    setBtnValue(btnValue + 100);
    setItemTotal(itemTotal + 166.67);
    setTotal(total + 166.67);
    handleUpdate(
      JSON.stringify(itemTotal + 166.67),
      JSON.stringify(btnValue + 100)
    );
  };
  const handleMinus = () => {
    setBtnValue(btnValue - 100);
    setItemTotal(itemTotal - 166.67);
    setTotal(total - 166.67);
    handleUpdate(
      JSON.stringify(itemTotal - 166.67),
      JSON.stringify(btnValue - 100)
    );
  };

  useEffect(() => {
    setBtnValue(JSON.parse(item.quantity));
  }, []);

  return (
    <tr>
      <td className="align-middle">
        <img src={item.image} alt="" style={{ width: "50px" }} />
        {item.name}
      </td>
      <td className="align-middle">1500/900gm</td>
      <td className="align-middle">
        <div
          className=" quantity d-flex justify-content-center mx-auto"
          style={{ width: "100px" }}
        >
          <div>
            <button
              className="btn btn-sm btn-primary btn-minus"
              style={{ height: "30px" }}
              onClick={handleMinus}
            >
              <FaMinus></FaMinus>
            </button>
          </div>
          <button
            className="btn btn-light border-none px-2 py-0 rounded d-flex "
            style={{ height: "30px" }}
          >
            <p> {btnValue}</p> <p>gm</p>
          </button>
          <div>
            <button
              className="btn btn-sm btn-primary btn-plus"
              style={{ height: "30px" }}
              onClick={handlePlus}
            >
              <FaPlus></FaPlus>
            </button>
          </div>
        </div>
      </td>
      <td className="align-middle">{itemTotal.toFixed(2)}</td>
      <td className="align-middle">
        <button
          className="btn btn-sm btn-primary"
          onClick={() => handleDelete(item, itemTotal)}
        >
          <FaTimes></FaTimes>
        </button>
      </td>
    </tr>
  );
}

export default Row;
