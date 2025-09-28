import { useContext } from "react"
import type { Order } from "./Content"
import { ShopContext } from "../context"

const BasketItem = ({ orderItem }: { orderItem: Order }) => {
  const { removeFromBasket, incQuantity, decQuantity } = useContext(ShopContext)
  const { id, name, price, quantity } = orderItem
  return (
    <li className="collection-item">
      {name}{" "}
      <i
        className="material-icons basket-quantity"
        onClick={() => decQuantity(id)}
      >
        remove
      </i>{" "}
      x{quantity}{" "}
      <i
        className="material-icons basket-quantity"
        onClick={() => incQuantity(id)}
      >
        add
      </i>{" "}
      = {price * quantity} руб.
      <span className="secondary-content" onClick={() => removeFromBasket(id)}>
        <i className="material-icons basket-delete">close</i>
      </span>
    </li>
  )
}

export default BasketItem
