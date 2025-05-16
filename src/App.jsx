import { useState } from 'react'
import './App.css'
import RecipeProduct from './components/RecipeProduct'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Navbar/>
      <Banner/>
      <RecipeProduct />
      <Footer/>
    </>
  )
}

export default App
