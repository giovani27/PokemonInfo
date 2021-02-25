/* Componente */

import React from 'react';
import './PokemonStatus.css';
import { usePokemon } from '../PokemonData/index'
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Header from '../Header/index'

function Cardb(props) {

  const { pokemon, setPokemon } = usePokemon();
let estilo1 
let estilo2

  if(pokemon.evolves2.length > 4 ){
   estilo2 ={
    marginTop: "-50px"
   }


    estilo1 = {
      width: "100%",
    }

  }else {
    estilo1 = {
      width: "100%"
    }
  }

let estilo3 

if(pokemon.evolves3.length == 2 ){
  estilo3 ={
   marginTop: "-30px"
  }


 }else {
  estilo3 = {
   }
 }

  return (

    <div className="Status-Main">
      <Header/>

      <div className="Status-Meio">
        <div className="Status-Esquerdo">
          <div className="Status-Namediv">
            <h1 className="Status-Name">{pokemon.name.toUpperCase()}  N°{pokemon.id}</h1>
          </div>
          <div className="Status-Imgdiv">
            <img className="status-Img" src={`https://img.pokemondb.net/sprites/x-y/normal/${pokemon.name}.png`} alt={pokemon.name}></img>
          </div>
        </div>
        <div className="Status-Direita">

          <div className="Status-DireitaText">{pokemon.flavor_text_entries}     </div>

          <div className="Status-DireitaConteudo ">
            <div className="Status-DireitaConteudoE">
              <h3>  Height </h3>
              <div className="Status-DireitaHeight text-center"> {pokemon.height}M   </div>
              <h3>  Weight </h3>
              <div className="Status-DireitaWeight text-center">   {pokemon.weight}KG   </div>
            </div>
            <div className="Status-DireitaConteudoD ">
              <h3 className="ml-5">  Categoria </h3>
              <div className="Status-DireitaCategiria text-center"> {pokemon.categoria}     </div>
              <h3 className="ml-5">  Habilidade </h3>
              <div className="Status-DireitaAbility text-center">  {pokemon.abilities.map((pokemons, i) => {
                return <p key={i}  > {pokemons.ability.name} </p>

              })}
              </div>

            </div>

          </div>




        </div>

        <div className="Status-EsquerdaBaixo">

          <div className="statusBarEsquerda">
            <h1>Status</h1>
            <div className="Status-BarHP" > {pokemon.stats.map((pokemons, i) => {
              return <p key={i}  > {pokemons.stat.name.toUpperCase()} </p>


            })}
            </div>
          </div>
          <div className="statusBarDireita">
            <div className="Status-BarHP2" > {pokemon.stats.map((pokemons, i) => {

              return <p key={i} className="barradestatus" style={{
                backgroundColor: 'blue',
                width: pokemons.base_stat,
                height: '20px',
                borderRadius: '5px',
                marginLeft: '10px'
              }} >

                <div className="text-center mt-3" style={{
                  width: '200px',
                  height: '20px',
                  border: 'solid 1px black',
                  borderRadius: '10px',
                }}> {pokemons.base_stat}</div>
              </p>


            })}


            </div>


          </div>




        </div>
        <div className="Status-DireitaBaixo  small">
          <div className="nome-ForteContra"> TIPO </div>

          <div className="status-Tipo">
            {pokemon.types.map((pokemons, i) => {
              return <p className={pokemons.type.name.toUpperCase()} key={i}  > {pokemons.type.name.toUpperCase()} </p>


            })}
          </div>

          <div className="nome-ForteContra"> Forte Contra </div>

          <div className="status-FracoContra ">
            {pokemon.forte.map((pokemons, i) => {
              return <p className={pokemons.name.toUpperCase()} key={i}  > {pokemons.name.toUpperCase()} </p>

            })}
          </div>
          <div className="nome-ForteContra "> Fraco Contra </div>
          <div className="status-ForteContra">
            {pokemon.fraco.map((pokemons, i) => {
              return <p className={pokemons.name.toUpperCase()} key={i} > {pokemons.name.toUpperCase()}  </p>

            })}
          </div>

        </div>

        <div className="Status-Baixo">
          <h1 style={{marginLeft: '10px',color: 'black'}}>Evoluções</h1>
          <div className="Status-Baixo2" style={{display: 'flex'}} >

          <div className="First-Evo"> {pokemon.evolves1.map((pokemons, i) => {
            return <div key={i} className="divFierEvo" > 
           <a href={pokemons.name}>   <img className="Evo-Img1" key={i} src={`https://img.pokemondb.net/sprites/x-y/normal/${pokemons.name}.png`} alt={pokemons.name} /></a> 
              <p >{ pokemons.name.charAt(0).toUpperCase() + pokemons.name.substr(1)}</p> 
   
               </div> 
                    
          })}     <NavigateNextIcon style={{fontSize: '100pt'}}  className="navigatenext"></NavigateNextIcon>    </div>   
         
       

          <div className="Second-Evo" style={estilo2} > {pokemon.evolves2.map((pokemons, i) => {
            return <div key={i}  className="divSecondEvo" >
           <a href={pokemons.name}>   <img className="Evo-Img2" style={estilo1} key={i} src={`https://img.pokemondb.net/sprites/x-y/normal/${pokemons.name}.png`} alt={pokemons.name.charAt(0).toUpperCase() + pokemons.name.substr(1)} /></a> 
            <p >{pokemons.name.charAt(0).toUpperCase() + pokemons.name.substr(1)}</p> 
              </div> 
        })} <NavigateNextIcon style={{fontSize: '100pt'}}  className="navigatenext"></NavigateNextIcon>  </div>


          <div className="Terceiro-Evo" style={estilo3}> {pokemon.evolves3.length > 0 && pokemon.evolves3.map((pokemons, i) => {
            return <div key={i} className="divTercEvo" > 
          <a href={pokemons.name}>    <img className="Evo-Img3" key={i} src={`https://img.pokemondb.net/sprites/x-y/normal/${pokemons.name}.png`} alt={pokemons.name.charAt(0).toUpperCase() + pokemons.name.substr(1)} /></a> 
            <p >{pokemons.name.charAt(0).toUpperCase() + pokemons.name.substr(1)}</p> 
            </div> 
        })} </div>




        </div>


      </div>

      </div>
    </div>


  );

}
export default Cardb;
