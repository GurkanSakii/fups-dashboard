import Products from '../../components/Products';
import OverallInventoryCard from '../../components/Cards/OverallInventoryCard';
import styles from './style.module.scss';

const inventory = [
  {
    title: 'Categories',
    value: '14',
    subtitle: 'Last 7 days',
    color: '#1570EF',
  },
  {
    title: 'Total Products',
    value: '868',
    subtitle: 'Last 7 days',
    cost: '₹25000',
    additionalInfo: 'Revenue',
    color: '#E19133',
  },
  {
    title: 'Top Selling',
    value: '5',
    subtitle: 'Last 7 days',
    cost: '₹2500',
    additionalInfo: 'Cost',
    color: '#845EBC',
  },
  {
    title: 'Low Stocks',
    value: '12',
    subtitle: 'Ordered',
    cost: '2',
    additionalInfo: 'Not in stock',
    color: '#F36960',
  },
];

const InventoryView = () => {
  return (
    <div className={styles['inventory-overview']}>
      <OverallInventoryCard inventory={inventory} />
      <Products />
    </div>
  );
};

export default InventoryView;
