import { ChangeEvent, useState } from 'react'
import { MessageType } from './Messages.tsx'

type PropsType = {
  addMessage: (message: MessageType) => void
}

export const FullInput = (props: PropsType) => {
  const { addMessage } = props

  const [value, setValue] = useState<string>('')

  const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
  }

  const onClickButtonHandler = () => {
    addMessage({ message: value })
    setValue('')
  }

  return (
    <div>
      <input type="text" onChange={onChangeInputHandler} value={value} />
      <button onClick={onClickButtonHandler}>+</button>
    </div>
  )
}
