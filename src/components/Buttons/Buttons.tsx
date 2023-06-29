import { MouseEvent } from 'react'
import { Button } from './Button.tsx'

export const Buttons = () => {
  const eventHandler = (event: MouseEvent<HTMLButtonElement>) => {
    console.log(event)
  }

  const subscribeHandle = (name: string) => {
    console.log(name)
  }

  const foo1 = () => {
    console.log(100200)
  }

  const foo2 = (value: number) => {
    console.log(value)
  }

  const testCb = (name: string) => {
    console.log(name)
  }

  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      <Button text="first" cb={() => testCb('first')} />
      <Button text="second" cb={() => testCb('second')} />
      <button onClick={(event) => eventHandler(event)}>eventHandler</button>
      <button onClick={() => subscribeHandle('Alex')}>Subscribe-1</button>
      <button>Subscribe-2</button>
      <button onClick={foo1}>foo 1</button>
      <button onClick={() => foo2(102000)}>foo 2</button>
    </div>
  )
}
