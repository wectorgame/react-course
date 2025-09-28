import { useParams, useNavigate } from "react-router"
import { getFilteredCategory } from "../api"
import { useState, useEffect } from "react"
import Preloader from "../components/Preloader"
import MealsList from "../components/MealsList"

const Category = () => {
  const { category } = useParams()
  const [meals, setMeals] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    getFilteredCategory(category || "").then((data) => {
      setMeals(data.meals)
    })
  }, [category])

  return (
    <div className="container content">
      <button className="btn" onClick={() => navigate(-1)}>
        Go back
      </button>
      {!meals.length ? <Preloader /> : <MealsList meals={meals} />}
    </div>
  )
}

export default Category
