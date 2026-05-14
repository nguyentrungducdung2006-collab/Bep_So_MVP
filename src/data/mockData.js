export const user = {
  name: 'Minh',
  dateLabel: 'Thứ 6, 23/05/2025',
  canteen: 'Canteen ABC',
  loyaltyTier: 'Green Pro'
};

export const menuItems = [
  {
    id: 'rice-chicken-001',
    name: 'Cơm gà xối mỡ',
    canteen: 'Canteen ABC',
    time: '11:30',
    price: 45000,
    calories: 650,
    ingredients: { rice: 0.19, chicken: 0.24, vegetables: 0.12 },
    popularity: 0.92
  },
  {
    id: 'salmon-bowl-002',
    name: 'Bowl cá hồi áp chảo',
    canteen: 'Canteen ABC',
    time: '12:10',
    price: 68000,
    calories: 540,
    ingredients: { rice: 0.14, chicken: 0, vegetables: 0.28 },
    popularity: 0.74
  },
  {
    id: 'veggie-noodle-003',
    name: 'Mì rau củ sốt mè',
    canteen: 'Canteen B',
    time: '12:35',
    price: 39000,
    calories: 470,
    ingredients: { rice: 0.08, chicken: 0, vegetables: 0.34 },
    popularity: 0.66
  }
];

export const dailyOrders = [
  { id: 'SC-2305-084', itemId: 'rice-chicken-001', status: 'Đã xác nhận', paid: true, qrCode: 'QR-SC-2305-084' },
  { id: 'SC-2305-091', itemId: 'salmon-bowl-002', status: 'Đang chuẩn bị', paid: true, qrCode: 'QR-SC-2305-091' },
  { id: 'SC-2305-112', itemId: 'veggie-noodle-003', status: 'Sẵn sàng lấy món', paid: true, qrCode: 'QR-SC-2305-112' }
];

export const weeklyDemandTrend = [
  { day: 'T2', demand: 55, waste: 7 },
  { day: 'T3', demand: 47, waste: 5 },
  { day: 'T4', demand: 72, waste: 6 },
  { day: 'T5', demand: 64, waste: 4 },
  { day: 'T6', demand: 88, waste: 3 },
  { day: 'T7', demand: 83, waste: 4 },
  { day: 'CN', demand: 112, waste: 2 }
];

export const kitchenSignals = {
  weatherBoost: 1.08,
  campusEventBoost: 1.16,
  examWeekAdjustment: 0.94,
  supplierReliability: 0.97,
  historicalAccuracy: 0.92
};

const ingredientLabels = {
  rice: 'Gạo',
  chicken: 'Thịt gà',
  vegetables: 'Rau củ'
};

const inventoryKg = {
  rice: 32,
  chicken: 28,
  vegetables: 44
};

const baseTomorrowMeals = 44;

export function forecastIngredients(items = menuItems, trend = weeklyDemandTrend, signals = kitchenSignals) {
  const recentDemand = trend.slice(-3).reduce((sum, item) => sum + item.demand, 0) / 3;
  const signalMultiplier =
    signals.weatherBoost * signals.campusEventBoost * signals.examWeekAdjustment * signals.supplierReliability;
  const expectedMeals = Math.round((baseTomorrowMeals + recentDemand * 0.58) * signalMultiplier);

  return Object.entries(ingredientLabels).map(([key, label], index) => {
    const weightedIngredient = items.reduce((sum, item) => sum + item.ingredients[key] * item.popularity, 0);
    const requiredKg = Number((weightedIngredient * expectedMeals * 0.28 + (index + 1) * 1.15).toFixed(1));
    const previousKg = Number((requiredKg / (index === 1 ? 0.925 : index === 2 ? 1.031 : 1.052)).toFixed(1));
    const changePercent = Math.round(((requiredKg - previousKg) / previousKg) * 100);
    const stockCoverage = Math.min(99, Math.round((inventoryKg[key] / requiredKg) * 100));

    return {
      key,
      label,
      requiredKg,
      changePercent,
      stockCoverage
    };
  });
}

export function calculateFinanceSummary(orders = dailyOrders, items = menuItems) {
  const confirmedOrders = orders.filter((order) => order.paid);
  const revenue = confirmedOrders.reduce((sum, order) => {
    const item = items.find((menuItem) => menuItem.id === order.itemId);
    return sum + (item?.price || 0);
  }, 0);

  return {
    spent: revenue * 2.96,
    orders: confirmedOrders.length * 4,
    calories: confirmedOrders.reduce((sum, order) => {
      const item = items.find((menuItem) => menuItem.id === order.itemId);
      return sum + (item?.calories || 0);
    }, 0) * 2
  };
}

export function calculateEsgImpact(forecast = forecastIngredients(), orders = dailyOrders) {
  const rescuedFoodKg = Number((forecast.reduce((sum, item) => sum + item.requiredKg, 0) * 3.12).toFixed(1));
  const co2SavedKg = Number((rescuedFoodKg * 2).toFixed(1));
  const wasteAvoidedCost = Math.round(rescuedFoodKg * 25312 + orders.length * 18200);

  return {
    rescuedFoodKg,
    co2SavedKg,
    wasteAvoidedCost
  };
}

export function buildQrOrder(orderId = 'SC-2305-084') {
  const order = dailyOrders.find((item) => item.id === orderId) || dailyOrders[0];
  const menuItem = menuItems.find((item) => item.id === order.itemId) || menuItems[0];
  const forecast = forecastIngredients();
  const esg = calculateEsgImpact(forecast);
  const pickupCode = order.qrCode.split('-').slice(-1)[0];

  return {
    ...order,
    pickupCode,
    menuItem,
    confirmationTime: '09:41',
    pickupWindow: `${menuItem.time} - 11:45`,
    carbonSavedKg: Number((menuItem.ingredients.vegetables * 1.8 + 0.42).toFixed(2)),
    foodWastePreventedKg: Number((menuItem.ingredients.rice + menuItem.ingredients.chicken + menuItem.ingredients.vegetables).toFixed(2)),
    esg
  };
}

export const forecastSummary = forecastIngredients();
export const financeSummary = calculateFinanceSummary();
export const esgImpact = calculateEsgImpact(forecastSummary);
export const qrOrder = buildQrOrder();

export const publicDemoBaseUrl = 'https://nguyentrungducdung2006-collab.github.io/Bep_So_MVP/';

export function getPublicOrderUrl(orderId = qrOrder.id) {
  const params = new URLSearchParams({
    order: orderId,
    source: 'qr-demo'
  });

  return `${publicDemoBaseUrl}#/order-success?${params.toString()}`;
}
