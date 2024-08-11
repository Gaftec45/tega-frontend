import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar/Navbar';
import HomePage from './component/Pages/HomePage';
import Footer from './component/Navbar/Footer';  // Adjusted path
import ServicePage from './component/Pages/ServicePage';
import PaystackPayment from './component/Pages/Payment';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} /> 
          <Route path="/service" Component={<ServicePage />} />
          <Route path="/payment" Component={<PaystackPayment />} />
          {/* Add a default route or 404 page handling here if needed */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;