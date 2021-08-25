import films from './filmList'
import Movie from './Movie';
function Movies() {

    
    return (
      <div className="Movies">
        
     {films.map(el=>   <Movie  el={el}  />  )}
      </div>
    );
  }
  
  export default Movies;