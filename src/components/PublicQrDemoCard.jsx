import { ExternalLink, Smartphone } from 'lucide-react';
import RealQrCode from './RealQrCode.jsx';
import { getPublicOrderUrl, qrOrder } from '../data/mockData.js';

const demoUrl = getPublicOrderUrl(qrOrder.id);

export default function PublicQrDemoCard() {
  return (
    <section className="mt-5 overflow-hidden rounded-[24px] bg-white p-4 shadow-[0_12px_28px_rgba(15,17,61,0.06)]">
      <div className="flex items-center gap-4">
        <div className="shrink-0">
          <RealQrCode value={demoUrl} label="QR mở demo đặt món thành công" size={112} />
        </div>
        <div className="min-w-0 flex-1">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-orangeHot/10 px-3 py-1 text-[11px] font-extrabold text-orangeHot">
            <Smartphone className="h-3.5 w-3.5" />
            QR demo thật
          </div>
          <h2 className="mt-2 text-[17px] font-extrabold leading-5 text-ink">Quét bằng điện thoại bất kỳ</h2>
          <p className="mt-1 text-[12px] font-semibold leading-5 text-ink/58">
            QR mở giao diện xác nhận đơn trên GitHub Pages sau khi deploy.
          </p>
          <a
            href={demoUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-flex items-center gap-1 text-[12px] font-extrabold text-orangeHot"
          >
            Mở link demo
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
