import service from '@/plugins/axios.js';

const root = '/api/orders';

export function patchOrderStatus(id, data) {
  return service({
    url: `${root}/${id}`,
    method: 'patch',
    data
  });
}