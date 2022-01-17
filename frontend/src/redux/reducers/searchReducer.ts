import { setSearchValue, SET_SEARCHVALUE } from "redux/actions/searchAction"

type SearchAction = ReturnType<typeof setSearchValue>

type SearchState = {
  value: string
}

const initialState: SearchState = {
  value: ''
}

export default function search(state: SearchState = initialState, action: SearchAction): SearchState {
  switch(action.type) {
    case SET_SEARCHVALUE:
      return { value: action.payload };
    default:
      return state
  }
}