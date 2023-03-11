import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Area from './components/Area/Area'
import Category from './components/category/Category'
import Contact from './components/Contact/Contact'
import Details from './components/details/Details'
import Home from './components/Home/Home'
import Ingredients from './components/Ingredients/Ingredients'
import Items from './components/Item/Items'
import Main from './components/main/Main'
import Search from './components/Search/Search'

export default function App() {

const router=  createBrowserRouter([
  {path:"",element:<Main/>,children:[
    {path:"",element:<Home/>},
    {path:"home",element:<Home/>},
    {path:"details",element:<Details/>,children:[
      {path:":id"}
    ]},
    {path:"category",element:<Category/>},

    {path:"item1",element:<Items/>,children:[
      {path:":strcateg"},
    ]},
    {path:"item2",element:<Items/>,children:[
      {path:":strarea"},
    ]},
    {path:"item3",element:<Items/>,children:[
      {path:":stringredients"},
    ]},
    {path:"area",element:<Area/>},
    {path:"ingredients",element:<Ingredients/>},
    {path:"contact",element:<Contact/>},
    {path:"search",element:<Search/>},

  ]}


])
  return<>
  <RouterProvider router={router}/>
  </>
}
