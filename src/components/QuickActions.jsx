import { ClipboardList, Heart, IdCard, WalletCards } from 'lucide-react';

const actions = [
  { label: 'Danh bạ Canteen', icon: IdCard },
  { label: 'Lịch sử đơn hàng', icon: ClipboardList },
  { label: 'Ưa thích', icon: Heart },
  { label: 'Ví của tôi', icon: WalletCards }
];

export default function QuickActions() {
  return (
    <section aria-label="Lối tắt" className="mt-7 grid grid-cols-4 gap-3">
      {actions.map((action) => {
        const Icon = action.icon;

        return (
          <button
            type="button"
            key={action.label}
            className="flex min-w-0 flex-col items-center gap-3 rounded-3xl py-1 text-center transition-transform active:scale-95"
          >
            <span className="grid h-[58px] w-[58px] place-items-center rounded-[20px] bg-white shadow-[0_10px_24px_rgba(27,25,81,0.06)]">
              <Icon className="h-8 w-8 text-ink" strokeWidth={2.15} />
            </span>
            <span className="min-h-[40px] text-[14px] font-semibold leading-5 text-ink">{action.label}</span>
          </button>
        );
      })}
    </section>
  );
}
