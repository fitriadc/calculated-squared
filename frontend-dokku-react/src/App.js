import React from 'react';
import Index from './pages'; // Ensure the component is imported with an uppercase name
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} /> {/* Use the uppercase component name */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
