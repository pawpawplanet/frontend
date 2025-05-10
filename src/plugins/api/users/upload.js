import service from '@/plugins/axios.js';

const root = '/api';

export function uploadImage(data) {
  return service({
    url: `${root}/upload`,
    method: 'post',
    data
  });
}
