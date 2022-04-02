import './movie.scss'

function Movie(props) {
    const {
        Title: title,
        Year: year,
        imdbID: id,
        Type: type,
        Poster: poster,
    } = props;

     return ( 
    <div id={id} className='card-movie'>
            <div className='card-images'>
            
             {poster === 'N/A' ? (
                 <img
                 className='activator'
                 src={`https://via.placeholder.com/300x400?text=${title}`}
                 />
                 ) : (
                     <img className='activator' src={poster} />
                     )}
            </div>
            <div className='card-content'>
                <h3 className='movie-name'>{title}</h3>
                <span className='movie-tags'>Year : {year}</span>
                <span className='movie-tags'>imdbID: {id}</span>
                <span className='movie-tags'>Type : {type}</span>
            </div>
         </div>   
        
    )
}
export { Movie };
