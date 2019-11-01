import { useState, useEffect } from 'react'
//import {isBrowser} from './helpers'

export default function useDark(){
  //const prefersDark = isBrowser() && 
    //matchMedia('(prefers-color-scheme: dark)').matches ? true : false
  
  const key = 'dark__mode'
  //const [isMounted, setMount] = useState(false)
  const [state, setState] = useState(null)
  
  const setDarkState = () => {
      console.log("O estado de 'isDark' foi alterado de ", state, " para ", !state)
    setState(state => !state)
    localStorage.setItem(key, !state)
  }

  useEffect(() => {
    const stateOfDark = localStorage.getItem(key) !== null
        ? JSON.parse(localStorage.getItem(key)) 
        : window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches || false
    
    console.log("Mounting app, state is ", state)
    
    loadInitialState(stateOfDark)
  },[])

  const loadInitialState = (mountState) => {
      setState(mountState)
      console.log("Setting initial state as", mountState)
  }

  useEffect(()=> {
    window.addEventListener('storage', setDarkState)
    return () => { 
      window.removeEventListener('storage', setDarkState) 
    }
  },[state])
  
  return [state, setDarkState]
}