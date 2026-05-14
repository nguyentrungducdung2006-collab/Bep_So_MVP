import BottomNav from './BottomNav.jsx';
import { cn } from './utils.js';

export default function AppShell({ children, className }) {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#eef1f8] text-ink">
      <div className="mx-auto min-h-screen w-full max-w-[480px] overflow-x-hidden bg-paper shadow-[0_0_45px_rgba(7,8,47,0.12)]">
        <main className={cn('min-h-screen overflow-x-hidden px-5 pb-28 pt-4 safe-bottom', className)}>
          {children}
        </main>
        <BottomNav />
      </div>
    </div>
  );
}
