type PropsType = {
  value: string
  cb: (value: string) => void
}

export const Input = (props: PropsType) => {
  const { cb, value } = props
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => cb(e.currentTarget.value)}
      />
    </div>
  )
}
