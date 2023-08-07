const { useContext, createContext } = require("react");

import { api } from '../services/api'

export const AuthContext = createContext({})

function AuthProvider({ children }) {
  

  function signUp({name, email, password}, navi){
    if(!name || !email || !password){
      return alert('Preencha todos os campos!')
    }

    api.post('/users', { name, email, password })
    .then(() => {
      alert('Usuário cadastrado com sucesso')
      navi()
    })
    .catch(error => {
      if(error.response){
        alert(error.response.data.message)
      } else {
        alert('Não foi possivel cadastrar usuário')
      }
    })
  }

  return (
    <AuthContext.Provider value={{
      signUp,
    }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(authContext)

  return context
}

export { AuthProvider, useAuth }