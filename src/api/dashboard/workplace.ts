import request from '@/utils/request'

export async function queryProjectNotice(): Promise<any> {
  return request('/project/notice')
}