import { useContext } from "react"
import { ShopContext } from "../context"

export interface Good {
  id: string
  name: string
  price: number
  full_background: string
  description: string
}

const GoodItem = (good: Good) => {
  const { addToBasket, order } = useContext(ShopContext)

  const handleAddToBasket = () => {
    const existingItem = order.find((item) => item.id === good.id)

    if (existingItem) {
      addToBasket({ ...good, quantity: existingItem.quantity + 1 })
    } else {
      addToBasket({ ...good, quantity: 1 })
    }
  }

  return (
    <div className="card">
      <div className="card-image">
        <img src={good.full_background} alt={good.name} />
        <span className="card-title">{good.name}</span>
      </div>
      <div className="card-content">
        <p>{good.description}</p>
      </div>
      <div className="card-action">
        <button className="btn" onClick={handleAddToBasket}>
          Купить
        </button>
        <span className="right" style={{ fontSize: "1.8rem" }}>
          {good.price}
        </span>
      </div>
    </div>
  )
}

export default GoodItem
