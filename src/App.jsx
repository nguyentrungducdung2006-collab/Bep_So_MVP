import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import OrderSuccess from './pages/OrderSuccess.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/order-success" element={<OrderSuccess />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
