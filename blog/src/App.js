import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'
import './App.css';
import Header from './components/container/Header'
import Body from './components/container/Body'
import Footer from './components/container/Footer'
function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <br />
     <Header/>
     <Body/>
     
     </div>
  
  
  </BrowserRouter>
  );
}

export default App;
