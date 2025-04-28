import service from '@/plugins/axios.js';

const root = '/api/users';

// 範例 function 名稱和 url 需修改
export function testUser(params) {
  return service({
    url: `${root}/best_house`,
    method: 'get',
    params,
  });
}

export function registerUser(data) {
  return service({
    url: `${root}/signup`,
    method: 'post',
    data,
  });
}

