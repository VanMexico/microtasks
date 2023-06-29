import { useState } from 'react'
import { FullInput } from './FullInput.tsx'
import { Input } from './Input.tsx'
import { Button } from './Button.tsx'

export type MessageType = {
  message: string
}

export const Messages = () => {
  const [messages, setMessages] = useState<MessageType[]>([
    { message: 'message 1' },
    { message: 'message 2' },
    { message: 'message 3' },
  ])

  const [inputValue, setInputValue] = useState<string>('')

  const addMessage = (message: MessageType) => {
    setMessages([message, ...messages])
  }

  const onclickButtonHandler = () => {
    setMessages([{ message: inputValue }, ...messages])
    setInputValue('')
  }
  return (
    <div>
      <div style={{ display: 'flex', gap: '10px' }}>
        <Input cb={setInputValue} value={inputValue} />
        <Button text="+" cb={onclickButtonHandler} />
      </div>
      <hr />
      <FullInput addMessage={addMessage} />
      <ul>
        {Boolean(messages.length) &&
          messages.map((item, id) => <li key={id}>{item.message}</li>)}
      </ul>
    </div>
  )
}
