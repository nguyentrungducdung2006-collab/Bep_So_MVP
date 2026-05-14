import { ArrowRight, Leaf, Timer } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function HeroCard() {
  const navigate = useNavigate();

  return (
    <section className="relative mt-7 overflow-hidden rounded-[25px] bg-[radial-gradient(circle_at_76%_30%,#3c27a5_0%,#1d1266_38%,#110b4f_100%)] px-5 py-6 text-white shadow-glow">
      <div className="absolute -right-9 top-8 h-44 w-44 rounded-full border border-white/10" />
      <div className="absolute right-16 top-3 h-20 w-20 rounded-full bg-violet-500/20 blur-sm" />
      <div className="absolute bottom-10 left-[40%] h-6 w-6 rounded-full bg-gradient-to-br from-fuchsia-400 to-orangeHot" />
      <div className="absolute right-9 top-20 h-7 w-7 rounded-full bg-gradient-to-br from-orangeSoft to-orangeHot" />

      <div className="relative z-10 max-w-[52%]">
        <h1 className="text-[25px] font-extrabold leading-[1.16] tracking-normal">
          Đặt món trước
          <span className="block pt-1 text-orangeSoft">Ăn ngon -</span>
          <span className="block text-orangeSoft">Không chờ đợi</span>
        </h1>
        <p className="mt-4 text-[15px] font-medium leading-6 text-white/86">Chọn món yêu thích và đặt trước ngay!</p>
        <button
          type="button"
          onClick={() => navigate('/order-success')}
          className="mt-5 inline-flex h-12 items-center gap-3 rounded-[19px] bg-gradient-to-r from-orangeSoft to-[#ff8a73] px-5 text-[15px] font-extrabold text-ink shadow-[0_12px_22px_rgba(255,122,47,0.28)] transition-transform active:scale-95"
        >
          Đặt ngay
          <ArrowRight className="h-5 w-5" strokeWidth={2.7} />
        </button>
      </div>

      <div className="absolute right-2 top-12 z-0 w-[54%]">
        <MealIllustration />
      </div>

      <div className="absolute right-[88px] top-4 flex items-center gap-2 rounded-[17px] border border-white/18 bg-white/12 px-3 py-2 shadow-soft backdrop-blur-md">
        <span className="grid h-8 w-8 place-items-center rounded-full bg-orangeHot/90">
          <Timer className="h-4 w-4" />
        </span>
        <span className="leading-tight">
          <span className="block text-[11px] font-bold text-orangeSoft">Đặt trước</span>
          <span className="block text-[10px] font-semibold text-white/88">Tiết kiệm thời gian</span>
        </span>
      </div>

      <div className="absolute bottom-6 right-4 flex items-center gap-3 rounded-[18px] border border-white/12 bg-white/13 px-3 py-2 shadow-soft backdrop-blur-md">
        <span className="grid h-9 w-9 place-items-center rounded-full bg-mintFresh/15 text-mintFresh">
          <Leaf className="h-5 w-5" />
        </span>
        <span className="leading-tight">
          <span className="block text-[12px] font-extrabold text-orangeSoft">Zero Waste</span>
          <span className="block text-[11px] font-medium text-white/88">Tương lai xanh</span>
        </span>
      </div>
    </section>
  );
}

function MealIllustration() {
  return (
    <svg viewBox="0 0 230 176" role="img" aria-label="Tô cơm gà và rau củ" className="h-auto w-full drop-shadow-2xl">
      <defs>
        <linearGradient id="plate" x1="0" x2="1" y1="0" y2="1">
          <stop stopColor="#ffffff" />
          <stop offset="1" stopColor="#ece7ff" />
        </linearGradient>
        <linearGradient id="chicken" x1="0" x2="1">
          <stop stopColor="#b75b20" />
          <stop offset="1" stopColor="#ff8b39" />
        </linearGradient>
      </defs>
      <ellipse cx="121" cy="92" rx="92" ry="56" fill="#ffffff" opacity="0.18" />
      <ellipse cx="121" cy="92" rx="83" ry="49" fill="url(#plate)" />
      <ellipse cx="122" cy="94" rx="67" ry="38" fill="#fffaf6" />
      <circle cx="119" cy="87" r="29" fill="#fff" />
      <g fill="#f3f4fb">
        <circle cx="111" cy="79" r="2" />
        <circle cx="127" cy="84" r="2" />
        <circle cx="116" cy="99" r="2" />
        <circle cx="134" cy="96" r="2" />
      </g>
      <g fill="url(#chicken)">
        <rect x="56" y="71" width="28" height="18" rx="8" transform="rotate(-18 70 80)" />
        <rect x="62" y="95" width="31" height="20" rx="8" transform="rotate(12 77 105)" />
        <rect x="87" y="105" width="28" height="19" rx="8" transform="rotate(-10 101 114)" />
        <rect x="79" y="68" width="26" height="17" rx="8" transform="rotate(14 92 76)" />
      </g>
      <g>
        <path d="M139 60c18-7 36-3 44 8-17 3-29 4-44-8Z" fill="#1f9d59" />
        <path d="M145 74c18-10 35-6 42 6-17 5-29 5-42-6Z" fill="#27b36a" />
        <path d="M146 87c17-7 33-3 41 8-18 3-28 2-41-8Z" fill="#4bcf7e" />
      </g>
      <g fill="#f5b447">
        <path d="M146 109h42v5h-42z" transform="rotate(-13 167 111)" />
        <path d="M148 99h42v5h-42z" transform="rotate(10 169 101)" />
        <path d="M148 118h40v5h-40z" transform="rotate(2 168 120)" />
      </g>
      <g fill="#8d3fb6">
        <path d="M174 76c16 7 25 17 29 31-16-2-28-11-29-31Z" />
        <path d="M169 84c15 9 23 20 23 35-15-5-24-16-23-35Z" fill="#a64ecb" />
      </g>
      <g fill="#e83f2e">
        <circle cx="181" cy="58" r="9" />
        <circle cx="199" cy="70" r="9" />
        <circle cx="192" cy="91" r="9" />
      </g>
      <g fill="#f36b28">
        <circle cx="111" cy="69" r="2.2" />
        <circle cx="128" cy="104" r="2.2" />
        <circle cx="94" cy="92" r="2.2" />
      </g>
    </svg>
  );
}
