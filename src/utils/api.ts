import axios from 'axios';
import qs from 'qs';

export const getReservoirMetaDataList = () =>
  axios({
    method: 'post',
    url: '/wrms/query/json?qid=rawris.wrms.gis.metagis_list_meas_reservoir',
  });

export const getReservoirData = (no: number) =>
  axios({
    method: 'post',
    url: '/wrms/query/json?qid=rawris.wrms.gis.popup.view_info_reservoir',
    data: qs.stringify({
      equip_no: no,
    }),
  });
