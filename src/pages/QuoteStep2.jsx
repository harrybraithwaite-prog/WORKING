import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function QuoteStep2() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    roomSize: '',
    sunlight: '',
    wallType: '',
    unitHeight: '',
    pipeDistance: '',
    neighbourClearance: '',
    confirmPhotos: false,
    continueAnyway: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleNext = () => {
    // Save to localStorage
    localStorage.setItem('quote-step2', JSON.stringify(formData));

    // Redirect logic
    if (formData.floor === 'secondOrHigher' && !formData.confirmPhotos) {
      navigate('/quote/no-quote');
    } else {
      navigate('/quote/summary');
    }
  };

  return (
    <div className="quote-step">
      <h2>Step 2: Room & Install Info</h2>

      <label>
        Room Size:
        <select name="roomSize" value={formData.roomSize} onChange={handleChange}>
          <option value="">Select</option>
          <option value="small">Small (0–150 sq ft)</option>
          <option value="medium">Medium (151–300 sq ft)</option>
          <option value="large">Large (301+ sq ft)</option>
        </select>
      </label>

      <label>
        How much sunlight does the room get?
        <select name="sunlight" value={formData.sunlight} onChange={handleChange}>
          <option value="">Select</option>
          <option value="low">Low</option>
          <option value="moderate">Moderate</option>
          <option value="high">High</option>
        </select>
      </label>

      <label>
        Wall Installation Type:
        <select name="wallType" value={formData.wallType} onChange={handleChange}>
          <option value="">Select</option>
          <option value="external">External Wall</option>
          <option value="internal">Internal Wall (needs extra pipework)</option>
        </select>
      </label>

      <label>
        Unit Height:
        <select name="unitHeight" value={formData.unitHeight} onChange={handleChange}>
          <option value="">Select</option>
          <option value="floor">Near Floor</option>
          <option value="mid">Mid Wall</option>
          <option value="high">High Wall</option>
        </select>
      </label>

      <label>
        Distance to outdoor unit (in meters):
        <input type="number" name="pipeDistance" value={formData.pipeDistance} onChange={handleChange} />
      </label>

      <label>
        Do you have 2.5m clearance to nearest neighbour?
        <select name="neighbourClearance" value={formData.neighbourClearance} onChange={handleChange}>
          <option value="">Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </label>

      <label>
        <input type="checkbox" name="confirmPhotos" checked={formData.confirmPhotos} onChange={handleChange} />
        I confirm I will provide photos if this is above the first floor
      </label>

      <button onClick={handleNext}>View My Quote</button>
    </div>
  );
}

export default QuoteStep2;
