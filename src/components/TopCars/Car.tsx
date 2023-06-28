import { CarType } from './TopCars.tsx'

type PropsType = {
  car: CarType
  number: number
}

export const Car = (props: PropsType) => {
  const { number, car } = props

  return (
    <tr>
      <td>{number}</td>
      <td>{car.manufacturer}</td>
      <td>{car.model}</td>
    </tr>
  )
}
