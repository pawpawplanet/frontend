import service from '@/plugins/axios.js';

const root = '/api/services';

export function getServiceDetail(data) {
  return service({
    url: `${root}/:id`,
    method: 'get',
    data,
  });
}
