interface ReservoirMetaData {
  equip_name: string;
  equip_no: number;
  cr_ratio: number;
}

interface ReservoirData {
  equip_name: string;
  equip_addr1: string;
  equip_addr2: string;
  buseo_head_name: string;
  buseo_branch_name: string;
  now_rate: string;
  yday_rate: string;
  now_date: string;
}

export type {
  ReservoirMetaData,
  ReservoirData
}