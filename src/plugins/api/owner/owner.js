import service from '@/plugins/axios.js';

const root = '/api/owners';

export function getOrders(params) {
  return service({
    url: `${root}/orders`,
    method: 'get',
    params,
  });
}

export function getReservedDates(params) {
  return service({
    url: `${root}/reserved-dates`,
    method: 'get',
    params,
  });
}
