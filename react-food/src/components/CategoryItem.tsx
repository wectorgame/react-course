import { Link } from "react-router"

export interface Category {
  strCategoryThumb: string
  strCategory: string
  strCategoryDescription: string
  idCategory: string
}

const CategoryItem = ({
  strCategoryThumb,
  strCategory,
  strCategoryDescription,
}: Category) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={strCategoryThumb} alt={strCategory} />
      </div>
      <div className="card-content">
        <span className="card-title">{strCategory}</span>
        <p>{strCategoryDescription.slice(0, 60)}...</p>
      </div>
      <div className="card-action">
        <Link to={`/category/${strCategory}`}>Watch Category</Link>
      </div>
    </div>
  )
}

export default CategoryItem
