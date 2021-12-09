
import React from "react";
import Home from "./components/home/home";
import Contact from "./components/contact/contact";
import Blog from "./components/blog/blog";

import { Container } from 'react-materialize';
import { Routes, Route } from 'react-router-dom'

const Main = () => (
  <main>
    <Container>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/blog' element={<Blog/>}/>
      </Routes>
    </Container>
  </main>  
);

export default Main;