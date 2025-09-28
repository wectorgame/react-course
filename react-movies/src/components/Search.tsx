const Search = ({
  search,
  setSearch,
  handleSubmit,
}: {
  search: string
  setSearch: (search: string) => void
  handleSubmit: (type?: string) => void
  setType: (type: string) => void
}) => {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  const handleFormSubmit = () => {
    handleSubmit()
  }

  const handleType = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleSubmit(e.target.value)
  }

  return (
    <div className="row">
      <form onSubmit={handleFormSubmit} className="col s12">
        <div className="input-field">
          <input
            id="search"
            type="search"
            value={search}
            className="validate"
            onChange={handleSearch}
          />
        </div>
        <button className="btn">Search</button>
      </form>

      <label>
        <input name="group1" type="radio" value="all" onChange={handleType} />
        <span>All</span>
      </label>

      <label>
        <input name="group1" type="radio" value="movie" onChange={handleType} />
        <span>Movies Only</span>
      </label>

      <label>
        <input
          name="group1"
          type="radio"
          value="series"
          onChange={handleType}
        />
        <span>Series Only</span>
      </label>
    </div>
  )
}

export default Search
