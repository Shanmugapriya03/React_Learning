import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Blog from './Blog';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import './index.css';

ReactDOM.render(
    <Router>
     <div>
       <ul>
         <li><Link to="/">Home</Link></li>
         <li><Link to="/about">About</Link></li>
         <li><Link to="/contact">Contact</Link></li>
         <li><Link to="/blog">Blog</Link></li>
       </ul>

       <hr/>

       <Route exact path="/" component={Home}/>
       <Route path="/about" component={About}/>
       <Route path="/contact" component={Contact}/>
       <Route path="/blog" component={Blog}/>

     </div>
   </Router>,
  document.getElementById('root')
);
