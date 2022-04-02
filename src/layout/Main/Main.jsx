import React from 'react';
import { Movies } from '../../components/Movies/Movies';
import {Spinner} from '../../components/spinner/Spinner';
import { Search } from '../../components/Search/Search';
import { useState, useEffect  } from 'react';
import './main.scss'
import { Pagination } from '@mui/material';





function Main() {
    
    const [movie , setMovie] = useState([]);
    const [loading , setLoading] = useState(true);
    const [search,setSearch] = useState('Speed');
    const [page, setPage] = useState(1);
    const [pageQty, setPageQty] = useState(10);
    const [type,setType] = useState('movie')
    


    const searchMovies = (str,type) => {
        setLoading(true);
        fetch(
            `http://www.omdbapi.com/?i=tt3896198&apikey=d4013126&s=${str}&type=${type}&page=1`
            )
            .then((response) => response.json())
            .then((data) =>{
                setMovie(data.Search);
                setPageQty(data.totalResults);
                setLoading(false);
            })
            
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });

            setSearch(str)
            setPage(1);
            setType('movie')
            
        }


    useEffect(() => {
        fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=d4013126&s=${search}&type=${type}&page=${page}`)
        .then((response) => response.json())
        .then((data) => 
            {setMovie(data.Search);
            setPageQty(data.totalResults);
            setLoading(false);
        })
        .catch((err) => {
                         console.error(err);
                         setLoading(false);
                     });
    }, [search,page,type]);
    
    return (
        <main className='content'>    
            <Search searchMovies={searchMovies} />
            <h3 className='pagination'>You searched for: {search}, {pageQty} results found , now page {page}</h3>

            {loading ? <Spinner /> : <Movies movies={movie} />}
        <Pagination  className='pagination'
        count={10}
            page={page}
            onChange={(_,num) => setPage(num)}
        />
        </main>
    );
}


export { Main };
