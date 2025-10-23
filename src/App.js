import { useState } from "react";

function App() {
  const [pepperoniIsChecked, setPepperoniIsChecked] = useState(false);
  const [size, setSize] = useState("small");
  const [contactInfo, setContactInfo] = useState("");
  const [orderIsSubmitted, setOrderIsSubmitted] = useState(false);

  const togglePepperoni = () => setPepperoniIsChecked((prev) => !prev);
  const selectSize = (e) => setSize(e.target.value);
  const updateContactField = (e) => setContactInfo(e.target.value);
  const submitOrder = (e) => {
    e.preventDefault();
    setOrderIsSubmitted(true);
  };

  return (
    <div>
      <h1>Place an Order</h1>

      {/* Selection Summary */}
      <p>
        Your selection: {size} {pepperoniIsChecked ? "pepperoni" : "cheese"}
      </p>

      {/* Order Form */}
      <form onSubmit={submitOrder}>
        {/* Toppings */}
        <div>
          <h3>Toppings</h3>
          <label>
            <input
              type="checkbox"
              checked={pepperoniIsChecked}
              onChange={togglePepperoni}
            />
            Add pepperoni
          </label>
        </div>

        {/* Size Dropdown */}
        <div>
          <h3>Size</h3>
          <label htmlFor="select-size">Select size: </label>
          <select id="select-size" value={size} onChange={selectSize}>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </div>

        {/* Contact Info */}
        <div>
          <h3>Contact Info</h3>
          <label htmlFor="email">Enter your email address: </label>
          <input
            type="text"
            id="email"
            value={contactInfo}
            placeholder="email address"
            onChange={updateContactField}
          />
        </div>

        {/* Submit Button */}
        <button type="submit">Submit Order</button>
      </form>

      {/* Confirmation Message */}
      {orderIsSubmitted && <h2>Thanks for your order!</h2>}
    </div>
  );
}

export default App;