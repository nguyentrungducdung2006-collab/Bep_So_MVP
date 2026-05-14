import { Bell, QrCode } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { user } from '../data/mockData.js';

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="flex items-center justify-between pt-1">
      <div>
        <p className="text-[25px] font-extrabold leading-tight tracking-normal text-ink">Xin chào, {user.name} 👋</p>
        <p className="mt-1 text-[19px] font-medium text-ink/78">{user.dateLabel}</p>
      </div>

      <div className="flex items-center gap-3">
        <button
          type="button"
          aria-label="Mở thông báo"
          className="relative rounded-2xl p-2 text-ink transition-colors hover:bg-ink/5 active:bg-ink/10"
        >
          <Bell className="h-7 w-7" strokeWidth={2.2} />
          <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-orangeHot ring-2 ring-paper" />
        </button>
        <button
          type="button"
          aria-label="Mở mã QR"
          onClick={() => navigate('/order-success')}
          className="rounded-2xl p-2 text-ink transition-colors hover:bg-ink/5 active:bg-ink/10"
        >
          <QrCode className="h-7 w-7" strokeWidth={2.4} />
        </button>
      </div>
    </header>
  );
}
