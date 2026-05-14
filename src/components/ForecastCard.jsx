import { ArrowDown, ArrowUp } from 'lucide-react';
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { forecastSummary, kitchenSignals, weeklyDemandTrend } from '../data/mockData.js';

export default function ForecastCard() {
  return (
    <section className="overflow-hidden rounded-[24px] bg-[linear-gradient(135deg,#1b1264_0%,#100a4f_48%,#26107a_100%)] p-5 text-white shadow-glow">
      <div className="grid grid-cols-[1fr_43%] gap-3">
        <div className="min-w-0">
          <h3 className="text-[17px] font-extrabold leading-6">Dự báo nguyên liệu ngày mai (24/05/2025)</h3>
          <div className="mt-4 space-y-2.5">
            {forecastSummary.map((item) => {
              const PositiveIcon = item.changePercent >= 0 ? ArrowUp : ArrowDown;
              const changeColor = item.changePercent >= 0 ? 'text-[#ff9c6b]' : 'text-mintFresh';

              return (
                <div key={item.key} className="grid grid-cols-[1fr_auto_auto] items-center gap-3 text-[14px]">
                  <span className="text-white/85">{item.label}</span>
                  <span className="font-semibold">{item.requiredKg} kg</span>
                  <span className={`inline-flex items-center gap-0.5 font-bold ${changeColor}`}>
                    <PositiveIcon className="h-4 w-4" />
                    {Math.abs(item.changePercent)}%
                  </span>
                </div>
              );
            })}
          </div>
          <p className="mt-4 text-[14px] font-medium text-white/78">
            Dự báo chính xác <span className="font-extrabold text-[#c8ff72]">{Math.round(kitchenSignals.historicalAccuracy * 100)}%</span>
          </p>
        </div>

        <div className="h-[150px] min-w-0 pt-3">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={weeklyDemandTrend} margin={{ top: 10, right: 4, left: -24, bottom: 0 }}>
              <defs>
                <linearGradient id="demandLine" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#ffb66d" />
                  <stop offset="100%" stopColor="#ff6b35" />
                </linearGradient>
              </defs>
              <XAxis dataKey="day" hide />
              <YAxis hide domain={[0, 120]} />
              <Tooltip
                cursor={false}
                contentStyle={{
                  background: 'rgba(255,255,255,0.92)',
                  border: '0',
                  borderRadius: '14px',
                  color: '#090a33',
                  fontSize: '12px',
                  boxShadow: '0 10px 24px rgba(0,0,0,0.16)'
                }}
                formatter={(value) => [`${value} suất`, 'Nhu cầu']}
                labelFormatter={(label) => `Ngày ${label}`}
              />
              <Line
                type="monotone"
                dataKey="demand"
                stroke="url(#demandLine)"
                strokeWidth={3}
                dot={{ r: 3, fill: '#ffb66d', stroke: '#ff7a2f', strokeWidth: 2 }}
                activeDot={{ r: 5, fill: '#ffffff', stroke: '#ff7a2f', strokeWidth: 3 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
}
