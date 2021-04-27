import {
  useFonts, 
  Jost_400Regular,
  Jost_600SemiBold
} from '@expo-google-fonts/jost'
import React from 'react'
import Routes from './src/routes'
import AppLoading from 'expo-app-loading'
// import {StatusBar} from 'expo-status-bar'

export default function App(){


  let [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  })

  if(!fontsLoaded){
    return <AppLoading/>
  }

  return (
      <Routes/>
  )
}

