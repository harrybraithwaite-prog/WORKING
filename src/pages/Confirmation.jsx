import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Confirmation() {
  const [quoteRef, setQuoteRef] = useState('');

  useEffect(() => {
    // Simulate saved quote count (you can replace this with a real DB counter)
    const stored = localStorage.getItem('quote-counter') || 1;
    const padded = String(stored).padStart(7, '0');
    setQuoteRef(`CQ-${padded}`);

    // Increment for next quote
    localStorage.setItem('quote-counter', Number(stored) + 1);
  }, []);

  return (
    <div className="confirmation-page">
      <h2>Thank you for accepting your quote!</h2>
      <p>Your reference number is: <strong>{quoteRef}</strong></p>

      <p>We’ll be in touch shortly to book in a time to come and complete the job.</p>
      <p>A copy of your quote and tracking link has been sent to your email.</p>

      <Link to="/" className="home-button">Back to Home</Link>
    </div>
  );
}

export default Confirmation;
