import { Flame, ReceiptText, Utensils } from 'lucide-react';
import { financeSummary } from '../data/mockData.js';
import { formatCurrency } from './utils.js';

const stats = [
  {
    label: 'Đã chi tiêu',
    value: formatCurrency(financeSummary.spent),
    icon: ReceiptText,
    color: 'text-orangeSoft',
    glow: 'shadow-[0_0_22px_rgba(255,122,47,0.38)]'
  },
  {
    label: 'Đã đặt món',
    value: `${financeSummary.orders} suất`,
    icon: Utensils,
    color: 'text-violet-300',
    glow: ''
  },
  {
    label: 'Calo nạp vào',
    value: `${new Intl.NumberFormat('vi-VN').format(financeSummary.calories)} kcal`,
    icon: Flame,
    color: 'text-mintFresh',
    glow: ''
  }
];

export default function StatsPanel() {
  return (
    <section className="grid grid-cols-3 overflow-hidden rounded-[24px] bg-[#100a4f] px-2 py-5 text-white shadow-glow">
      {stats.map((stat, index) => {
        const Icon = stat.icon;

        return (
          <div key={stat.label} className="relative flex flex-col items-center justify-center px-2 text-center">
            {index > 0 ? <span className="absolute left-0 h-16 w-px bg-white/24" /> : null}
            <Icon className={`h-9 w-9 ${stat.color} ${stat.glow}`} strokeWidth={2.15} />
            <p className="mt-3 text-[13px] font-medium leading-4 text-white/82">{stat.label}</p>
            <p className="mt-1 text-[16px] font-extrabold tracking-normal">{stat.value}</p>
          </div>
        );
      })}
    </section>
  );
}
