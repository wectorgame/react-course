import { useState } from "react"

const Search = ({ handleSearch }: { handleSearch: (search: string) => void }) => {
  const [search, setSearch] = useState("")

  const handleSubmit = () => {
    handleSearch(search)
  }

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit()
    }
  }

  return (
    <div className="search">
      <input
        type="search"
        placeholder="Search"
        onKeyUp={handleKeyUp}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        className="btn"
        style={{
          position: "absolute",
          right: "0",
          top: "0",
        }}
        onClick={handleSubmit}
      >
        Search
      </button>
    </div>
  )
}

export default Search
