import { useParams, useNavigate,  } from "react-router"

const Movie = () => {
  const { title } = useParams()
  const navigate = useNavigate()

  return (
    <div className="container content">
      <h1>Movie {title}</h1>
      <button className="btn" onClick={() => navigate(-1)}>
        Go Back
      </button>
    </div>
  )
}

export default Movie
