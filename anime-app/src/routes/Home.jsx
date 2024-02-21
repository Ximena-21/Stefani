import { useState } from 'react';
import axios from 'axios';
import AnimeList from '/src/components/AnimeList';
import SearchForm from '/src/components/SearchForm';
import './Home.css';


function Home() {
  const [search, setSearch] = useState('');
  const [animeData, setAnimeData] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/api/anime?q=${search}`);
      setAnimeData(response.data);

      console.log("data", response.data);
    } catch (error) {
      console.error('Error en la búsqueda:', error);
    }
  };

  return (
    <div className="app-container">
        <div className='search'>
            <h1>Buscador de Anime</h1>
            <SearchForm search={search} setSearch={setSearch} getData={getData}/>
        </div>
        <div className='CardList'>
            <ul className="anime-list">
            <AnimeList animeData={animeData}/>
            </ul>
        </div>
    </div>
  );
}

export default Home;