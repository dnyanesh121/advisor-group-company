import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Insurance from './pages/Insurance.jsx';
import MutualFund from './pages/MutualFund.jsx';
import Loans from './pages/Loans.jsx';
import RealEstate from './pages/RealEstate.jsx';
import WebDigital from './pages/WebDigital.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/insurance" element={<Insurance />} />
      <Route path="/mutual-fund" element={<MutualFund />} />
      <Route path="/loans" element={<Loans />} />
      <Route path='/real-estate' element={<RealEstate />} />
      <Route path='/web-digital' element={<WebDigital />} />
    </Routes>
  );
}