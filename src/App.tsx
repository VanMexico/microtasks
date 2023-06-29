import { TopCars } from './components/TopCars/TopCars.tsx'
import { Buttons } from './components/Buttons/Buttons.tsx'
import { Money } from './components/Money/Money.tsx'
import { useState } from 'react'

export type MoneyType = {
  banknots: string
  value: number
  number: string
}

function App() {
  const [money] = useState<MoneyType[]>([
    { banknots: 'Dollars', value: 100, number: ' a1234567890' },
    { banknots: 'Dollars', value: 50, number: ' z1234567890' },
    { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
    { banknots: 'Dollars', value: 100, number: ' e1234567890' },
    { banknots: 'Dollars', value: 50, number: ' c1234567890' },
    { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
    { banknots: 'Dollars', value: 50, number: ' x1234567890' },
    { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
  ])

  return (
    <>
      <Money moneyList={money} />
      <Buttons />
      <TopCars />
    </>
  )
}

export default App
