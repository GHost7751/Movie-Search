import React from 'react';
import { useState } from 'react';
import './search.scss'



const Search = (props) =>  {
    const {
        searchMovies = Function.prototype
    } = props;
    const [search,setSearch] = useState('');
    

   const  handleKey = (event) => {
        if (event.key === 'Enter') {
            searchMovies(search);
        }
    };


    return (
        <div className="form">
            <input
                        className='input'
                        placeholder='search'
                        type='search'
                        value={search}
                        onChange={(e) =>
                            setSearch(e.target.value)}
                        onKeyDown={handleKey}
                    />
            <button
                         className='button'
                         name='type'
                         type='button'
                         onClick={() =>
                            searchMovies(search)
                        }
                    >
                        <i class="large material-icons">search</i>
                    </button>
         </div>
   
    )
                    }

export { Search };

