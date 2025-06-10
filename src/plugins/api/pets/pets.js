import service from '@/plugins/axios.js';

const root = '/api/pets/';

export function getPet(data) {
  return service({
    url: `${root}`,
    method: 'get',
    data,
  });
}

export function postPet(data) {
  return service({
    url: `${root}`,
    method: 'post',
    data,
  });
}
export function patchPet(data) {
  return service({
    url: `${root}`,
    method: 'patch',
    data,
  });
}
