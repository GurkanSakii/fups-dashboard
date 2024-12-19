import styles from './Sidebar.module.scss';
import LogoMini from '../../assets/logo-mini.svg';
import Inventory from '../../assets/inventory.svg';
import Report from '../../assets/report.svg';
import Suppliers from '../../assets/suppliers.svg';
import Order from '../../assets/order.svg';
import ManageStore from '../../assets/manage-store.svg';
import Dashboard from '../../assets/dashboard.svg';
import Settings from '../../assets/settings.svg';
import LogOut from '../../assets/logout.svg';
import { NavLink, useNavigate } from 'react-router-dom';

import Notification from '../../assets/notification.svg';
import { useEffect, useState } from 'react';

const Sidebar = () => {
  const userData = localStorage.getItem('user');
  const navigate = useNavigate();

  const menuItems = [
    { name: 'Dashboard', icon: Dashboard },
    { name: 'Inventory', icon: Inventory },
    { name: 'Reports', icon: Report },
    { name: 'Suppliers', icon: Suppliers },
    { name: 'Orders', icon: Order },
    { name: 'Manage Store', icon: ManageStore },
    { name: 'Settings', icon: Settings },
  ];

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
            <img src={LogoMini} alt="logo-mini" />
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
                  <img src={item.icon} alt={`${item.name}-icon`} />
                  {item.name}
                </NavLink>
              </li>
            ))}
            <li>
              <a
                className={`${styles['sidebar__content-menu-item']} ${styles['sidebar__content-menu-item--button']}`}
                onClick={handleLogout}
              >
                <img src={LogOut} alt="Log Out" />
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
          <img src={Notification} alt="notification" />
          {JSON.parse(userData).email}
        </div>
      </header>
    </>
  );
};

export default Sidebar;
