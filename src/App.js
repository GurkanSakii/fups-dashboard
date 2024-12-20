import { useEffect } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import Login from './pages/login-page';
import Sidebar from './components/Sidebar';
import NotFound from './pages/not-found-page';
import Dashboard from './pages/dashboard-page';
import Inventory from './pages/inventory-page';
import ProductDetail from './pages/product-detail-page';

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const user = localStorage.getItem('user');

  useEffect(() => {
    const isHome = location.pathname === '/';
    if (user && isHome) navigate('/dashboard');
    if (!user && !isHome) navigate('/');
  }, [user, location.pathname, navigate]);

  return (
    <>
      {user ? (
        <div className="app">
          <Sidebar />
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/inventory/:id" element={<ProductDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      ) : (
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="*" element={<Login />} />
        </Routes>
      )}
    </>
  );
};

export default App;
