import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import QuoteStep1 from './pages/QuoteStep1';
import QuoteStep2 from './pages/QuoteStep2';
import QuoteSummary from './pages/QuoteSummary';
import Confirmation from './pages/Confirmation';
import NoQuote from './pages/NoQuote';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quote/step-1" element={<QuoteStep1 />} />
        <Route path="/quote/step-2" element={<QuoteStep2 />} />
        <Route path="/quote/summary" element={<QuoteSummary />} />
        <Route path="/quote/confirmation" element={<Confirmation />} />
        <Route path="/quote/no-quote" element={<NoQuote />} />
      </Routes>
    </Router>
  );
}

export default App;
