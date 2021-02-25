import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Pokemonstatus from './components/pokemonind/index'
import PokemonData from './components/PokemonData/index'
import Login from './components/Login/index'
import Cadastrar from './components/Cadastrar/index'

const logado = localStorage.getItem('@user')

ReactDOM.render(

  <React.StrictMode>
    <PokemonData>
      <BrowserRouter>
        <Switch>
        {!logado && <Route path="/" exact component={Login}/>}
        <Route path="/cadastrar" exact={true} component={Cadastrar} />
        {logado && <Route path="/" exact  component={App} />}
          <Route path="/:id" component={Pokemonstatus} />
        </Switch>
      </ BrowserRouter>
    </PokemonData>
  </React.StrictMode>,
  document.getElementById('root')
);

