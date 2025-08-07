import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function QuoteStep1() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    houseType: '',
    room: '',
    floor: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleNext = () => {
    // Save to localStorage for now (simulating step-to-step persistence)
    localStorage.setItem('quote-step1', JSON.stringify(formData));
    navigate('/quote/step-2');
  };

  return (
    <div className="quote-step">
      <h2>Step 1: Your Property</h2>

      <label>
        House Type:
        <select name="houseType" value={formData.houseType} onChange={handleChange}>
          <option value="">Select</option>
          <option value="detached">Detached</option>
          <option value="semi-detached">Semi-Detached</option>
          <option value="terraced">Terraced</option>
          <option value="flat">Flat</option>
        </select>
      </label>

      <label>
        Which room is the unit going in?
        <input type="text" name="room" value={formData.room} onChange={handleChange} />
      </label>

      <label>
        What floor is the room on?
        <select name="floor" value={formData.floor} onChange={handleChange}>
          <option value="">Select</option>
          <option value="ground">Ground Floor</option>
          <option value="first">First Floor</option>
          <option value="secondOrHigher">Second Floor or Higher</option>
        </select>
      </label>

      <button onClick={handleNext}>Next Step</button>
    </div>
  );
}

export default QuoteStep1;
