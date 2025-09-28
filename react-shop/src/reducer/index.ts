import { type State } from "../context"

export function shopReducer(
  state: State,
  { type, payload }: { type: string; payload?: any }
) {
  switch (type) {
    case "SET_GOODS":
      return { ...state, goods: payload }
    case "SET_IS_LOADING":
      return { ...state, isLoading: payload }
    case "ADD_TO_BASKET": {
      const existingItemIndex = state.order.findIndex(
        (item) => item.id === payload.id
      )

      if (existingItemIndex >= 0) {
        const updatedOrder = [...state.order]
        updatedOrder[existingItemIndex] = payload
        return {
          ...state,
          order: updatedOrder,
          alertName: payload.name,
        }
      } else {
        return {
          ...state,
          order: [...state.order, payload],
          alertName: payload.name,
        }
      }
    }
    case "REMOVE_FROM_BASKET":
      return {
        ...state,
        order: state.order.filter((item) => item.id !== payload),
      }
    case "INCREMENT_QUANTITY":
      return {
        ...state,
        order: state.order.map((item) =>
          item.id === payload ? { ...item, quantity: item.quantity + 1 } : item
        ),
      }
    case "DECREMENT_QUANTITY":
      return {
        ...state,
        order: state.order.map((item) =>
          item.id === payload
            ? { ...item, quantity: Math.max(0, item.quantity - 1) }
            : item
        ),
      }
    case "SET_IS_BASKET_SHOW":
      return { ...state, isBasketShow: payload }
    case "CLOSE_ALERT":
      return { ...state, alertName: "" }
    default:
      return state
  }
}
