/**
 * 删除 color 值前的#
 * @returns
 */
export function removeColorPrefix(color: string) {
  return color ? color.substring(1) : ''
}

/**
 * 添加 color 前的#
 * @returns
 */
export function addColorPrefix(color: string) {
  return color ? '#'.concat(color) : ''
}
