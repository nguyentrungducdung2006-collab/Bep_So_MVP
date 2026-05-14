import AppShell from '../components/AppShell.jsx';
import EsgImpact from '../components/EsgImpact.jsx';
import ForecastCard from '../components/ForecastCard.jsx';
import Header from '../components/Header.jsx';
import HeroCard from '../components/HeroCard.jsx';
import PublicQrDemoCard from '../components/PublicQrDemoCard.jsx';
import QuickActions from '../components/QuickActions.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import StatsPanel from '../components/StatsPanel.jsx';
import TodayOrderCard from '../components/TodayOrderCard.jsx';

export default function Home() {
  return (
    <AppShell>
      <Header />
      <HeroCard />
      <PublicQrDemoCard />
      <QuickActions />

      <SectionHeader title="Đơn hàng hôm nay" action="Xem tất cả" />
      <TodayOrderCard />

      <SectionHeader title="Thống kê cá nhân" action="Tuần này" dropdown />
      <StatsPanel />

      <SectionHeader title="Dashboard AI" action="Xem chi tiết" />
      <ForecastCard />

      <SectionHeader title="ESG Impact" action="Tháng 05/2025" dropdown />
      <EsgImpact />
    </AppShell>
  );
}
