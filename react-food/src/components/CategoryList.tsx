import CategoryItem, { type Category } from "./CategoryItem"

const CategoryList = ({ categories }: { categories: Category[] }) => {
  return (
    <div className="list">
      {categories.map((category: Category) => (
        <CategoryItem key={category.idCategory} {...category} />
      ))}
    </div>
  )
}

export default CategoryList
