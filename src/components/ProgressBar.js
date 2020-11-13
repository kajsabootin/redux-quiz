import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { quiz } from 'reducers/quiz'

export const ProgressBar = ({question}) => {
  const totalQuestions = useSelector(state => state.quiz.questions) 
  // useSelector är ett sätt att hämta ut saker ur redux, som ett alternativ till att 
  // använda connect och mapStateToProps typ 
  // den tar in en funktion, som får state som ett argument, och returnerar resultatet 
  // av den funktionen, så det är samma som:
  // const hämtaQuestionsFrånState = function (state) { return state.quiz.questions}
  // const getQuestions = function (state) { return state.quiz.questions }
  // const questions = useSelector(getQuestions)

  const currentQuestion = question.id

  return (
      <h2> {currentQuestion}/ {totalQuestions.length} </h2>
  )
}