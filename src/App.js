import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
//browserrouter es el componente que nos permite crear rutas en nuestra app, 
//o sea, url's(es el contenedor)browserrouter = router != route
//y route, es una manera de poder espesificar estas rutas,(son las rutas)
import  'bootstrap/dist/css/bootstrap.min.css'
import './App.css';


import Nav from './components/Nav'
import NotesList from './components/NotesList'
import CreateNote from './components/CreateNote'
import CreateUser from './components/CreateUser'

function App() {
  return (
    <Router>
      <Nav />
      <div className="container p-4">
        <Route path="/" exact component={NotesList} />
        <Route path="/edit/:id" component={CreateNote} />
        <Route path="/create" component={CreateNote} />
        <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
