import React from 'react'
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'

import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Post from '../pages/Post'




function Body() {
  return (

    <div>
      
      <Switch>
   
   <Route path = "/About"><About/></Route>
   <Route path = "/contact"><Contact/></Route>
   <Route path = "/Post"><Post/></Route>
   <Route path = "/"><Home/></Route>

      </Switch>
    </div>
 
  )
}

export default Body
