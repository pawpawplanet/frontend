import service from '@/plugins/axios.js';

const root = '/api/recommendations';

export function getRecommendation(params) {
  return service({
    url: `${root}`,
    method: 'get',
    params,
  });
}
