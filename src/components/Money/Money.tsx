import { useState } from 'react'
import { MoneyType } from '../../App.tsx'

type FilterType = 'all' | 'dollars' | 'rubles'

type PropsType = {
  moneyList: MoneyType[]
}

export const Money = (props: PropsType) => {
  const { moneyList } = props

  const [filter, setFilter] = useState<FilterType>('all')

  const [filteredMoney, setFilteredMoney] = useState<MoneyType[]>(moneyList)

  const changeFilter = (value: FilterType) => {
    setFilter(value)
    switch (value) {
      case 'dollars':
        setFilteredMoney(
          moneyList.filter((item) => item.banknots === 'Dollars')
        )
        break
      case 'rubles':
        setFilteredMoney(moneyList.filter((item) => item.banknots === 'RUBLS'))
        break
      default:
        setFilteredMoney(moneyList)
    }
  }

  return (
    <div>
      <div>
        <button disabled={filter === 'all'} onClick={() => changeFilter('all')}>
          all
        </button>
        <button
          disabled={filter === 'dollars'}
          onClick={() => changeFilter('dollars')}
        >
          Dollars
        </button>
        <button
          disabled={filter === 'rubles'}
          onClick={() => changeFilter('rubles')}
        >
          RUBLS
        </button>
      </div>
      <ul>
        {filteredMoney.map((item) => (
          <li key={item.number}>
            <span>{item.banknots}</span> <span>{item.value}</span>{' '}
            <span>{item.number}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
