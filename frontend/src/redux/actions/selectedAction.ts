export const SET_SELECTED = 'search/SET_SELECTED' as const

export const setSelected = (payload: number) => ({
  type: SET_SELECTED,
  payload: payload
})

