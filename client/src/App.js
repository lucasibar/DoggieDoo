import './App.css';
import { Route , Switch} from "react-router-dom";
import React from 'react';
import LandingPage from './LandingPage';
import Home from './components/Home';
import Detail from './components/Detail';
import CreateDog from './components/CreateForm/CreateDog';


function App() {
  return (
  <div className="App">
  
  <Switch>        
      <Route exact path="/">
        <LandingPage/>
      </Route>

      <Route path= "/inicio">
        <Home/>
      </Route>
      
      <Route 
      path= "/detail/:id"
      render={( {match} )=>(
        <Detail match={match}  />
      )}
      />

      <Route path= "/create">
        <CreateDog />
      </Route>
      
    
      
  </Switch>   
  </div>
  )
}

export default App;
