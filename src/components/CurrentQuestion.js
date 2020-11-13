import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { quiz } from 'reducers/quiz'
import { Button } from './Button'
import { ProgressBar } from './ProgressBar'

export const CurrentQuestion = () => {
  const [answerIndex, setAnswerIndex] = useState()
  const dispatch = useDispatch()
  // useSelector är ett sätt att hämta ut saker ur redux, som ett alternativ till att 
  // använda connect och mapStateToProps typ 
  // den tar in en funktion, som får state som ett argument, och returnerar resultatet 
  // av den funktionen, så det är samma som:
  // const hämtaQuizOverFrånState = function (state) { return: state.quiz.quizOver}
  // const getQuizQver = function (state) { return state.quiz.quizOver}
  // const quizOver = useSelector(getQuizQver)
  const quizOver = useSelector(state => state.quiz.quizOver)
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex])
  const answer = useSelector(
    (state) => state.quiz.answers.find((q) => q.questionId === question.id)
  )

  const handelAnswear = (index) => { // varför har jag index här?
    dispatch(
      quiz.actions.submitAnswer({ questionId: question.id, answerIndex: index })
    )
    setAnswerIndex(index)// varför har jag index här?
  }

  const setClassName = (index) => {
    // för att bara sätta en class på det option som man klickat på
    // och om det är rätt eller fel så sätts right eller wrong klassen
    if (answerIndex === index) {
      return (question.correctAnswerIndex === index
        ? 'correctAnswer'
        : 'wrongAnswer')
    }
  }

  /* if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }
 */
  if (quizOver) {
    return (
      <div> nu är det slut</div>
    )
  }

  return (
    <QuestionContainer>
      <Question> Question: {question.questionText}
      </Question>
       {question.options.map((option, index) => (
         <Option key={index}>
           <OptionInput
            // om answerIndex har ett värde, kör setClassName
           className={(answerIndex === undefined) ? '' : setClassName(index)}
           type='button'
           id={index}
           name='option'
           value={option}
           onClick={() => handelAnswear(index)}
           disabled={answer ? true : false}
           />
         </Option>
       ))}
      <Button
      // när du klickar på knappen så dispatchas goToNextQuestion som är en action
      // som finns i quiz. 
      answer={answer}
      onClick={() => {
        dispatch(quiz.actions.goToNextQuestion())
        setAnswerIndex()
      }}
      buttonTitle='Nästa fråga'/>
      <ProgressBar question={question} />
    </QuestionContainer>
  )
}

const QuestionContainer = styled.div``

const Question = styled.div``

const Option = styled.label``

const OptionInput = styled.input``
