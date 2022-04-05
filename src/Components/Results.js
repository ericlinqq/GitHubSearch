import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import RepoDetails from './RepoDetails';

const Results = (props) => {
    const { repos } = props;
    console.log('Repos is: ', repos);

    const listRepos = 
    repos.length !== 0 ? (
        repos.map((item) => (
        <li key={item.id}>
            <Link to={{pathname: `/users/jserv/repos/${item.name}`, state: {repoName: 123}}}>
                {item.name}
            </Link>
            <p>stargazers count: {item.stargazers_count}★</p>
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