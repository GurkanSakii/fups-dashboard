import styles from './TopSellingStock.module.scss';

const TopSellingStock = ({ sellingstock }) => {
  return (
    <div className={styles['top-selling-stock__container']}>
      <div className={styles['top-selling-stock__header']}>
        <div>Top Selling Stock</div>
        <div className={styles['top-selling-stock__header-link']}>See All</div>
      </div>
      <div className={styles['top-selling-stock__table']}>
        <div className={styles['top-selling-stock__table-header']}>
          <div>Name</div>
          <div>Sold Quantity</div>
          <div>Remaining Quantity</div>
          <div>Price</div>
        </div>
        {sellingstock.map((stock) => (
          <div key={stock.id} className={styles['top-selling-stock__table-row']}>
            <div className={styles['top-selling-stock__table-row-item']}>{stock.name}</div>
            <div className={styles['top-selling-stock__table-row-item']}>{stock.sold}</div>
            <div className={styles['top-selling-stock__table-row-item']}>{stock.remaining}</div>
            <div className={styles['top-selling-stock__table-row-item']}>₹ {stock.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopSellingStock;
