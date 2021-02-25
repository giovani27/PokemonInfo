import React, { useEffect, useState } from 'react';
import './App.css'
import { getAllPokemon, getPokemon } from './components/api/index';
import Card from './components/Card/index'
import { Link } from 'react-router-dom';

import Header from './components/Header/index'


export default function App() {

  const [PokemonData, setPokemonData] = useState([]);
  const [Search, setSearch] = useState("");
  const geraçaourl = 'https://pokeapi.co/api/v2/generation/'


  useEffect(() => {
    async function loadall() {
      let response2 = await getAllPokemon(geraçaourl)
      response2.results.map(async (ger) => {
        await getAllPokemon(ger.url)
     
      })
      await loadingPokekemon(response2.results)


    }

    loadall()
  }, []);



  const loadingPokekemon = async (data) => {
    let _pokemon = await Promise.all(
      data.map(async pokemon => {
        let pokemonRecord = await getPokemon(pokemon.url)
        return pokemonRecord
      }))

    setPokemonData(_pokemon)
  }





  return (

    <div className="page">
        <Header/>

      <div className="inputsummoner-div">
        <input className="inputsummoner-input" onChange={(e) => setSearch(e.target.value.toLowerCase())}></input>
        <Link   to={`${Search}`} replace > <button  >Buscar</button></Link> 

      </div>

      <div className="lists">

        {PokemonData.map((pokemon, i) => {
          return <Card key={i} pokemon={pokemon} />

        })}

      </div>

    </div>
  );
}


