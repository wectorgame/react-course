import { useEffect, useState } from "react"
import { getAllCategories } from "../api"
import Preloader from "../components/Preloader"
import CategoryList from "../components/CategoryList"
import Search from "../components/Search"
import type { Category } from "../components/CategoryItem"
import { useNavigate, useLocation } from "react-router"

const Home = () => {
  const [categories, setCategories] = useState([])
  const [filteredCatalog, setFilteredCatalog] = useState([])

  const { search } = useLocation()
  const navigate = useNavigate()

  const handleSearch = (str: string) => {
    setFilteredCatalog(
      categories.filter((category: Category) =>
        category.strCategory.toLowerCase().includes(str.toLowerCase())
      )
    )
    navigate(`?search=${str}`)
  }

  useEffect(() => {
    getAllCategories().then((data) => {
      setCategories(data.categories)
      setFilteredCatalog(
        search
          ? data.categories.filter((category: Category) =>
              category.strCategory
                .toLowerCase()
                .includes(search.split("=")[1].toLowerCase())
            )
          : data.categories
      )
    })
  }, [search])
  return (
    <div className="container content">
      <Search handleSearch={handleSearch} />
      {!categories.length ? (
        <Preloader />
      ) : (
        <CategoryList categories={filteredCatalog} />
      )}
    </div>
  )
}

export default Home
