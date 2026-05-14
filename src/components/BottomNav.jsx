import { Bell, Home, ShoppingBag, UserRound, QrCode } from 'lucide-react';
import { NavLink, useNavigate } from 'react-router-dom';
import { cn } from './utils.js';

const navItems = [
  { label: 'Trang chủ', icon: Home, to: '/' },
  { label: 'Đặt món', icon: ShoppingBag, to: '/order-success' },
  { label: 'Thông báo', icon: Bell, to: '/order-success' },
  { label: 'Tài khoản', icon: UserRound, to: '/order-success' }
];

export default function BottomNav() {
  const navigate = useNavigate();

  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 mx-auto w-full max-w-[480px] px-4 pb-[max(0.7rem,env(safe-area-inset-bottom))]">
      <div className="relative h-[76px] rounded-t-[30px] bg-[#09083d] px-3 shadow-nav">
        <button
          type="button"
          aria-label="Quét QR đơn hàng"
          onClick={() => navigate('/order-success')}
          className="absolute left-1/2 top-0 flex h-[72px] w-[72px] -translate-x-1/2 -translate-y-6 flex-col items-center justify-center rounded-full bg-gradient-to-br from-orangeSoft to-orangeHot text-white shadow-[0_12px_28px_rgba(255,122,47,0.45)] transition-transform active:scale-95"
        >
          <QrCode className="h-7 w-7" strokeWidth={2.5} />
          <span className="mt-0.5 text-[10px] font-bold leading-none">Quét QR</span>
        </button>

        <div className="grid h-full grid-cols-5 items-end pb-3">
          {navItems.slice(0, 2).map((item) => (
            <NavItem key={item.label} item={item} />
          ))}
          <div aria-hidden="true" />
          {navItems.slice(2).map((item) => (
            <NavItem key={item.label} item={item} />
          ))}
        </div>
      </div>
    </nav>
  );
}

function NavItem({ item }) {
  const Icon = item.icon;

  return (
    <NavLink
      to={item.to}
      className={({ isActive }) =>
        cn(
          'flex min-w-0 flex-col items-center justify-center gap-1 text-[11px] font-semibold transition-colors',
          isActive ? 'text-orangeHot' : 'text-white/88'
        )
      }
    >
      <Icon className="h-6 w-6" strokeWidth={2.35} />
      <span className="w-full truncate text-center">{item.label}</span>
    </NavLink>
  );
}
