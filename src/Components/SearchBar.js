import React, { useState } from 'react';
import Results from './Results';

const divStyles = {
    padding: 30,
}

const SearchBar = () => {
    const [searchInput, setSearchInput] = useState("");

    const handleChange = (e) => {
        setSearchInput(e.target.value);
    }
    const [pageNum, setPageNum] = useState(1);

    const [repos, setRepos] = useState([]);
    const url = `https://api.github.com/users/${searchInput}/repos?page=${pageNum}&per_page=10`;

    const handleClick = async () => {
        if(!searchInput) {
            alert("No input");
            return;
        }
        
        console.log(searchInput);
        await fetch(url ,{method:"GET"})
            .then(res => res.json())
            .then(data => setRepos(data))
            .catch(e => {
                console.log(e);
            })

    }

    console.log(repos);

    return (
    <>
        <div style={divStyles}>
            <input type="text" placeholder="search" value={searchInput} onChange={handleChange}/>
            <button onClick={handleClick}>Search</button>
        </div>
        <h2>Repositories</h2>
        <Results repos={repos}/>
    </>
    );
}

export default SearchBar;