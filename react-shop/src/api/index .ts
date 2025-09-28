import { API_KEY, API_URL } from "../config"

const getGoods = async () => {
  const response = await fetch(API_URL, {
    headers: {
      Authorization: API_KEY,
    },
  })

  const data = await response.json()

  return data.featured
}

export { getGoods }
