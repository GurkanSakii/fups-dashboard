import styles from './SummaryCard.module.scss';

const SummaryCard = ({ summary, title }) => {
  return (
    <div className={styles['card__right__overview']}>
      <p className={styles['card__right__overview__title']}>{title}</p>
      <div className={styles['card__right__overview__items']}>
        {summary.map((sum) => (
          <div key={sum.id} className={styles['card__right__overview__item']}>
            <div>
              <img src={sum.image} alt="Sales" />
            </div>
            <div className={styles['card__right__overview__template']}>
              <p className={styles['card__right__overview__value']}>₹ {sum.quantity}</p>
              <p className={styles['card__right__overview__label']}>{sum.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SummaryCard;
