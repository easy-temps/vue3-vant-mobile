import { round } from 'lodash-es'

// 设计稿的宽度
const width = 375

/**
 * vw 转换
 * @param {number} n
 */
export default function vw(n: number) {
  if (n === 0)
    return n
  const vwN = round(n * 100 / width, 3)
  return `${vwN}vw`
}
