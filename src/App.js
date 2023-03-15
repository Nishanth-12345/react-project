import React  from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import pages
import Home from './pages/Home.js';
//import About from './pages/About';
import Product from './pages/Product.js';
//import Error from './pages/Error';
// import components
import Navbar from './components/Navbar';
//import items from './data.js';

import Single from './pages/Single.js';
function App() {
 // const [sounditems, setsounditem] = useState(items);
  return (
    
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        
        <Route path='product/:id' element={<Single />} />
        
      </Routes>
    </Router>
  );
}

export default App;
