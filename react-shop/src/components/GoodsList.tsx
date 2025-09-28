import type { Good } from "./GoodItem"
import GoodItem from "./GoodItem"

const GoodsList = ({ goods }: { goods: Good[] }) => {
  if (goods.length === 0) {
    return <h3>No goods</h3>
  }
  return (
    <div className="goods">
      {goods.map((good) => (
        <GoodItem key={good.id} {...good} />
      ))}
    </div>
  )
}

export default GoodsList
