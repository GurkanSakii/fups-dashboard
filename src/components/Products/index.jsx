import { useState } from 'react';
import styles from './style.module.scss';
import productsData from '../../product.json';

import { useNavigate } from 'react-router-dom';
import FilterIcon from '../../assets/filter-icon';

const ITEMS_PER_PAGE = 10;

const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filterStatus, setFilterStatus] = useState('All');
  const navigate = useNavigate();
  const filteredProducts =
    filterStatus === 'All' ? productsData : productsData.filter((product) => product.status === filterStatus);
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);

  const handleProductClick = (productId) => {
    navigate(`/inventory/${productId}`);
  };

  const handleFilterClick = (status) => {
    setFilterStatus(status);
    setCurrentPage(1);
  };

  return (
    <div className={styles['products']}>
      <div className={styles['products__container']}>
        <div className={styles['products__header']}>
          <span>Products</span>
          <div className={styles['products__header-buttons']}>
            <button className={styles['products__header-buttons--add']}>Add Product</button>
            <button
              onClick={() => handleFilterClick('All')}
              className={`${styles['products__header-buttons--filters']} ${filterStatus === 'All' ? styles.active : ''}`}
            >
              <FilterIcon />
              All
            </button>
            <button
              onClick={() => handleFilterClick('In-stock')}
              className={`${styles['products__header-buttons--filters']} ${filterStatus === 'In-stock' ? styles.active : ''}`}
            >
              <FilterIcon />
              In-stock
            </button>
            <button
              onClick={() => handleFilterClick('Out of stock')}
              className={`${styles['products__header-buttons--filters']} ${filterStatus === 'Out of stock' ? styles.active : ''}`}
            >
              <FilterIcon />
              Out of stock
            </button>
            <button
              onClick={() => handleFilterClick('Low stock')}
              className={`${styles['products__header-buttons--filters']} ${filterStatus === 'Low stock' ? styles.active : ''}`}
            >
              <FilterIcon />
              Low stock
            </button>
          </div>
        </div>
        <div className={styles['products__table']}>
          <div className={styles['products__table-header']}>
            <span>Products</span>
            <span>Buying Price</span>
            <span>Quantity</span>
            <span>Threshold Value</span>
            <span>Expiry Date</span>
            <span>Availability</span>
          </div>
          {currentItems.map((product, index) => (
            <div key={index} className={styles['products__table-row']} onClick={() => handleProductClick(product.id)}>
              <span>{product.name}</span>
              <span>{product.price}</span>
              <span>{product.quantity}</span>
              <span>{product.threshold}</span>
              <span>{product.expiry}</span>
              <span
                className={`${
                  product.status === 'In-stock'
                    ? styles['status--in-stock']
                    : product.status === 'Out of stock'
                      ? styles['status--out-of-stock']
                      : styles['status--low-stock']
                }`}
              >
                {product.status}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className={styles['pagination']}>
        <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Products;
