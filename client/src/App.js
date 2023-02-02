import './App.css';
import { Route , Switch} from "react-router-dom";
import React from 'react';
import LandingPage from './LandingPage';
import Dogs from './components/Dogs/Dogs';
import Detail from './components/Detail';
import CreateDog from './components/CreateForm/CreateDog';
import Nav from './components/Nav'

function App() {
  return (
  <div className="App">
  
  <Switch>        
      <Route exact path="/">
        <LandingPage/>
      </Route>

      <Route path= "/inicio">
        <Nav/>
        <Dogs />
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
