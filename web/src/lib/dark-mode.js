import { useState, useEffect, createContext } from 'react'

export const DarkContext = createContext({})

export default function useDark(){  
  const key = 'dark__mode'
  const [state, setState] = useState(null)
  
  const setDarkState = e => {
    if(e == undefined || e.key === key){
      //console.log("O estado de 'isDark' foi alterado de ", state, " para ", !state)
      setState(prev => !prev)
      localStorage.setItem(key, !state)
    }
  }

  useEffect(() => {
    const stateOfDark = localStorage.getItem(key) !== null
        ? JSON.parse(localStorage.getItem(key)) 
        : window.matchMedia && 
          matchMedia('(prefers-color-scheme: dark)').matches || false    
    loadInitialState(stateOfDark)
  },[])

  const loadInitialState = (mountState) => {
      setState(mountState)
      //console.log("Setting initial state as", mountState)
  }

  useEffect(()=> {
    window.addEventListener('storage', setDarkState)
    return () => {
      window.removeEventListener('storage', setDarkState)
    }
  },[state])
  
  return [state, setDarkState]
}