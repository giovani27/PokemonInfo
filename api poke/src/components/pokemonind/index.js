/*  Outro Arquivo   */

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getAllPokemon } from '../api/index';
import PokemonStatus from '../PokemonStatus/index'
import { usePokemon } from '../PokemonData/index'


export default function Pokemon() {
  const { pokemon, setPokemon } = usePokemon();

  
  let { id } = useParams([]);

  useEffect(() => {

    async function loadall() {

      const initialurl = `https://pokeapi.co/api/v2/pokemon/${id}`
      let response = await getAllPokemon(initialurl)

      
      const initialurl2 = `https://pokeapi.co/api/v2/pokemon-species/${id}`
      let response2 = await getAllPokemon(initialurl2)


let responsetipos = []
let forte = []
let fraco = []
let pokeevolve1 = [];
let pokeevolve2 = [];
let pokeevolve3 = [];



if(response.types.length == 1 ){
  
  const initialurl3 = response.types[0].type.url
  let response3 = await getAllPokemon(initialurl3)
   responsetipos.push(response3)

   responsetipos.map((poke)  => {
    poke.damage_relations.double_damage_from.map((poke2)  => {
      forte.push(poke2)

    })
  })
  responsetipos.map((poke)  => {
    poke.damage_relations.double_damage_to.map((poke2)  => {
      fraco.push(poke2)

    })
  })

}else {

for(let i = 0; i < 2; i++ ){

    const initialurl3 = response.types[i].type.url
    let response3 = await getAllPokemon(initialurl3)
     responsetipos.push(response3)

}
     responsetipos.map((poke)  => {
      poke.damage_relations.double_damage_from.map((poke2)  => {
        forte.push(poke2)

  
      })
    })
    responsetipos.map((poke)  => {
      poke.damage_relations.double_damage_to.map((poke2)  => {
        fraco.push(poke2)
  
      })
    })
}
const initialurl4 = await  `https://pokeapi.co/api/v2/pokemon-species/${id}/`
const response4 = await getAllPokemon(initialurl4)



const initialurl5 = await  response4.evolution_chain.url
  let responseEvolve = await getAllPokemon(initialurl5)



pokeevolve1.push(responseEvolve.chain.species)


  responseEvolve.chain.evolves_to.map((poke)  => {

       pokeevolve2.push(poke.species)

         poke.evolves_to.map((poke2)  => {
           pokeevolve3.push(poke2.species)

    
     })

    })


      setPokemon({
        ...pokemon,
        name: response.name,
        id: response.id,
        height: response.height,
        weight: response.weight,
        base_experience: response.base_experience,
        abilities: response.abilities,
        types: response.types,
        species_URL: response.species.url,
        sprites: response.sprites.front_default,
        stats: response.stats,
        flavor_text_entries:response2.flavor_text_entries[0].flavor_text,
        base_happiness: response2.base_happiness,
        capture_rate:response2.capture_rate,
        habitat:response2.habitat,
        categoria:response2.genera[7].genus,
        evolves1:pokeevolve1,
        evolves2:pokeevolve2,
        evolves3:pokeevolve3,
        forte:fraco,
        fraco:forte,
      })

    }

    loadall()



  }, [id]);




  return (
      <div className="page">




        <div className="lists">

          
          <PokemonStatus/>



        </div>


      </div>
  );
}
