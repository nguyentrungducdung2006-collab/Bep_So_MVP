import { Clock3 } from 'lucide-react';
import { menuItems, dailyOrders } from '../data/mockData.js';

export default function TodayOrderCard() {
  const order = dailyOrders[0];
  const item = menuItems.find((menuItem) => menuItem.id === order.itemId);

  return (
    <article className="flex items-center justify-between gap-4 rounded-[24px] border border-ink/7 bg-white p-4 shadow-[0_12px_28px_rgba(15,17,61,0.05)]">
      <div className="min-w-0">
        <h3 className="truncate text-[21px] font-extrabold text-ink">{item.canteen}</h3>
        <p className="mt-4 flex items-center gap-2 truncate text-[16px] font-semibold text-ink/88">
          <Clock3 className="h-4 w-4 shrink-0 text-ink/70" />
          {item.time} • {item.name}
        </p>
        <p className="mt-3 text-[15px] font-medium text-ink/52">
          Trạng thái: <span className="font-semibold text-[#f07054]">{order.status}</span>
        </p>
      </div>
      <MealThumb />
    </article>
  );
}

function MealThumb() {
  return (
    <div className="grid h-[75px] w-[88px] shrink-0 place-items-center overflow-hidden rounded-[18px] bg-gradient-to-br from-[#fff8ed] to-[#efe8dd] shadow-inner">
      <svg viewBox="0 0 120 88" role="img" aria-label="Cơm gà" className="h-[75px] w-[100px]">
        <ellipse cx="60" cy="48" rx="48" ry="25" fill="#fff" />
        <circle cx="62" cy="44" r="18" fill="#fefefe" />
        <g fill="#c46925">
          <rect x="20" y="36" width="22" height="14" rx="6" transform="rotate(-16 31 43)" />
          <rect x="34" y="53" width="24" height="15" rx="6" transform="rotate(11 46 60)" />
          <rect x="52" y="59" width="22" height="14" rx="6" transform="rotate(-7 63 66)" />
        </g>
        <path d="M72 28c15-7 30-2 36 8-16 3-25 2-36-8Z" fill="#35b66d" />
        <path d="M75 42c13-8 26-3 31 6-13 4-22 3-31-6Z" fill="#5dd582" />
        <g fill="#e7442f">
          <circle cx="92" cy="34" r="6" />
          <circle cx="101" cy="47" r="6" />
        </g>
        <path d="M77 61h28v4H77z" fill="#f5b447" transform="rotate(-14 91 63)" />
        <path d="M80 51h28v4H80z" fill="#f5b447" transform="rotate(10 94 53)" />
      </svg>
    </div>
  );
}
