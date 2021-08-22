import React from 'react'
import { BrowserRouter, Route, Switch, Link, useParams } from 'react-router-dom'
import { default as data } from '../data/posts.json'


  
function Post(){
  
  <Route path= '/Post/:content'><Post/></Route>
  const {content} =useParams();
  return <h1>{content}</h1>
  
}

export default Post
  
