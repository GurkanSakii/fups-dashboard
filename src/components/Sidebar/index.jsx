import styles from './style.module.scss';

import { NavLink, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import DashboardIcon from '../../assets/dashboard-icon';
import InventoryIcon from '../../assets/inventory-icon';
import ReportIcon from '../../assets/report-icon';

import OrderIcon from '../../assets/order-icon';
import ManageStoreIcon from '../../assets/manage-store-icon';
import SupplierIcon from '../../assets/supplier-icon';
import SettingsIcon from '../../assets/settings-icon';
import LogoMiniIcon from '../../assets/logo-mini-icon';
import LogOutIcon from '../../assets/logout-icon';
import NotificationIcon from '../../assets/notification-icon';

const menuItems = [
  { name: 'Dashboard', icon: () => <DashboardIcon /> },
  { name: 'Inventory', icon: () => <InventoryIcon /> },
  { name: 'Reports', icon: () => <ReportIcon /> },
  { name: 'Suppliers', icon: () => <SupplierIcon /> },
  { name: 'Orders', icon: () => <OrderIcon /> },
  { name: 'Manage Store', icon: () => <ManageStoreIcon /> },
  { name: 'Settings', icon: () => <SettingsIcon /> },
];

const Sidebar = () => {
  const userData = localStorage.getItem('user');
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <>
      <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
        <div className={styles['sidebar__content']}>
          <h2 className={styles['sidebar__content-logo']}>
            <LogoMiniIcon />
            KANBAN
          </h2>
          <ul className={styles['sidebar__content-menu']}>
            {menuItems.map((item, index) => (
              <li
                key={item.name}
                className={index === menuItems.length - 1 ? styles['sidebar__content-menu-item--margin'] : undefined}
              >
                <NavLink
                  to={`/${item.name.toLowerCase()}`}
                  className={({ isActive }) =>
                    isActive
                      ? `${styles['sidebar__content-menu-item']} ${styles['sidebar__content-menu-item--active']}`
                      : styles['sidebar__content-menu-item']
                  }
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon />
                  {item.name}
                </NavLink>
              </li>
            ))}
            <li>
              <a
                className={`${styles['sidebar__content-menu-item']} ${styles['sidebar__content-menu-item--button']}`}
                onClick={handleLogout}
              >
                <LogOutIcon />
                Log Out
              </a>
            </li>
          </ul>
        </div>
      </div>

      <header className={styles['sidebar__header']}>
        <input type="text" placeholder="Search product, supplier, order" className={styles['sidebar__search']} />
        <div className={styles['sidebar__profile']}>
          <button className={styles['hamburger']} onClick={toggleMenu}>
            &#9776;
          </button>
          <NotificationIcon />
          {JSON.parse(userData).email}
        </div>
      </header>
    </>
  );
};

export default Sidebar;
