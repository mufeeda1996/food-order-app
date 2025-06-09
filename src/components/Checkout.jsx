import React from 'react';
import { useSelector } from 'react-redux';

function Checkout() {
  const cartItems = useSelector((state) => state.cart.items);

  const totalAmount = cartItems.reduce(
    (total, item) => total + (item.price || 0) * item.quantity,
    0
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Checkout Page</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="mb-4">
            {cartItems.map((item, index) => (
              <li key={index} className="border-b py-2">
                <strong>{item.name}</strong> – Quantity: {item.quantity} – Price: ₹{item.price}
              </li>
            ))}
          </ul>
          <h2 className="text-xl font-semibold">Total: ₹{totalAmount.toFixed(2)}</h2>
          <button className="mt-4 btn btn-primary">Place Order</button>
          
        </>
      )}
    </div>
  );
}

export default Checkout;
