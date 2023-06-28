import { Car } from './Car.tsx'

export type CarType = {
  manufacturer: string
  model: string
}

export const TopCars = () => {
  const topCars = [
    { manufacturer: 'BMW', model: 'm5cs' },
    { manufacturer: 'Mercedes', model: 'e63s' },
    { manufacturer: 'Audi', model: 'rs6' },
  ]

  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>№</td>
            <td>manufacturer</td>
            <td>model</td>
          </tr>
        </thead>
        <tbody>
          {topCars.length &&
            topCars.map((car, idx) => (
              <Car key={car.model} car={car} number={idx + 1} />
            ))}
        </tbody>
      </table>
    </div>
  )
}
