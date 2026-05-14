import { ArrowLeft, CalendarCheck2, Check, ChefHat, Clock3, Leaf, MapPin, QrCode, ShieldCheck } from 'lucide-react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import AppShell from '../components/AppShell.jsx';
import RealQrCode from '../components/RealQrCode.jsx';
import { buildQrOrder, getPublicOrderUrl, user } from '../data/mockData.js';
import { formatCurrency } from '../components/utils.js';

export default function OrderSuccess() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get('order') || 'SC-2305-084';
  const qrOrder = buildQrOrder(orderId);
  const publicOrderUrl = getPublicOrderUrl(qrOrder.id);

  return (
    <AppShell className="bg-[linear-gradient(180deg,#fbfbff_0%,#f4f6fb_100%)]">
      <header className="flex items-center justify-between pt-1">
        <button
          type="button"
          aria-label="Quay về trang chủ"
          onClick={() => navigate('/')}
          className="grid h-11 w-11 place-items-center rounded-2xl bg-white text-ink shadow-soft transition-transform active:scale-95"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <p className="text-[17px] font-extrabold text-ink">Xác nhận đơn</p>
        <div className="h-11 w-11" />
      </header>

      <section className="mt-7 overflow-hidden rounded-[30px] bg-[radial-gradient(circle_at_50%_0%,#3523a3_0%,#17105c_42%,#0b093f_100%)] px-5 py-7 text-center text-white shadow-glow">
        <div className="mx-auto grid h-18 w-18 place-items-center rounded-full bg-white/12 p-3 ring-1 ring-white/16">
          <span className="grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-mintFresh to-[#68ff95] text-ink shadow-[0_12px_28px_rgba(62,224,191,0.28)]">
            <Check className="h-8 w-8" strokeWidth={3} />
          </span>
        </div>
        <h1 className="mt-5 text-[26px] font-extrabold leading-tight">Đặt món thành công</h1>
        <p className="mx-auto mt-2 max-w-[290px] text-[15px] font-medium leading-6 text-white/78">
          {user.canteen} đã nhận đơn và giữ món cho bạn trong khung giờ lấy món.
        </p>

        <div className="mx-auto mt-6 w-full max-w-[300px] rounded-[24px] bg-white p-4 text-ink shadow-[0_18px_38px_rgba(0,0,0,0.16)]">
          <RealQrCode value={publicOrderUrl} label={`QR nhận món ${qrOrder.id}`} size={168} />
          <p className="mt-4 text-[13px] font-semibold text-ink/56">Mã nhận món</p>
          <p className="text-[25px] font-extrabold tracking-normal text-ink">{qrOrder.pickupCode}</p>
          <p className="mx-auto mt-2 max-w-[220px] text-[11px] font-semibold leading-4 text-ink/46">
            QR này chứa link demo công khai cho đơn {qrOrder.id}
          </p>
        </div>
      </section>

      <section className="mt-5 rounded-[26px] border border-ink/7 bg-white p-5 shadow-[0_12px_28px_rgba(15,17,61,0.05)]">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="text-[13px] font-bold uppercase tracking-[0.08em] text-orangeHot">Đơn {qrOrder.id}</p>
            <h2 className="mt-1 text-[22px] font-extrabold leading-tight text-ink">{qrOrder.menuItem.name}</h2>
            <p className="mt-2 flex items-center gap-2 text-[14px] font-semibold text-ink/60">
              <MapPin className="h-4 w-4" />
              {qrOrder.menuItem.canteen}
            </p>
          </div>
          <span className="rounded-2xl bg-[#ecfff7] px-3 py-2 text-[12px] font-extrabold text-[#11945a]">
            {qrOrder.status}
          </span>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3">
          <InfoPill icon={Clock3} label="Giờ lấy món" value={qrOrder.pickupWindow} />
          <InfoPill icon={ShieldCheck} label="Thanh toán" value={formatCurrency(qrOrder.menuItem.price)} />
          <InfoPill icon={CalendarCheck2} label="Xác nhận" value={qrOrder.confirmationTime} />
          <InfoPill icon={ChefHat} label="Bếp AI" value="Ưu tiên chế biến" />
        </div>
      </section>

      <section className="mt-5 rounded-[26px] bg-white p-5 shadow-[0_12px_28px_rgba(15,17,61,0.05)]">
        <div className="flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#effff9] text-[#129a68]">
            <Leaf className="h-6 w-6" />
          </span>
          <div>
            <h2 className="text-[18px] font-extrabold text-ink">Tác động xanh của đơn này</h2>
            <p className="text-[13px] font-medium text-ink/54">Tự động tính từ định lượng nguyên liệu</p>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3">
          <ImpactStat label="Giảm rác thực phẩm" value={`${qrOrder.foodWastePreventedKg} kg`} />
          <ImpactStat label="CO₂ tiết kiệm" value={`${qrOrder.carbonSavedKg} kg`} />
        </div>
      </section>

      <button
        type="button"
        onClick={() => navigate('/')}
        className="mt-6 flex h-14 w-full items-center justify-center gap-2 rounded-[20px] bg-gradient-to-r from-orangeSoft to-orangeHot text-[16px] font-extrabold text-ink shadow-[0_14px_26px_rgba(255,122,47,0.28)] transition-transform active:scale-[0.98]"
      >
        <QrCode className="h-5 w-5" />
        Về trang chủ
      </button>
    </AppShell>
  );
}

function InfoPill({ icon: Icon, label, value }) {
  return (
    <div className="rounded-[20px] bg-[#f6f7fc] p-3">
      <Icon className="h-5 w-5 text-orangeHot" />
      <p className="mt-2 text-[12px] font-semibold text-ink/50">{label}</p>
      <p className="mt-0.5 text-[13px] font-extrabold text-ink">{value}</p>
    </div>
  );
}

function ImpactStat({ label, value }) {
  return (
    <div className="rounded-[20px] bg-[#f6fff8] px-4 py-3 text-center">
      <p className="text-[13px] font-semibold leading-4 text-ink/60">{label}</p>
      <p className="mt-1 text-[20px] font-extrabold text-[#129031]">{value}</p>
    </div>
  );
}
