import { useEffect, useContext } from "react"
import { ShopContext } from "../context"

const Alert = ({ name }: { name: string }) => {
  const { closeAlert } = useContext(ShopContext)
  
  useEffect(() => {
    const timerId = setTimeout(closeAlert!, 3000)
    return () => clearTimeout(timerId)
  }, [name, closeAlert])

  return (
    <div id="toast-container">
      <div className="toast">{name} добавлен в корзину</div>
    </div>
  )
}

export default Alert
