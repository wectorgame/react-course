import { useContext, useEffect } from "react"
import { API_KEY, API_URL } from "../config"
import Preloader from "./Preloader"
import GoodsList from "./GoodsList"
import type { Good } from "./GoodItem"
import Cart from "./Cart"
import BasketList from "./BasketList"
import Alert from "./Alert"
import { ShopContext } from "../context"

export interface Order extends Good {
  quantity: number
}

const Content = () => {
  const {
    isLoading,
    goods,
    order,
    isBasketShow,
    alertName,
    setGoods,
    setLoading,
  } = useContext(ShopContext)

  console.log(order)
  console.log(goods)
  useEffect(() => {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        const convertedData = data.shop.map((item: any, index: any): Good => {
          const apiGood = item.granted[0]

          return {
            id: `${apiGood?.id} ${index}`,
            name: apiGood?.name || "Unknown",
            price: item.price.finalPrice,
            description: apiGood?.description,
            full_background: apiGood?.images.full_background,
          }
        })

        setGoods(convertedData)
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
  }, [])

  return (
    <main className="container content">
      {isBasketShow && <BasketList order={order} />}
      <Cart quantity={order.length} />

      {isLoading ? <Preloader /> : <GoodsList goods={goods} />}
      {alertName && <Alert name={alertName} />}
    </main>
  )
}

export default Content
