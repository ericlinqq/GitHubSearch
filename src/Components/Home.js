import React, { useState, useEffect } from 'react';
import Results from './Results';

// const divStyles = {
//     padding: 30,
// }

const Home = () => {
    // const [searchInput, setSearchInput] = useState("");

    // const handleChange = (e) => {
    //     setSearchInput(e.target.value);
    // }

    let page = 1;
    const [repos, setRepos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const loadMoreRepos = () => {
        // if(!searchInput) {
        //     alert("No input");
        //     return;
        // }
        setIsLoading(true);
        console.log('page: ', page);
        fetch(`https://api.github.com/users/jserv/repos?page=${page}&per_page=10`,
            {
                method:"GET",
                headers:{
                    authorization: `Token ${process.env.REACT_APP_GH}`
                }
            })
            .then(res => res.json())
            .then(data => {
                setIsLoading(false);
                setRepos(oldRepos => [...oldRepos, ...data]);
            })
            .catch(e => {
                console.log(e);
            });

        page += 1;
        console.log('page2: ', page); 
    };

    // const handleClick = () => {
    //     if(repos.length === 0){
    //         loadMoreRepos();
    //     }
    // }

    const handleScroll = (e) => {
        if(
            (window.innerHeight + e.target.documentElement.scrollTop + 1 >=
            e.target.documentElement.scrollHeight) && !isLoading 
        ){
            loadMoreRepos();
        }
    }

    useEffect(() => {
        loadMoreRepos();
        window.addEventListener('scroll', handleScroll);
        // return window.removeEventListener('scroll', handleScroll)
    }, []);

    console.log(repos);

    return (
    <>
        {/* <div style={divStyles}>
            <input type="text" placeholder="search" value={searchInput} onChange={handleChange}/>
            <button onClick={handleClick}>Search</button>
        </div> */}
        <header>GitHub Username: jserv</header>
        <h2>Repositories</h2>
        <p>{isLoading ? "Loading..." : ""}</p>
        <Results repos={repos}/>
    </>
    );
}

export default Home;