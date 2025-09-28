import type { Movie } from "../entities"

type apiMovie = {
  Title: string
  Year: string
  Poster: string
  imdbID: string
  imdbRating: string
}

const API_KEY = import.meta.env.VITE_API_KEY

const fetchMovies = async (search = "Batman", page: number, type = "all") => {
  const response = await fetch(
    `https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}&page=${page}${
      type === "all" ? "" : `&type=${type}`
    }`
  )

  const data = await response.json()

  return (
    data.Search?.map(
      (movie: apiMovie, index: number): Movie => ({
        title: movie.Title,
        year: movie.Year,
        poster: movie.Poster,
        id: `${movie.imdbID}-${index.toString()}`,
        rating: movie.imdbRating,
      })
    ) ?? []
  )
}

export { fetchMovies }
