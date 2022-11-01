/** COLOR_SPACE */
declare namespace COLOR_SPACE {
  export type Color = {
    id: string
    story: string
    value: string
    stars: number
    CreatedAt: DateTime
    UpdatedAt: DateTime
  }

  export type NewColor = Omit<Color, 'id' | 'stars' | 'CreatedAt' | 'UpdatedAt'>

  export type Pager = {
    page: number
    pageSize: number
  }
}
