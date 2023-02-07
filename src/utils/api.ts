import axios from 'axios';

export const getReservoirMetaDataList = () =>
  axios({
    method: 'get',
    url: '/reservoirs',
  });

export const getReservoirData = (no: number) =>
  axios({
    method: 'get',
    url: `/reservoir?id=${no}`,
  });
