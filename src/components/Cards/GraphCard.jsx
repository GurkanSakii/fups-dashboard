import CalendarIcon from '../../assets/calendar-icon';
import styles from './GraphCard.module.scss';

const GraphCard = ({ graph }) => {
  return (
    <>
      {graph.map((grap) => (
        <div key={grap.id} className={styles['order-summary']}>
          <div className={styles['order-summary__title']}>
            {grap.title}
            {grap.weekly && (
              <span>
                <CalendarIcon />
                <p>Weekly</p>
              </span>
            )}
          </div>
          <div className={styles['order-summary__chart']}>
            <grap.icon />
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
