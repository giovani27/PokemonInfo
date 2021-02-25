import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom'


function Card({pokemon }) {

  return (
    <>
    <div className="container-fluid">
      <div className="col-12 ">
   <div className="  card ">
         <h1 style={{fontSize: '30pt' , textAlign: 'Center' , marginTop: '20px', fontWeight: 'Bold'} }> {pokemon.name.replace('generation' , 'Geração')
         .replace('-' , ' ')} </h1>
<div className="card2 ">

      {pokemon.pokemon_species.map((pk ,i ) =>{
         return <div key={i}> 
          <div className="cardimg mx-auto d-block ">
        <Link  style={{color: "white"}} to={`${pk.name}`} replace >

              <h2 className="card-name">{pk.name.charAt(0).toUpperCase() + pk.name.substr(1)}</h2>
          
             <img src={`https://img.pokemondb.net/sprites/x-y/normal/${pk.name}.png`} className="imgcard" alt=""></img>
             </Link>

        </div>

         
         
             </div>
      })}
       


       </div>
     </div>
     </div>
     </div>
     </>
  ) ;

}
export default Card;
