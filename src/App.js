import './App.css';
import React, { useState } from 'react';

function App() {
  const [paymentSuccess, setPaymentSuccess] = useState(false); // State to manage payment success message

  const handlePayment = (e) => {
    e.preventDefault();

    // Razorpay options
    const options = {
      key: "rzp_test_GOERiGBifFy7Ua", // Replace with your Razorpay test key
      amount: 19900, // Fixed amount in paise (199 INR)
      currency: "INR",
      name: "Payment Testing",
      description: "Master Class - UIUX",
      handler: function (response) {
        // Handle successful payment
        alert(`Payment ID: ${response.razorpay_payment_id}`);
        setPaymentSuccess(true); // Set payment success to true
      },
      notes: {
        address: "Razorpay Corporate Office"
      },
      theme: {
        color: "#3399cc"
      }
    };

    // Create a new instance of Razorpay and open the payment modal
    const rzp = new window.Razorpay(options);
    rzp.open();
  }

  return (
    <div className="App">
      <h2>Master Class - UIUX</h2>
      {paymentSuccess && (
        <div className="success-message">
          Payment was successfully completed!
        </div>
      )}
      <button onClick={handlePayment} className="payment-button">
        Pay Rs 199
      </button>
    </div>
  );
}

export default App;
