import { useReducer } from "react"
import Content from "./components/Content"
import Footer from "./components/Footer"
import Header from "./components/Header"
import { initialState, ShopContext } from "./context"
import { shopReducer } from "./reducer"
import type { Order } from "./components/Content"
import type { Good } from "./components/GoodItem"

const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [value, dispatch] = useReducer(shopReducer, initialState)

  value.closeAlert = () => {
    dispatch({ type: "CLOSE_ALERT" })
  }

  value.removeFromBasket = (id: string) => {
    dispatch({ type: "REMOVE_FROM_BASKET", payload: id })
  }

  value.addToBasket = (orderItem: Order) => {
    dispatch({ type: "ADD_TO_BASKET", payload: orderItem })
  }

  value.handleBasketShow = () => {
    dispatch({ type: "SET_IS_BASKET_SHOW", payload: !value.isBasketShow })
  }

  value.incQuantity = (id: string) => {
    dispatch({ type: "INCREMENT_QUANTITY", payload: id })
  }

  value.decQuantity = (id: string) => {
    dispatch({ type: "DECREMENT_QUANTITY", payload: id })
  }

  value.setGoods = (goods: Good[]) => {
    dispatch({ type: "SET_GOODS", payload: goods })
  }
  value.setLoading = (isLoading: boolean) => {
    dispatch({ type: "SET_IS_LOADING", payload: isLoading })
  }

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
}

function App() {
  return (
    <>
      <Header />
      <ContextProvider>
        <Content />
      </ContextProvider>
      <Footer />
    </>
  )
}

export default App
