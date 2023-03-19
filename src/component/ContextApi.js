import { createContext ,useReducer ,useContext} from "react";
const initialState ={
  whatched:[],
  whatchlist:[]
}
const reducer =(state ,action)=>{
switch(action.type){
  case "ADD_TO_WHATCHLIST" :
    return{
      ...state,
      whatchlist:new Set([state.whatchlist.push(action.add) ,...state.whatchlist])
    }
    case "ADD_TO_WHATCHED" :
      return{
        ...state,
        whatched:new Set([state.whatchlist.push(action.add) ,...state.whatched])
      }
    default :
    return state
}
}
const GlobaLcontext =createContext(initialState)
const ContextProvider =( )=>{
  const [state, dispatch] = useReducer(reducer ,initialState)
return   <GlobaLcontext.Provider
value={{
  whatched:state.whatched,
  whatchlist:state.whatchlist,
  dispatch:dispatch

}}>
  </GlobaLcontext.Provider>
}
export const useApi =()=>{
  return useContext(GlobaLcontext)
}
export default ContextProvider