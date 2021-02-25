import React,{useState,useEffect} from 'react'
import Header from '../Header/index'
import api from '../../services/api'
import { usePokemon } from '../PokemonData/index'
import { getAllPokemon } from '../api/index';
import {useHistory} from 'react-router-dom'


const Cadastrar = () => {
  const History = useHistory()
  const { pokemon, setPokemon } = usePokemon();

  const [cadastro, setCadastro] =  useState({
    nome: '',
    email: '',
    senha: '',
  })



  


  console.log(cadastro)

  const cadastrar =  async () => {

    if(cadastro.nome !== '' && cadastro.email !== '' && cadastro.senha !== '' ){
      const data = {
        nome: cadastro.nome,
        email: cadastro.email,
        senha: cadastro.senha,
       
      }  
    const response =  await api.post('/usuario/cadastrar', data)
    if(response.status == 200){
      alert("cadastrado com sucesso")
      window.location.href ='/'
    }else {
      alert('erro ao cadastrar o usuario')
    }
    
 } else{
   alert('campos vazio')
 }
    }




    return (
        <>
        <Header HideLogout />

        <div className="container">
            <div className="row" >
            <div id="caixa_login" className="col-4 offset-4">
       <br />
       <form>
         <input
           type="nome"
           className="form-control form-control-mg"
           placeholder="Nome Completo"
           onChange={(e) => {
            setCadastro({
              ...cadastro,
              nome: e.target.value
            })
          }}

         />
         <br />
         <input
           type="email"
           className="form-control form-control-mg"
           placeholder="Email"
           onChange={(e) => {
            setCadastro({
              ...cadastro,
              email: e.target.value
            })
          }}

         />
         <br />
         <input
           type="password"
           className="form-control form-control-mg"
           placeholder="Senha"
           onChange={(e) => {
            setCadastro({
              ...cadastro,
              senha: e.target.value
            })
          }}

         />
         <br />
         <br />
         <button className="btn btn-lg btn-block btn-danger" onClick={cadastrar} >Cadastrar</button>
         <div className="row mt-4">

           <div className="col text-right">
             <a href="#" className="text-muted">Precisa de ajuda?</a>
           </div>
         </div>
       </form>
     </div>
             
          
            </div>
        </div>


     </>
    )
}
export default Cadastrar 