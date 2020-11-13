import React from 'react'
import { useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz'
import styled from 'styled-components'

export const RestartButton = () => {
  const dispatch = useDispatch()
  return (
    <Button type="button" onClick={() => (dispatch(quiz.actions.restart()))}> 
      Kör igen
    </Button>
  )
}

const Button = styled.button``