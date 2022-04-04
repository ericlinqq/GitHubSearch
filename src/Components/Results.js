import React from 'react';

const Results = (props) => {
    const { repos } = props;
    console.log('Repos is: ', repos);

    const listRepos = 
    repos.length !== 0 ? (
        repos.map((item) => (
        <li key={item.id}>
            <a>{item.name}</a>
            <p>stargazers count: {item.stargazers_count}</p>
        </li>
        )) 
    ) : (
        <li>No repos found</li>
    );

    return (
        <ul>{listRepos}</ul>
    );
}

export default Results;