import { ADD_ITEM } from '../constants'

export function addNewItem(image) {
  return { type: ADD_ITEM, image }
}
