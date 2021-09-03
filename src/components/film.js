import { useParams } from "react-router-dom";
import films from './filmList'
function Film() {
  
const {ID}=useParams()

//  console.log(match.params)
//  const ID=match.params.ID
const film =films.find(film=>  film.id ==ID )
  return (
    <div className='film'>
      <img src={film.posterURL} />
    <h5>   {film.description}</h5>
    <iframe src={film.video}
        width="400" height="300">
</iframe>
   
    </div>
  );
}
export default Film;