import React,{useState, useEffect}from 'react'


const  Header = ({HideLogout}) => {
  const [User, setUser] = useState({})

  const logout = () => {
    localStorage.clear();
    window.location.reload()
  }

  useEffect(() => {
  setUser(JSON.parse(localStorage.getItem('@user')))

  }, [])
    return (
      <header  class="Status-Header row">
      <div class="col-10">
      <img className="status-imgheader" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png" alt=""></img>

      </div>
      {!HideLogout && <div className="col-2 text-right" style={{marginTop: "auto" }} >
        <a onClick={logout} className="text-white">logout</a>
      </div> }
    </header> 
    )
}
export default Header
