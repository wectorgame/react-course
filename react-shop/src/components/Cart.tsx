import { useContext } from "react"
import { ShopContext } from "../context"

const Cart = ({ quantity = 0 }: { quantity: number }) => {
  const { handleBasketShow } = useContext(ShopContext)

  return (
    <div className="cart blue darken-4 white-text" onClick={handleBasketShow}>
      <i className="material-icons">shopping_cart</i>
      <span className="cart-quantity">{quantity}</span>
    </div>
  )
}

export default Cart
