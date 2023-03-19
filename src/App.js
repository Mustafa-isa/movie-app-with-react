import React from 'react'
import Header from './component/Header'
import "./App.css"
import { BrowserRouter ,Routes ,Route } from 'react-router-dom'
import Whachlist from './component/Whachlist'
import Whached from './component/Whached'
import Add from './component/Add'




function App() {
  return (

  <BrowserRouter>
      
  <Header></Header>
  <Routes>
    <Route path='/' element={<Whachlist />}/>
    <Route path='/whached' element={<Whached />}/>
    <Route path='/add' element={<Add />}/>
  </Routes>
  
  </BrowserRouter>

  )
}

export default App