import React, { useState, useEffect } from 'react';
import Results from './Results';

const divStyles = {
    padding: 30,
}

const Home = () => {
    // const [searchInput, setSearchInput] = useState("");

    // const handleChange = (e) => {
    //     setSearchInput(e.target.value);
    // }

    let pageNum = 1;
    const [repos, setRepos] = useState([]);

    const loadMoreRepos = () => {
        // if(!searchInput) {
        //     alert("No input");
        //     return;
        // }
        
        console.log('page: ', pageNum);
        fetch(`https://api.github.com/users/jserv/repos?page=${pageNum}&per_page=10`,
            {method:"GET",
             headers:{
                 authorization: `Token ${process.env.REACT_APP_GH}`
             }
            })
            .then(res => res.json())
            .then(data => {
                setRepos(oldRepos => [...oldRepos, ...data])
            })
            .catch(e => {
                console.log(e);
            })

        pageNum += 1;
        console.log('page2: ', pageNum); 
    };

    // const handleClick = () => {
    //     if(repos.length === 0){
    //         loadMoreRepos();
    //     }
    // }

    const handleScroll = (e) => {
        if(
            window.innerHeight + e.target.documentElement.scrollTop + 1 >=
            e.target.documentElement.scrollHeight
        ){
            loadMoreRepos();
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    }, []);

    console.log(repos);

    return (
    <>
        {/* <div style={divStyles}>
            <input type="text" placeholder="search" value={searchInput} onChange={handleChange}/>
            <button onClick={handleClick}>Search</button>
        </div> */}
        <h2>Repositories</h2>
        <Results repos={repos}/>
    </>
    );
}

export default Home;