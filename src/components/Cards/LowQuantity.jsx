import styles from './LowQuantityStock.module.scss';

const LowQuantityStock = ({ quantitystock }) => {
  return (
    <div className={styles.lowQuantity}>
      <div className={styles.lowQuantity__header}>
        <p>Low Quantity Stock</p>
        <a href="#" className={styles.lowQuantity__link}>
          See All
        </a>
      </div>
      <ul className={styles.lowQuantity__list}>
        {quantitystock.map((stock) => (
          <li key={stock.id} className={styles.lowQuantity__item}>
            <stock.icon />
            <div className={styles.lowQuantity__details}>
              <p className={styles.lowQuantity__name}>{stock.name}</p>
              <p className={styles.lowQuantity__quantity}>Remaining Quantity : {stock.quantity} Packet</p>
            </div>
            <span className={styles.lowQuantity__badge}>Low</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LowQuantityStock;
