import React from 'react'
import {default as data} from '../data/posts.json'
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'
import Post from './Post'
function Home() {
  const blogList = data.map(data =>
    <p id = {`${data.key}`}>
      <Link to={`/post/${data.title}`}>Post:{data.date}</Link>
    </p>)
  return (
    <BrowserRouter>
    <div>
      <div className="pageTitle">Keep up with our blog</div>
      <div className="gridPannel">
        <div className="blogMenu">{blogList}</div>
        <div className="blogPost">
          <Switch>
            <Route path= '/Post/:slug'><Post/></Route>
          </Switch>
        </div>
      </div>
    </div>
    
    </BrowserRouter>
    
  )
}

export default Home
