import service from '@/plugins/axios.js';

const root = '/api/orders';

export function postOrder(data) {
  return service({
    url: `${root}`,
    method: 'post',
    data,
  });
}
