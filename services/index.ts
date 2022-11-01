import request from '../utils/request'

/**
 * 颜色列表
 * @returns
 */
export async function colorList(
  pager: COLOR_SPACE.Pager,
): Promise<COLOR_SPACE.Color[]> {
  console.log('params', pager)
  const res: any = await request({
    url: 'color/list',
    params: pager,
  })
  console.log('res', res)
  return res
}

/**
 * 创建颜色
 * @param color
 */
export async function createColor(color: Promise<COLOR_SPACE.NewColor>) {
  return request({
    url: 'color',
    method: 'POST',
    data: color,
  })
}

/**
 * 删除颜色
 * @param id
 * @returns
 */
export async function deleteColor(id: string): Promise<any> {
  return request({
    url: 'color/:id',
    method: 'DELETE',
    params: {
      id,
    },
  })
}

/**
 * 点赞颜色
 * @param id
 * @returns
 */
export async function starColor(id: string) {
  return request({
    url: `star/${id}`,
    method: 'POST',
  })
}

/**
 * 取消点赞
 * @param id
 * @returns
 */
export async function cancelColor(id: string) {
  return request({
    url: `star/${id}`,
    method: 'DELETE',
  })
}
