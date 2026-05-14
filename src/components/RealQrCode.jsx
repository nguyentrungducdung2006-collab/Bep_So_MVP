import { useEffect, useState } from 'react';
import QRCode from 'qrcode';

export default function RealQrCode({ value, label = 'Mã QR đặt món', size = 168 }) {
  const [qrDataUrl, setQrDataUrl] = useState('');

  useEffect(() => {
    let active = true;

    QRCode.toDataURL(value, {
      width: size * 2,
      margin: 1,
      errorCorrectionLevel: 'M',
      color: {
        dark: '#09083d',
        light: '#ffffff'
      }
    }).then((dataUrl) => {
      if (active) {
        setQrDataUrl(dataUrl);
      }
    });

    return () => {
      active = false;
    };
  }, [size, value]);

  return (
    <div
      className="mx-auto grid place-items-center rounded-[22px] bg-white p-3 ring-1 ring-ink/8"
      style={{ width: size, height: size }}
    >
      {qrDataUrl ? (
        <img src={qrDataUrl} alt={label} className="h-full w-full rounded-[14px]" />
      ) : (
        <div className="h-full w-full rounded-[14px] bg-[linear-gradient(135deg,#f5f6fb_25%,#ffffff_25%,#ffffff_50%,#f5f6fb_50%,#f5f6fb_75%,#ffffff_75%)] bg-[length:18px_18px]" />
      )}
    </div>
  );
}
