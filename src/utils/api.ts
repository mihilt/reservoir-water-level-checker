import axios from "axios";
import qs from "qs";

export const getAllReservoirData = async () =>
  await axios({
    method: 'post',
    url: 'https://rawris-am.ekr.or.kr/wrms/query/json?qid=rawris.wrms.gis.kgis_list_base_equip_r',
  });


export const getSpecificReservoirData = async (no: Number) =>
  await axios({
    method: 'post',
    url: 'https://rawris-am.ekr.or.kr/wrms/query/json?qid=rawris.wrms.gis.popup.view_info_reservoir',
    data: qs.stringify({
      equip_no: no,
    }),
  });

export const getAllReservoirMetaData = async () =>
  await axios({
    method: 'post',
    url: 'https://rawris-am.ekr.or.kr/wrms/query/json?qid=rawris.wrms.gis.metagis_list_meas_reservoir',
  });