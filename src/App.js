import React from 'react';
import Home from './Components/Home';
import { Routes, Route, Navigate } from 'react-router-dom';
import RepoDetails from './Components/RepoDetails';

// Hello
function App() {
  return (
  <div>
    <h1>GitHub Repo Browser</h1>
    <Routes>
      <Route path='/' element={<Navigate to="/users/jserv/repos" />} />
      <Route exact path='/users/jserv/repos' element={<Home />}/>
      <Route path='/users/jserv/repos/:repoName' element={<RepoDetails />}/>
    </Routes> 
  </div>
  );
}

export default App;
