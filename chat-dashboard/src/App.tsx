import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { ThemeProvider } from '@emotion/react'

import {createMuiTheme} from './theme/theme'
import './theme/main.css'
import Home from './pages/Home'

import './App.css'
import Explore from './pages/Explore'
import Server from './pages/Server'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<Home/>}/>
      <Route path='/server' element={<Server/>}/>
      <Route path='/explore/:categoryName' element={<Explore/>}/>
    </Route>
  )
)

const  App:React.FC = () => {
  const theme = createMuiTheme()
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router}/>
    </ThemeProvider>
  )
}

export default App
