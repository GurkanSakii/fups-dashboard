import styles from './OverviewCard.module.scss';

const OverviewCard = ({ overview, title }) => {
  return (
    <div className={styles['card__left__overview']}>
      <p className={styles['card__left__overview__title']}>{title}</p>
      <div className={styles['card__left__overview__items']}>
        {overview.map((over) => (
          <div key={over.id} className={styles['card__left__overview__item']}>
            <div>
              <over.icon />
            </div>
            <div className={styles['card__left__overview--left']}>
              <p className={styles['card__left__overview--value']}>₹ {over.quantity}</p>
              <p>{over.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OverviewCard;
