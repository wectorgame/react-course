import { createContext } from "react"
import type { Good } from "../components/GoodItem"
import type { Order } from "../components/Content"

export interface State {
  isLoading: boolean
  goods: Good[]
  order: Order[]
  isBasketShow: boolean
  alertName: string
  setGoods: (goods: Good[]) => void
  setLoading: (isLoading: boolean) => void
  closeAlert: () => void
  removeFromBasket: (id: string) => void
  addToBasket: (orderItem: Order) => void
  handleBasketShow: () => void
  incQuantity: (id: string) => void
  decQuantity: (id: string) => void
}
export const initialState: State = {
  isLoading: true,
  goods: [],
  order: [],
  isBasketShow: false,
  alertName: "",
  setGoods: () => {},
  setLoading: () => {},
  closeAlert: () => {},
  removeFromBasket: () => {},
  addToBasket: () => {},
  handleBasketShow: () => {},
  incQuantity: () => {},
  decQuantity: () => {},
}

export const ShopContext = createContext<State>(initialState)
