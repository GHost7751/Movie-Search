import React from 'react';
import { Movies } from '../../components/Movies/Movies';
import {Spinner} from '../../components/spinner/Spinner'
import { useState, useEffect  } from 'react';
import { Search } from '../../components/Search/Search'




function Main() {
    
    const [movie , setMovie] = useState([]);
    const [loading , setLoading] = useState(true);

    const searchMovies = (str) => {
        setLoading(true);
        fetch(
            `http://www.omdbapi.com/?i=tt3896198&apikey=d4013126&s=${str}`
            )
            .then((response) => response.json())
            .then((data) =>{
                setMovie(data.Search);
                setLoading(false)
            })
            
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
            
        }
        
        useEffect(() => {
            fetch('http://www.omdbapi.com/?i=tt3896198&apikey=d4013126&s=speed').then((response) => response.json())
                .then((data) => {setMovie(data.Search);
                    setLoading(false)
                })
        }, []);
        
        return (
        <main className='content'>
            <Search searchMovies={searchMovies} />
            {loading ? <Spinner /> : <Movies movies={movie} />}
        </main>
    );
}


export { Main };
