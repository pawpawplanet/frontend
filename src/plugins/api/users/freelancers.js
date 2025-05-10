import service from '@/plugins/axios.js';

const root = '/api/freelancers';

export function getFreelancerProfile(data) {
  return service({
    url: `${root}/profile`,
    method: 'get',
    data,
  });
}

export function updateFreelancerProfile(data) {
  return service({
    url: `${root}/profile`,
    method: 'patch',
    data,
  });
}
