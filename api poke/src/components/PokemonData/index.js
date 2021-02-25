import React, { useState, createContext, useContext } from 'react'

const dataContext = createContext()

export default function PokemonData({ children }) {

    const [pokemon, setPokemon] = useState({
        name: '',
        id: '',
        height: '',
        weight: '',
        base_experience: '',
        abilities: [],
        types: [],
        species_URL: '',
        sprites: '',
        stats: [],
        //pokemon-species
        capture_rate: '',
        evolution_chain_URL: '',
        gender_rate: '',
        generation: '',
        flavor_text_entries: [],
        is_legendary: false,
        is_mythical: false,
        evolves1: [],
        evolves2: [],
        evolves3: [],
        forte: [],
        fraco: [],
    })

    return (
        <dataContext.Provider value={{
            pokemon, setPokemon
        }}>
            {children}
        </dataContext.Provider>
    )
}


export function usePokemon() {
    const contextPoke = useContext(dataContext);
    if (!contextPoke) throw new Error("usePokemon must be used within a pokemonData provider");
    const {  pokemon, setPokemon} = contextPoke;
    return { pokemon, setPokemon }

}