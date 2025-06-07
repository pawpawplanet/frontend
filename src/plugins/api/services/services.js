import service from '@/plugins/axios.js';

const root = '/api/services';

export function getService(params) {
  return service({
    url: `${root}`,
    method: 'get',
    params,
  });
}

export function getServiceDetail(id) {
  return service({
    url: `${root}/${id}`,
    method: 'get',
  })
}
