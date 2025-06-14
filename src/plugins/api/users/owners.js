import service from '@/plugins/axios.js';

const root = '/api/owners';

export function getOrders(params) {
  return service({
    url: `${root}/orders`,
    method: 'get',
    params
  });
}