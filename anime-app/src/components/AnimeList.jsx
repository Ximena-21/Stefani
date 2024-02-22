// import'./animeList.js'
// eslint-disable-next-line react/prop-types
function AnimeList ({ animeData }){

    return(
        <>
 
            {animeData.map((anime) => (
            <div key={anime.mal_id} className='card'>
            <li  className="anime-item">
                {/* Mostrar la imagen si está presente */}
                {anime.images && anime.images.jpg && (
              <img src={anime.images.jpg.image_url} alt={anime.title} className='img'/>
            )}
            <p className='title'>{anime.title}</p>
            {/* <p>{anime.scoreMessage}</p> */}
          </li>
          <p className='message'>{anime.scoreMessage}</p> 
            </div>
            
        ))}
        </>
    );

} export default AnimeList;