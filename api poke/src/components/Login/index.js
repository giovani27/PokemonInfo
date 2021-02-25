import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../../services/api'
import Header from '../Header/index'

const Login = () => {
    
  const [Credenciais, setCredenciais] = useState({
    email: '',
    senha: '',
  })
  const Logina =  async () => {
    try {
      const response = await api.post('/usuario/login', Credenciais);
      const res  =  response.data
    if(res.error) {
       alert(res.message) 
       return false
    }
    localStorage.setItem('@user', JSON.stringify(res))
    window.location.reload()
      
   } catch (err){
     alert(err.message)
   }
 }
  
    return (
        <>
           <Header HideLogout/>

           <div className="container">
               <div className="row" >
               <div id="caixa_login" className="col-4 offset-4">
          <br />
          <form>
            <input
              type="email"
              className="form-control form-control-mg"
              placeholder="Email"
              onChange={(e) => {
                setCredenciais({
                  ...Credenciais,
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
                setCredenciais({
                  ...Credenciais,
                  senha: e.target.value
                })
              }}

            />
            <br />
            <button className="btn btn-lg btn-block btn-danger" onClick={Logina} >Entrar</button>
           <Link to="/cadastrar" ><button className="btn btn-lg btn-block btn-danger"  >Cadastrar</button></Link> 
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

export default Login