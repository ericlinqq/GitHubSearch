import React, { useState } from 'react';
import Results from './Results';

const divStyles = {
    padding: 30,
}

const SearchBar = () => {
    const [searchInput, setSearchInput] = useState(null);

    const handleChange = (e) => {
        setSearchInput(e.target.value);
    }

    const [repos, setRepos] = useState([]);

    const handleClick = async () => {
        console.log(searchInput);
        await fetch(`https://api.github.com/users/${searchInput}/repos` ,{method:"GET"})
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