import { ADD_ITEM } from '../constants'
import Auth from '../../Components/Auth'

const auth = new Auth()

const data = {
  auth,
  images: [],
}

export const itemsActions = (state = data, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        images: [...state.images, action.image],
      }
    default:
      return state
  }
}

export default itemsActions
