import { useEffect, useState } from "react"
import type { Movie } from "../entities"
import { fetchMovies } from "../api"
import MovieCard from "../components/MovieCard"
import Preloader from "../components/Preloader"
import Search from "../components/Search"

const Content = () => {
  const [movies, setMovies] = useState<Movie[]>([])
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState("")
  const [type, setType] = useState<string>("all")

  const getMovies = (search?: string, type?: string) => {
    setLoading(true)
    fetchMovies(search, 1, type).then((movies) => {
      setLoading(false)
      setMovies(movies)
    })
  }

  useEffect(() => {
    getMovies()
  }, [])

  const handleSubmit = (typeValue?: string) => {
    getMovies(search || "Batman", typeValue ?? type)
  }

  return (
    <div className="content container">
      <Search
        search={search}
        setSearch={setSearch}
        handleSubmit={handleSubmit}
        setType={setType}
      />

      {loading && <Preloader />}
      {movies.length === 0 && search.length !== 0 && <h3>No movies found</h3>}
      <div className="row">
        {movies.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>
    </div>
  )
}

export default Content
