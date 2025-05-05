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

export function PostOwnerProfile(data) {
  const token = localStorage.getItem('token');
  console.log('Token:', token);
  if (!token) {
    console.error('No token found');
    return Promise.reject('No token found');
  }


  return service({
    url: `${root}/profile`,
    method: 'post',
    data,
    headers: {
      Authorization: `Bearer ${token}`, // 加入 token
    },
  });
}