import { Link } from "react-router"

export interface Meal {
  idMeal: string
  strMeal: string
  strMealThumb: string
}

const Meal = ({ idMeal, strMeal, strMealThumb }: Meal) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={strMealThumb} alt={strMeal} />
      </div>
      <div className="card-content">
        <span className="card-title">{strMeal}</span>
      </div>
      <div className="card-action">
        <Link to={`/meal/${idMeal}`}>Watch recipe</Link>
      </div>
    </div>
  )
}

export default Meal
