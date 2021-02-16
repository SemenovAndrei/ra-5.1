import { nanoid } from 'nanoid'
import { useState } from 'react'
import './App.css'
import pic from './grafiti01.jpg'
import Card from './components/Card/Card'

const firstCard = [
  <img className="card-image" src={pic} alt="card" key={nanoid()} />,
  <h1 className="card-title" key={nanoid()}>
    First Card
  </h1>,
  <p className="card-text" key={nanoid()}>
    lorem ipsum dolor sit amet, consectetur adip
  </p>,
]

const secondCard = [
  <h1 className="card-title" key={nanoid()}>
    Second Card
  </h1>,
  <p className="card-text" key={nanoid()}>
    lorem ipsum dolor sit amet, consectetur adip, lorem ipsum dolor sit amet, consectetur
    adip, lorem ipsum dolor sit amet, consectetur adip, lorem ipsum dolor sit amet,
    consectetur adip
  </p>,
]

function App() {
  const [clickCnt, setClickCnt] = useState(null)

  const onClicked = (evt) => {
    setClickCnt((prev) => +prev + 1)
  }

  return (
    <div className="App">
      <Card onSubmit={onClicked} clickCnt={clickCnt}>
        {firstCard}
      </Card>
      <Card>{secondCard}</Card>
    </div>
  )
}

export default App
