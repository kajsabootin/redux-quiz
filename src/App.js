import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { quiz } from 'reducers/quiz'

import { CurrentQuestion } from 'components/CurrentQuestion'

// configureStore och combineReducers är mest för att konfigurerar det från början. 
// Korden körs bara en gång när appen startar och sen aldrig igen
// för att koppla ihop alla redux-grejer så den fattar vilken data som hör till vad etc
// se när det ju bara reducers och actions som körs när användaren klickar runt i appen

// combineREducers gör så att du kan använda flera reducers i samma store
const reducer = combineReducers({ //  Don't create more than one store in an application! 
// Instead, use combineReducers to create a single root reducer out of many.
  quiz: quiz.reducer // the name of the reducer
})

// configureStore talar om för redux vilken reducer du vill använda för din store
const store = configureStore({ reducer }) // och eftersom vi döpt vår till reducer blir det reducer
// som argument här

// samma som ovan, fyller samma fubktion. 
// const store = createStore(reducer)

export const App = () => {
  return (
    // eftersom vi har deklarerat store på rad 20 blir det store här med
    <Provider store={store}> 
      <CurrentQuestion />
    </Provider>
  )
}
