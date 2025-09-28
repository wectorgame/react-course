import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router"
import { getMealById } from "../api"
import Preloader from "../components/Preloader"

export interface Recipe {
  strMeal: string
  strMealThumb: string
  strInstructions: string
  strCategory: string
  strArea?: string
  strYoutube?: string
  [key: string]: string | undefined
}

const Recipe = () => {
  const { id } = useParams()

  const [recipe, setRecipe] = useState<Recipe | null>(null)

  const navigate = useNavigate()

  useEffect(() => {
    getMealById(id || "").then((data) => {
      setRecipe(data.meals[0])
    })
  }, [id])

  console.log(recipe)

  return (
    <div className="container content">
      <button className="btn" onClick={() => navigate(-1)}>
        Go back
      </button>
      {!recipe ? (
        <Preloader />
      ) : (
        <div className="recipe">
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
          <h1>{recipe.strMeal}</h1>
          <h6>Category: {recipe.strCategory}</h6>
          {recipe.strArea && <h6>Area: {recipe.strArea}</h6>}
          <p>{recipe.strInstructions}</p>
          <table className="centered">
            <thead>
              <tr>
                <th>Ingredients</th>
                <th>Measures</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(recipe).map((key) => {
                if (key.includes("Ingredient") && recipe[key]) {
                  return (
                    <tr key={key}>
                      <td>{recipe[key]}</td>
                      <td>{recipe[key.replace("Ingredient", "Measure")]}</td>
                    </tr>
                  )
                }
              })}
            </tbody>
          </table>
          {recipe.strYoutube && (
            <div className="row">
              <h5>Video Recipe</h5>
              <iframe
                title={id}
                src={recipe.strYoutube.replace("watch?v=", "embed/")}
                allowFullScreen
              />
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default Recipe
