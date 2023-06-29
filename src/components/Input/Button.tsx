type PropsType = {
  text: string
  cb: () => void
}

export const Button = (props: PropsType) => {
  const { text, cb } = props

  return <button onClick={cb}>{text}</button>
}
