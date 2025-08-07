import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function QuoteSummary() {
  const navigate = useNavigate();
  const [quoteData, setQuoteData] = useState({});
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const step1 = JSON.parse(localStorage.getItem('quote-step1')) || {};
    const step2 = JSON.parse(localStorage.getItem('quote-step2')) || {};

    const allData = { ...step1, ...step2 };
    setQuoteData(allData);

    // === Basic Dynamic Pricing Logic ===
    let basePrice = 1000;

    if (step2.roomSize === 'medium') basePrice += 200;
    if (step2.roomSize === 'large') basePrice += 400;
    if (step2.sunlight === 'high') basePrice += 150;
    if (step2.wallType === 'internal') basePrice += 250;
    if (Number(step2.pipeDistance) > 5) basePrice += 100;

    // === Add fixed consignment fee ===
    const consignmentFee = 150;

    setPrice(basePrice + consignmentFee);
  }, []);

  const handleAccept = () => {
    navigate('/quote/confirmation');
  };

  return (
    <div className="quote-summary">
      <h2>Your Quote Summary</h2>

      <div className="summary-details">
        <p><strong>House Type:</strong> {quoteData.houseType}</p>
        <p><strong>Room:</strong> {quoteData.room}</p>
        <p><strong>Floor:</strong> {quoteData.floor}</p>
        <p><strong>Room Size:</strong> {quoteData.roomSize}</p>
        <p><strong>Sunlight:</strong> {quoteData.sunlight}</p>
        <p><strong>Wall Type:</strong> {quoteData.wallType}</p>
        <p><strong>Unit Height:</strong> {quoteData.unitHeight}</p>
        <p><strong>Distance to Outdoor Unit:</strong> {quoteData.pipeDistance}m</p>
        <p><strong>Neighbour Clearance:</strong> {quoteData.neighbourClearance}</p>
      </div>

      <div className="price-section">
        <h3>Total Installation Price: £{price}</h3>
        <p><em>All prices are inclusive of VAT where necessary.</em></p>
        <p>This includes a £150 consignment fee payable now.</p>
      </div>

      <button onClick={handleAccept}>Accept Quote & Book Now</button>
    </div>
  );
}

export default QuoteSummary;
