import styles from './Dashboard.module.scss';
import Sales from '../../assets/sales.svg';
import Revenue from '../../assets/revenue.svg';
import Profit from '../../assets/profit.svg';
import Cost from '../../assets/cost.svg';
import Purchase from '../../assets/purchase.svg';
import Cancel from '../../assets/cancel.svg';

import Quantity from '../../assets/quantity.svg';
import OnTheWay from '../../assets/ontheway.svg';
import Suppliers from '../../assets/suppliers-icon.svg';
import Categories from '../../assets/categories.svg';

import Vertical from '../../assets/vertical.svg';
import Horizontal from '../../assets/horizontal.svg';
import GraphCard from '../Cards/GraphCard';
import SummaryCard from '../Cards/SummaryCard';
import OverviewCard from '../Cards/OverviewCard';
import LowQuantityStock from '../Cards/LowQuantity';
import TopSellingStock from '../Cards/TopSellingStock';

import Salt from '../../assets/salt.svg';
import Lays from '../../assets/lays.svg';

const Dashboard = () => {
  const salesOverview = [
    { id: 1, name: 'Sales', quantity: 832, image: Sales },
    { id: 2, name: 'Revenue', quantity: 18.3, image: Revenue },
    { id: 3, name: 'Profit', quantity: 868, image: Profit },
    { id: 4, name: 'Cost', quantity: 17.432, image: Cost },
  ];

  const purchaseOverview = [
    { id: 1, name: 'Purchase', quantity: 82, image: Purchase },
    { id: 2, name: 'Cost', quantity: 13.573, image: Cost },
    { id: 3, name: 'Cancel', quantity: 5, image: Cancel },
    { id: 4, name: 'Return', quantity: 17.432, image: Profit },
  ];

  const inventorySummary = [
    { id: 1, name: 'Quantity in Hand', quantity: 868, image: Quantity },
    { id: 2, name: 'To be received', quantity: 13.573, image: OnTheWay },
  ];

  const productSummary = [
    { id: 1, name: 'Number of Suppliers', quantity: 31, image: Suppliers },
    { id: 2, name: 'Number of Categories', quantity: 21, image: Categories },
  ];

  const salesGraph = [
    {
      id: 1,
      title: 'Sales & Purchase',
      image: Horizontal,
      oStatusLabel: 'Purchase',
      oStatusColor: '#7a98f7',
      dStatusLabel: 'Sales',
      dStatusColor: '#4dbd62',
      weekly: true,
    },
  ];

  const orderGraph = [
    {
      id: 1,
      title: 'Order Summary',
      image: Vertical,
      oStatusLabel: 'Ordered',
      oStatusColor: '#DBA362',
      dStatusLabel: 'Delivered',
      dStatusColor: '#B6D3FA',
    },
  ];

  const sellingStock = [
    { id: 1, name: 'Surf Excel', sold: 30, remaining: 12, price: '100' },
    { id: 2, name: 'Rin', sold: 21, remaining: 15, price: '207' },
    { id: 3, name: 'Parle G', sold: 19, remaining: 17, price: '105' },
  ];

  const quantityStock = [
    { id: 1, name: 'Tata Salt', quantity: 10, image: Salt },
    { id: 2, name: 'Lays', quantity: 15, image: Lays },
    { id: 3, name: 'Lays', quantity: 15, image: Lays },
  ];

  return (
    <div className={styles.dashboard}>
      <div className={styles.card}>
        <div className={styles.card__left}>
          <OverviewCard title={'Sales Overview'} overview={salesOverview} />
          <OverviewCard title={'Purchase Overview'} overview={purchaseOverview} />
          <GraphCard graph={salesGraph} />
          <TopSellingStock sellingstock={sellingStock} />
        </div>
        <div className={styles.card__right}>
          <SummaryCard title={'Inventory Summary'} summary={inventorySummary} />
          <SummaryCard title={'Product Summary'} summary={productSummary} />
          <GraphCard graph={orderGraph} />
          <LowQuantityStock quantitystock={quantityStock} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
