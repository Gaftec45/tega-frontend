import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar/Navbar';
import HomePage from './component/Pages/HomePage';
import Footer from './component/Footer/Footer';  // Adjusted path
import ServicePage from './component/Pages/ServicePage';
import PaystackPayment from './component/Pages/Payment';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />  // Adjusted home route
          <Route path="/service" element={<ServicePage />} />
          <Route path="/payment" element={<PaystackPayment />} />
          {/* Add a default route or 404 page handling here if needed */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;