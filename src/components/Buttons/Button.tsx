type PropsType = {
  text: string
  cb: () => void
}

export const Button = (props: PropsType) => {
  const { text, cb } = props

  const onClickHandler = () => {
    cb()
  }

  return <button onClick={onClickHandler}>{text}</button>
}
