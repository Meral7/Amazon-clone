import { createContext,  useContext,  useReducer }  from "react";
import AppReducer from './AppReducer.jsx';
import { initialState } from './AppReducer.jsx'

const GlobalContext = createContext()

const GlobaProvider = ({children}) =>{
    const [state , dispatch] = useReducer(AppReducer , initialState)
  return (
   <GlobalContext.Provider value={{basket:state.basket ,user: state.user ,dispatch:dispatch}} >  
    {children}
   </GlobalContext.Provider>
  )
}
 export const useAuth =() =>{
    return useContext(GlobalContext)
}
export default GlobaProvider

