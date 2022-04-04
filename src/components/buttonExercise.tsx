import { Fragment } from 'react'
import { PopupButton } from '@typeform/embed-react'

type ExerciseProps = { title?: string; embedCode?: string }

const ButtonExercise = ({ title, embedCode }: ExerciseProps) => {
  if (!embedCode) return <Fragment />

  return (
    <PopupButton
      id={embedCode}
      style={{ fontSize: 20 }}
      className="exercise-btn"
    >
      {title}
    </PopupButton>
  )
}
export default ButtonExercise
