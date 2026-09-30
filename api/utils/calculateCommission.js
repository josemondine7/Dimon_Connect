export const calculateTotal = (baseAmount, paymentType) => {
  const commissionRate = 0.10; // 10% plataforma
  let guarantee = 0;
  let totalClient = baseAmount;

  if (paymentType === 'deferred') {
    guarantee = baseAmount * 0.10; // 10% garantía
    totalClient = baseAmount + (baseAmount * commissionRate) + guarantee;
  } else {
    totalClient = baseAmount + (baseAmount * commissionRate);
  }

  return {
    baseAmount,
    commission: baseAmount * commissionRate,
    guarantee,
    totalClient,
    forProvider: baseAmount - (baseAmount * commissionRate) + guarantee
  };
};
