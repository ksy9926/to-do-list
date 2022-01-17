import { setSelected, SET_SELECTED } from "redux/actions/selectedAction"

type SelectedAction = ReturnType<typeof setSelected>

type SelectedState = {
  id: number | undefined
}

const initialState: SelectedState = {
  id: undefined
}

export default function selected(state: SelectedState = initialState, action: SelectedAction): SelectedState {
  switch(action.type) {
    case SET_SELECTED:
      return { id: action.payload };
    default:
      return state
  }
}