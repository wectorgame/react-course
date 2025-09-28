import Meal, { type Meal as MealType } from "./Meal"

const MealsList = ({ meals }: { meals: MealType[] }) => {
  return (
    <div className="list">
      {meals.map((meal: MealType) => (
        <Meal key={meal.idMeal} {...meal} />
      ))}
    </div>
  )
}

export default MealsList
