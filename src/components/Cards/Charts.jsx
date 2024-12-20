import CalendarIcon from '../../assets/calendar-icon';
import styles from './Charts.module.scss';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const Charts = ({ options, weekly, title }) => {
  return (
    <div className={styles['chart']}>
      <div className={styles['chart__title']}>
        {title}
        {weekly && (
          <span>
            <CalendarIcon />
            <p>Weekly</p>
          </span>
        )}
      </div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default Charts;
