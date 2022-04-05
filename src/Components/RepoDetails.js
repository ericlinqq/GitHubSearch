import React, { useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';

const RepoDetails = (props) => {
    const [details, setDetails] = useState([]);
    const [detailsLoading, setDetailsLoading] = useState(false);

    const { repoName } = useParams();
    
    const getDetails = () => {
        setDetailsLoading(true);

        fetch(`https://api.github.com/repos/jserv/${repoName}`, 
        {
            method: "GET",
            headers: {
                authorization: `Token ${process.env.REACT_APP_GH}`
            }
        })
        .then(res => res.json())
        .then(data => {
            setDetailsLoading(false);
            setDetails(data);
        })
    };

    useEffect(() => {
        getDetails();
    }, []);
    console.log(details);
    return (
        <div>
            <p>{detailsLoading ? "Loading..." : ""}</p>
            <h2><a href={details.html_url} target="_blank">{details.full_name}</a></h2>
            <p>Languages: {details.language}</p>
            <p>Stargazer Count: {details.stargazers_count}★</p>
            <p>Details: {details.description}</p>
            <Link to="/users/jserv/repos">Go Back</Link>
        </div>
    )
}

export default RepoDetails;