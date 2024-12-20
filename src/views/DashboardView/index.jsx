import styles from './style.module.scss';

import SalesIcon from '../../assets/sales-icon';
import RevenueIcon from '../../assets/revenue-icon';
import ProfitIcon from '../../assets/profit-icon';
import CostIcon from '../../assets/cost-icon';
import PurchaseIcon from '../../assets/purchase-icon';
import CancelIcon from '../../assets/cancel-icon';
import QuantityIcon from '../../assets/quantity-icon';
import OnTheWayIcon from '../../assets/ontheway-icon';
import SuppliersIcon from '../../assets/suppliers-icon';
import CategoriesIcon from '../../assets/categories-icon';
import HorizontalIcon from '../../assets/horizontal-icon';
import VerticalIcon from '../../assets/vertical-icon';
import SaltIcon from '../../assets/salt-icon';
import LaysIcon from '../../assets/lays-icon';

import GraphCard from '../../components/Cards/GraphCard';
import SummaryCard from '../../components/Cards/SummaryCard';
import OverviewCard from '../../components/Cards/OverviewCard';
import LowQuantityStock from '../../components/Cards/LowQuantity';
import TopSellingStock from '../../components/Cards/TopSellingStock';

const salesOverview = [
  { id: 1, name: 'Sales', quantity: 832, icon: () => <SalesIcon /> },
  { id: 2, name: 'Revenue', quantity: 18.3, icon: () => <RevenueIcon /> },
  { id: 3, name: 'Profit', quantity: 868, icon: () => <ProfitIcon /> },
  { id: 4, name: 'Cost', quantity: 17.432, icon: () => <CostIcon /> },
];

const purchaseOverview = [
  { id: 1, name: 'Purchase', quantity: 82, icon: () => <PurchaseIcon /> },
  { id: 2, name: 'Cost', quantity: 13.573, icon: () => <CostIcon /> },
  { id: 3, name: 'Cancel', quantity: 5, icon: () => <CancelIcon /> },
  { id: 4, name: 'Return', quantity: 17.432, icon: () => <ProfitIcon /> },
];

const inventorySummary = [
  { id: 1, name: 'Quantity in Hand', quantity: 868, icon: () => <QuantityIcon /> },
  { id: 2, name: 'To be received', quantity: 13.573, icon: () => <OnTheWayIcon /> },
];

const productSummary = [
  { id: 1, name: 'Number of Suppliers', quantity: 31, icon: () => <SuppliersIcon /> },
  { id: 2, name: 'Number of Categories', quantity: 21, icon: () => <CategoriesIcon /> },
];

const salesGraph = [
  {
    id: 1,
    title: 'Sales & Purchase',
    icon: () => <HorizontalIcon />,
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
    icon: () => <VerticalIcon />,
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
  { id: 1, name: 'Tata Salt', quantity: 10, icon: () => <SaltIcon /> },
  { id: 2, name: 'Lays', quantity: 15, icon: () => <LaysIcon /> },
  { id: 3, name: 'Lays', quantity: 15, icon: () => <LaysIcon /> },
];

const DashboardView = () => {
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

export default DashboardView;
