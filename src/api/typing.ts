export interface ResponseBody<T = any> {
  message?: string
  code?: number
  data?: T
  success: boolean
}

/** 统一返回结构体 */

export interface PageResult<T = any> {
  data: T[]
  current?: number
  pageSize?: number
  total?: number
  success: boolean
}
