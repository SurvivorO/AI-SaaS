import React from 'react'
import { Route, Routes } from 'react-router-dom'

import BlogTitles from './pages/BlogTitles'
import Community from './pages/Community'
import Dashboard from './pages/Dashboard'
import GenerateImage from './pages/GenerateImage'
import Home from './pages/Home'
import Layout from './pages/Layout'
import RemoveBackground from './pages/RemoveBackground'
import RemoveObjects from './pages/RemoveObjects'
import ReviewResume from './pages/ReviewResume'
import WriteArticle from './pages/WriteArticle'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/ai' element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path='blog-titles' element={<BlogTitles />} />
          <Route path='community' element={<Community />} />
          <Route path='generate-image' element={<GenerateImage />} />
          <Route path='remove-background' element={<RemoveBackground />} />
          <Route path='remove-objects' element={<RemoveObjects />} />
          <Route path='review-resume' element={<ReviewResume />} />
          <Route path='write-article' element={<WriteArticle />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App