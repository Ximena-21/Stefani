import React from 'react';
import styled from "styled-components";

const SearchContainer = styled.div`
    width: 80%;
    min-width: 200px;
    max-width: 360px;
    background: aliceblue;
    padding: 10px 8px;
    border-radius: 20px;
    border: #cd70c6 1px solid;
    box-shadow: 2px 2px 6px #7a4174;
    display: flex;
    justify-content: space-between;

    & .search_input{
        border: none;
        background: none;
        outline: none;
        color: #b320b4;
    }

    & .search_btn {
        border: none;
        background: none;
        padding: 0;
        cursor: pointer;
        color: coral;
    }
`
// eslint-disable-next-line react/prop-types
function SearchForm ({search, setSearch, getData}){
    return(
      //className="searchForm"
        <SearchContainer >
        <input
          className="search_input"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Ingresa titulo"
        />
        <button className="search_btn"onClick={getData}>Buscar</button>
      </SearchContainer>

    );

} export default SearchForm;