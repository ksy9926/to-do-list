import { toggleMenu, TOGGLE_MENU } from "redux/actions/menuAction"

type MenuAction = ReturnType<typeof toggleMenu>

type MenuState = {
  open: Boolean
}

const initialState: MenuState = {
  open: true
}

export default function menu(state: MenuState = initialState, action: MenuAction): MenuState {
  switch(action.type) {
    case TOGGLE_MENU:
      return { open: !state.open };
    default:
      return state
  }
}