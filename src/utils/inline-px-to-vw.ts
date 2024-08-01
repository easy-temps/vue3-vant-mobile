/**
 * 支持行内样式 px 转 vw
 * 本文件代码来自于 scale-view 开源项目
 * 源代码链接：https://github.com/wswmsword/scale-view
 * 非常感谢作者 @wswmsword 的支持
 */

import { round } from 'lodash-es'

// 理想宽度，设计稿的宽度
const idealWidth = 375

// 表示伸缩视图的最大宽度
const maxWidth = 600

/**
 * 限制大小的 vw 转换
 * @param {number} n
 */
export default function vw(n: number) {
  if (n === 0)
    return n

  const vwN = round(n * 100 / idealWidth, 3)
  const maxN = round(n * maxWidth / idealWidth, 3)
  const cssF = n > 0 ? 'min' : 'max'
  return `${cssF}(${vwN}vw, ${maxN}px)`
}
