import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Education from './pages/Education'
import Graduation from './pages/Graduation'
import Secondary from './pages/Secondary'
import Pg from './pages/Pg'
import SingleProduct from './pages/SingleProduct'
import Products from './pages/Products'
function App() {


  return ( //har page mai include mai karna hai to route se baahar sirf ussi page mai to route ke andar
    <>
      <BrowserRouter>
        <ul>
          <li><NavLink to={""}>Home</NavLink></li>
          <li><NavLink to={"about"}>About</NavLink></li>
          <li><NavLink to={"education"}>Education</NavLink></li>

        </ul>
        <Routes >
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="education" element={<Education />}>
            <Route path='secondary' element={<Secondary></Secondary>}></Route>
            <Route path='graduation' element={<Graduation></Graduation>}></Route>

          </Route>
          <Route path='education/Pg' element={<Pg></Pg>}></Route>
          <Route path="Products" element={<Products/>}>
            <Route path=":id" element={<SingleProduct></SingleProduct>}></Route>
          </Route>



        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
