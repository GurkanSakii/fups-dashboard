import styles from './OverallInventoryCard.module.scss';
const OverallInventoryCard = ({ inventory }) => {
  return (
    <div className={styles['inventory-overview--card']}>
      <h4> Overall Inventory</h4>
      <div className={styles['inventory-overview--card-area']}>
        {inventory.map((inv, index) => (
          <div key={index} className={styles['inventory-overview__item']}>
            <p className={styles['inventory-overview__title']} style={{ color: inv.color }}>
              {inv.title}
            </p>
            <div className={styles['inventory-overview--content']}>
              <div className={styles['inventory-overview--content-area']}>
                <span className={styles['inventory-overview__value']}>{inv.value}</span>
                <p className={styles['inventory-overview__subtitle']}>{inv.subtitle}</p>
              </div>
              {inv.additionalInfo && (
                <div className={styles['inventory-overview--content-area']}>
                  <span className={styles['inventory-overview__cost']}>{inv.cost}</span>
                  <span className={styles['inventory-overview__additional']}>{inv.additionalInfo}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OverallInventoryCard;
