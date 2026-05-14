import { Cloud, HandCoins, PackageCheck } from 'lucide-react';
import { esgImpact } from '../data/mockData.js';
import { formatCurrency } from './utils.js';

const items = [
  {
    label: 'Thực phẩm được cứu',
    value: `${esgImpact.rescuedFoodKg} kg`,
    icon: PackageCheck
  },
  {
    label: 'Giảm phát thải CO₂ tương đương',
    value: `${esgImpact.co2SavedKg} kg`,
    icon: Cloud
  },
  {
    label: 'Giảm chi phí lãng phí',
    value: formatCurrency(esgImpact.wasteAvoidedCost),
    icon: HandCoins
  }
];

export default function EsgImpact() {
  return (
    <section className="grid grid-cols-3 overflow-hidden rounded-[24px] border border-ink/7 bg-white px-2 py-5 shadow-[0_12px_26px_rgba(15,17,61,0.04)]">
      {items.map((item, index) => {
        const Icon = item.icon;

        return (
          <div key={item.label} className="relative flex flex-col items-center px-2 text-center">
            {index > 0 ? <span className="absolute left-0 top-3 h-[74px] w-px bg-ink/8" /> : null}
            <Icon className="h-9 w-9 text-[#3caf3a]" strokeWidth={2.1} />
            <p className="mt-3 min-h-[42px] text-[12px] font-semibold leading-[18px] text-ink/82">{item.label}</p>
            <p className="mt-2 text-[14px] font-extrabold text-[#129031]">{item.value}</p>
          </div>
        );
      })}
    </section>
  );
}
