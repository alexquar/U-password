import { createContext, useReducer } from "react";

export const passContext = createContext()


const passReducer = (state, action) => {
  switch(action.type){
    case 'CHANGE_PASS':
      return {...state, password : action.payload}
    default :
      return state
  }
}

export function PassProvider({children}){
    
  const [state, dispatch] = useReducer(passReducer, {
    password : null,
  })

  const changePassword = (password) => {
    dispatch({type:'CHANGE_PASS', payload:password})
  }


    return (
        <passContext.Provider value={{ ...state, changePassword }}>
        {children}
      </passContext.Provider>
    )
}