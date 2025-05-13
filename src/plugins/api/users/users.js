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

export function loginUser(data) {
  return service({
    url: `${root}/login`,
    method: 'post',
    data,
  });
}

export function logoutUser() {
  return service({
    url: `${root}/logout`,
    method: 'post'
  });
}

export function PatchOwnerProfile(data) {
  return service({
    url: `${root}/profile`,
    method: 'patch',
    data,
  });
}


export function GetOwnerProfile() {
  return service({
    url: `${root}/profile`,
    method: 'get',
  });
}
