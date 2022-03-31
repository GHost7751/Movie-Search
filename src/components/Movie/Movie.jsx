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
                <img src={poster} alt="Not" />
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
