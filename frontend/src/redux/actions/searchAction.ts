export const SET_SEARCHVALUE = 'search/SET_SEARCHVALUE' as const

export const setSearchValue = (payload: string) => ({
  type: SET_SEARCHVALUE,
  payload: payload
})

