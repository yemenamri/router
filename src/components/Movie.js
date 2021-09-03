import {Link }from 'react-router-dom'
function Movie({ el }) {

  return (
    <div className='Movie'>
      <img
        src={el.posterURL}
        alt='avatar'
      />

     <Link  to= {`/Movies/${el.id}`} >
     <h3> {el.title} </h3>
     </Link>
      <h5> {el.rating}</h5>
      
    </div>
  );
}

export default Movie;