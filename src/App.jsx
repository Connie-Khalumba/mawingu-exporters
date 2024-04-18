import React from 'react'
import { Routes,Route } from 'react-router-dom'
import { Home } from './pages'
import { Footer, Header } from './components'


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
