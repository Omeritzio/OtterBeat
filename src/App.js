import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/home';

import ListOfSongs from './components/Cards/ListOfSongs';

function App ()  {
  
  return (
    <div>
      <Router>
      <Routes>
        {/* <Route exact path="/" component={Home} /> */}
        <Route path="/" element={<Home/>} />
        <Route path="/songs" element={<ListOfSongs />} />
        {/* <Route path="/contact" component={Contact} /> */}
       
    </Routes>
    </Router>
      
    </div>
  );
};

export default App;
