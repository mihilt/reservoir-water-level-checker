import axios from "axios";
import qs from "qs";
import { PROXY_URL } from "../config";

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

//something specific proxy server which i use it now need it..
export const tempRequestForDemoProxy = () =>
  axios({
    method: 'get',
    url: PROXY_URL
  })
