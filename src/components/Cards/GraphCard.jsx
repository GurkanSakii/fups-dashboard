import styles from './GraphCard.module.scss';
import Calendar from '../../assets/calendar.svg';
const GraphCard = ({ graph }) => {
  return (
    <>
      {graph.map((grap) => (
        <div key={grap.id} className={styles['order-summary']}>
          <div className={styles['order-summary__title']}>
            {grap.title}
            {grap.weekly && (
              <span>
                <img src={Calendar} alt={Calendar} />
                <p>Weekly</p>
              </span>
            )}
          </div>
          <div className={styles['order-summary__chart']}>
            <img src={grap.image} alt={grap.image} />
          </div>
          <div className={styles['order-summary__legend']}>
            <div className={styles['order-summary__legend-item']}>
              <span
                className={styles['order-summary__legend-color']}
                style={{ backgroundColor: grap.oStatusColor }}
              ></span>
              {grap.oStatusLabel}
            </div>
            <div className={styles['order-summary__legend-item']}>
              <span
                className={styles['order-summary__legend-color']}
                style={{ backgroundColor: grap.dStatusColor }}
              ></span>
              {grap.dStatusLabel}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default GraphCard;
