import request from '@/utils/request';

export interface ControllParams {
  state: boolean;
}

export async function controllModel(params: ControllParams) {
  return request('/control/analysis/changeMode', {
    method: 'POST',
    data: params,
  });
}

export async function getData() {
  return request('/control/model/data');
}
