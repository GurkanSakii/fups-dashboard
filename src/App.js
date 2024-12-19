import { useEffect } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';
import Sidebar from './components/Sidebar/Sidebar';

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
