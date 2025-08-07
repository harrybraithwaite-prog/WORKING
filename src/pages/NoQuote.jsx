import React from 'react';
import { Link } from 'react-router-dom';

function NoQuote() {
  return (
    <div className="no-quote-page">
      <h2>We can't provide an instant quote</h2>
      <p>Because your room is above the first floor and you didn’t confirm you’re happy to send photos, we’re unable to provide an instant quote online.</p>
      <p>Please contact a local fitter directly for a personalised quote.</p>

      <Link to="/" className="home-button">Back to Home</Link>
    </div>
  );
}

export default NoQuote;
