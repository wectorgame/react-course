import { API_URL } from "./config"

const getMealById = async (id: string) => {
  const response = await fetch(`${API_URL}/lookup.php?i=${id}`)
  return response.json()
}

const getAllCategories = async () => {
  const response = await fetch(`${API_URL}/categories.php`)
  return response.json()
}

const getFilteredCategory = async (category: string) => {
  const response = await fetch(`${API_URL}/filter.php?c=${category}`)

  return response.json()
}

export { getMealById, getAllCategories, getFilteredCategory }
