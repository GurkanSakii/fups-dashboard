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
import SaltIcon from '../../assets/salt-icon';
import LaysIcon from '../../assets/lays-icon';

import Charts from '../../components/Cards/Charts';
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

const salesChart = [
  { month: 'Jan', purchase: 40000, sales: 30000 },
  { month: 'Feb', purchase: 55000, sales: 50000 },
  { month: 'Mar', purchase: 50000, sales: 45000 },
  { month: 'Apr', purchase: 30000, sales: 40000 },
  { month: 'May', purchase: 40000, sales: 35000 },
  { month: 'Jun', purchase: 40000, sales: 42000 },
  { month: 'Jul', purchase: 30000, sales: 35000 },
  { month: 'Aug', purchase: 35000, sales: 25000 },
  { month: 'Sep', purchase: 55000, sales: 50000 },
  { month: 'Oct', purchase: 45000, sales: 42000 },
];

const orderChart = [
  { month: 'Jan', ordered: 3800, delivered: 3400 },
  { month: 'Feb', ordered: 2000, delivered: 2500 },
  { month: 'Mar', ordered: 3000, delivered: 3200 },
  { month: 'Apr', ordered: 3000, delivered: 2000 },
  { month: 'May', ordered: 3500, delivered: 3100 },
];

const salesChartOptions = {
  chart: {
    type: 'column',
  },
  title: {
    text: null,
    align: 'left',

    style: {
      fontFamily: 'Inter',
      fontWeight: '400',
      fontSize: '1em',
      color: '#000',
    },
  },
  xAxis: {
    categories: salesChart.map((item) => item.month),
  },
  yAxis: {
    title: {
      text: null,
    },
    tickInterval: 10000,
    labels: {
      formatter: function () {
        return this.value.toLocaleString();
      },
    },
  },
  series: [
    {
      name: 'Purchase',
      data: salesChart.map((item) => item.purchase),
      color: '#7a98f7',
    },
    {
      name: 'Sales',
      data: salesChart.map((item) => item.sales),
      color: '#4dbd62',
    },
  ],
};
const orderChartOptions = {
  chart: {
    type: 'areaspline',
  },
  title: {
    text: null,
    align: 'left',
    style: {
      fontFamily: 'Inter',
      fontWeight: '400',
      fontSize: '1em',
      color: '#000',
    },
  },
  xAxis: {
    categories: orderChart.map((item) => item.month),
  },
  yAxis: {
    title: {
      text: null,
    },
    tickInterval: 1000,
    labels: {
      formatter: function () {
        return this.value.toLocaleString();
      },
    },
  },
  series: [
    {
      name: 'Ordered',
      data: orderChart.map((item) => item.ordered),
      color: '#DBA362',
      fillOpacity: 0.1,
      marker: {
        enabled: false,
      },
    },
    {
      name: 'Delivered',
      data: orderChart.map((item) => item.delivered),
      color: '#B6D3FA',
      fillOpacity: 0.1,
      marker: {
        enabled: false,
      },
    },
  ],
  legend: {
    useHTML: true,
    symbolWidth: 0,
    labelFormatter: function () {
      return (
        '<span style="display: flex; align-items: center;">' +
        '<span style="width: 10px; height: 10px; background-color:' +
        this.color +
        '; border-radius: 50%; display: inline-block; margin-right: 5px;"></span>' +
        this.name +
        '</span>'
      );
    },
  },
};
const DashboardView = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.card}>
        <div className={styles.card__left}>
          <OverviewCard title={'Sales Overview'} overview={salesOverview} />
          <OverviewCard title={'Purchase Overview'} overview={purchaseOverview} />
          <Charts options={salesChartOptions} weekly={true} title={'Sales & Purchase'} />
          <TopSellingStock sellingstock={sellingStock} />
        </div>
        <div className={styles.card__right}>
          <SummaryCard title={'Inventory Summary'} summary={inventorySummary} />
          <SummaryCard title={'Product Summary'} summary={productSummary} />
          <Charts options={orderChartOptions} title={'Order Summary'} />
          <LowQuantityStock quantitystock={quantityStock} />
        </div>
      </div>
    </div>
  );
};

export default DashboardView;
