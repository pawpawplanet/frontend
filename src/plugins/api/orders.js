import service from '@/plugins/axios.js';

const root = '/api/orders';

export function patchOrderStatus(id, data) {
  return service({
    url: `${root}/${id}`,
    method: 'patch',
    data
  });
}

export function getOrdersAcceptedOnSameDate(id) {
  return service({
    url: `${root}/${id}/same-date/accepted`,
    method: 'get'
  });
}

export function postPayment(id) {
  return service({
    url: `${root}/${id}/payment`,
    method: 'post'
  });
}