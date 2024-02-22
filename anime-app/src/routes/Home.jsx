import { useState, useEffect } from 'react';
import axios from 'axios';
import AnimeList from '/src/components/AnimeList';
import SearchForm from '/src/components/SearchForm.jsx';
import './Home.js';
import { MyCarousel } from '/src/components/Carousel';
import { HomeContainer, SearchContainer } from '/src/routes/Home.js';
import { Card } from '/src/components/Card/index.jsx';




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

  // Obtener imágenes predeterminadas al cargar la página
  useEffect(() => {
    const getDefaultImages = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/anime/default-images');
        setAnimeData(response.data);
        console.log("default images", response.data);
      } catch (error) {
        console.error('Error al obtener imágenes predeterminadas:', error);
      }
    };
    getDefaultImages();
  }, []);




  return (
    <HomeContainer className="app-container">
        <SearchContainer className='search'>
            <h1>Buscador de Anime</h1>
            <SearchForm search={search} setSearch={setSearch} getData={getData}/>
        </SearchContainer>
        {/* <div className='CardList'>
            <ul className="anime-list">
              {
                animeData.length && 
                animeData.map(anime => <Card key={anime.mal_id} item={anime}/>)
              }
            <AnimeList animeData={animeData}/>
            </ul>
        </div> */}
        <MyCarousel>
          {
            animeData.length &&
            animeData.map(anime => <Card key={anime.mal_id} item={anime}/>)
          }
        </MyCarousel>
        {/* <MyCarousel/> */}
    </HomeContainer>
  );
}

export default Home;