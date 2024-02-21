

// eslint-disable-next-line react/prop-types
function SearchForm ({search, setSearch, getData}){
    return(
        <div className="search-container">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Ingresa titulo"
        />
        <button onClick={getData}>Buscar</button>
      </div>

    );

} export default SearchForm;