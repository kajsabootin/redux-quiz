import React from 'react'
import styled from 'styled-components'

export const Button = ({ onClick, buttonTitle, answer }) => {
  
  return(
    <QuizButton
    onClick={onClick} disabled={!answer ? true : false}>
    {buttonTitle}
    </QuizButton>
  )
}

const QuizButton = styled.button`
background-color: green;`