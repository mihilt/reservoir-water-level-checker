export const getSelectedReservoirEquipNoList = (): number[] => JSON.parse(
  localStorage.getItem('selectedReservoirEquipNoList') || '[]'
);