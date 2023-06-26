import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


import React from "react"

import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Box} from "@mui/material";

import {Feed} from './components/Feed'
import {Navbar} from './components/Navbar'
import {SearchFeed} from './components/SearchFeed'
import {VideoDetail} from "./components/VideoDetail.jsx";


function App() {
 


  return (
    <BrowserRouter>
    
    <Box sx={{backgroundColor: '#000'}}>
      <Navbar/>
      <Routes>
         <Route path="/" exact element= {<Feed/>} />
         <Route path="/video:id" element={<VideoDetail/>} />
        
         <Route path="/search:searchTerm" element={<SearchFeed/>} />
      </Routes>

    </Box>
    
    </BrowserRouter>
  )
}

export default App
