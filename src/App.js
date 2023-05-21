import React from 'react';
import Songs from './components/Cards/songs';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/home';

function App ()  {
  
  return (
    <div>
      <Router>
      <Routes>
        {/* <Route exact path="/" component={Home} /> */}
        <Route path="/" element={<Home/>} />
        <Route path="/songs" element={<Songs/>} />
        {/* <Route path="/contact" component={Contact} /> */}
       
    </Routes>
    </Router>
      
    </div>
  );
};

export default App;
