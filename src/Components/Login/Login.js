import {useAuth0} from "@auth0/auth0-react"
import LogOut from "./LogOut"
import LoginButton from "./LoginButton"


import Loading from "./../Loading/Loading"


import "./Login.css"



const Login = () => {

  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <h1><Loading /></h1>
  }
 

  return ( 
    <>
  
    <div className="container-login">
      {isAuthenticated ? <LogOut /> : <LoginButton />}
    </div>

    </>
   );
}
 
export default Login