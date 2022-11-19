import React from "react";

export default function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  // const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  let totalPrice = itemsPrice;
  let subTotal = itemsPrice;
  let discount = 0;
  let discountPercentage = "0";
  if (subTotal > 100) {
    totalPrice = subTotal - subTotal * 0.2;
    discount = subTotal * 0.2;
    discountPercentage = "20%";
  } else if (subTotal > 50) {
    totalPrice = subTotal - subTotal * 0.15;
    discount = subTotal * 0.15;
    discountPercentage = "15%";
  } else if (subTotal > 20) {
    totalPrice = subTotal - subTotal * 0.1;
    discount = subTotal * 0.1;
    discountPercentage = "10%";
  }

  return (
    <aside className="block col-1">
      <h2>Cart Items</h2>
      <div>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="col-2">{item.name}</div>

            <div className="col-1">
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>{" "}
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
            </div>

            <div className="col-1 text-right">
              {item.qty} x ${item.price.toFixed(2)}
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            {discount > 0 && (
              <div className="row">
                <div className="col-2">Discount Applied</div>
                <div className="col-1 text-right discountBadge">
                  {discountPercentage}
                </div>
              </div>
            )}

            <div className="row">
              <div className="col-2">
                <strong>Merchandise Subtotal</strong>
              </div>
              <div className="col-1 text-right">
                <strong>${subTotal.toFixed(2)}</strong>
              </div>
            </div>

            {discount > 0 && (
              <div className="row">
                <div className="col-2">Discount</div>
                <div className="col-1 text-right">- ${discount.toFixed(2)}</div>
              </div>
            )}
            <div className="row">
              <div className="col-2">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right">
                <strong>${totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div className="row">
              <button onClick={() => alert("To be connected to the backend.")}>
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}
