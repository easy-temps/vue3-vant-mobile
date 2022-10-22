import type { UnwrapRef } from 'vue'
import { isReactive, isRef, reactive, ref, unref, watch } from 'vue'
import { isEqual } from 'lodash-es'
import type { MaybeRef } from '@/typing'

export interface PageInfo {
  current: number
  pageSize: number
  total: number
  [key: string]: any
}

export interface ReponseData<T> {
  data: T[]
  success?: boolean
  total?: number
  [key: string]: any
}

export type RequestParams =
  | {
    pageSize: number
    current: number
    [key: string]: any
  }
  | undefined

export interface UseFetchDataAction<T extends ReponseData<any>> {
  stripe: (record: any, index: number) => string | undefined
  cancel: () => void
  reload: () => Promise<void>
  resetPageIndex: () => void
  reset: () => void
  context: Context<T>
  setPageInfo: (pageInfo: Partial<PageInfo>) => void
}

export interface Context<T extends ReponseData<any>> {
  current: number
  pageSize: number
  dataSource: T['data']
  loading: boolean
  total: number
  requestParams?: MaybeRef<{
    [key: string]: any
  }>
  [key: string]: any
}

export const defaultContext: Context<any> = {
  stripe: false,
  loading: false,
  current: 1,
  pageSize: 20,
  total: 0,
  dataSource: [],
}

// 如果请求数据中，没有分页，仅单列表数据，可以使用该方法进行包装，免去重复写请求方法
export const wrap = (req: () => Promise<any[]>): (() => Promise<ReponseData<any>>) => {
  return () =>
    req().then((res) => {
      const data = res
      return {
        data,
        total: data.length,
        success: data !== null && data !== undefined,
      }
    })
}

const filterNoValidValue = (obj: Record<string, any> = {}) => {
  const newObj = {}
  Object.keys(obj).forEach((k) => {
    if (obj[k] !== undefined && obj[k] !== '' && obj[k] !== null)
      newObj[k] = obj[k]
  })

  return newObj
}

export const useFetchData = <T extends ReponseData<any>>(
  getData: (params?: RequestParams) => Promise<T>,
  context: MaybeRef<{
    stripe?: boolean
    current?: number
    pageSize?: number
    dataSource?: T['data']
    loading?: boolean
    requestParams?: MaybeRef<{
      [key: string]: any
    }>
    [key: string]: any
  }> = reactive({ ...defaultContext }),
  options?: {
    current?: number
    pageSize?: number
    onLoad?: (dataSource: T['data']) => void
    onRequestError?: (e: Error) => void
    pagination?: boolean
  },
): UseFetchDataAction<T> => {
  const state = reactive({ ...defaultContext } as Context<T>)
  const mergeContext = isReactive(context) || isRef(context) ? context : ref(context)
  watch(
    mergeContext,
    () => {
      Object.assign(state, unref(context))
    },
    { immediate: true },
  )

  const fetchList = async () => {
    // 请求中禁止重复请求
    if (state.loading)
      return

    state.loading = true
    const { pageSize = 20, current = 1 } = state
    try {
      const params: RequestParams
        = options?.pagination !== false
          ? {
              current,
              pageSize,
              ...filterNoValidValue(unref(mergeContext).requestParams),
            }
          : undefined
      const { data, success, total: dataTotal = 0 } = await getData(params)
      state.loading = false
      if (success !== false) {
        state.dataSource = data as UnwrapRef<T['data']>
        state.total = dataTotal
      }
    }
    catch (e: any) {
      state.loading = false
      // 如果没有传递这个方法的话，需要把错误抛出去，以免吞掉错误
      if (options?.onRequestError === undefined)
        throw new Error(e)

      else
        options.onRequestError(e)
    }
  }

  const cancel = () => {}

  const reset = () => {}

  const reload = (): Promise<void> => {
    return new Promise((resolve) => {
      resolve(fetchList())
    })
  }

  const setPageInfo = (pageInfo: Partial<PageInfo>) => {
    console.warn('setPageInfo 废弃，请直接使用响应式 context')
    pageInfo.current && (state.current = pageInfo.current)
    pageInfo.pageSize && (state.pageSize = pageInfo.pageSize)
  }

  const resetPageIndex = (): void => {
    console.warn('resetPageIndex 废弃，请直接使用响应式 context')
    // state.current = 1;
  }
  watch(
    [() => state.current, () => state.pageSize, () => ({ ...state.requestParams })],
    (nextValue, preValue) => {
      if (!isEqual(nextValue, preValue)) {
        fetchList().catch((e) => {
          throw new Error(e)
        })
      }
    },
    { immediate: true, deep: true },
  )

  const stripe = (_: any, index: number) => index % 2 === 1 && state.stripe && 'ant-pro-table-row-striped'

  return {
    stripe,
    cancel,
    reset,
    reload,
    resetPageIndex,
    setPageInfo: (info) => {
      setPageInfo({
        current: state.current,
        pageSize: state.pageSize,
        ...info,
      })
    },
    context: state,
  }
}
