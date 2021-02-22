import { nanoid } from 'nanoid'
import './App.css'
import pic from './grafiti01.jpg'
import Card from './components/Card/Card'

const firstCard = {
  img: pic,
  title: 'First Card',
  markup: [
    <p className="card-text" key={nanoid()}>
      lorem ipsum dolor sit amet, consectetur adip
    </p>,
  ],
}

const secondCard = {
  title: 'Second Card',
  markup: [
    <p className="card-text" key={nanoid()}>
      lorem ipsum dolor sit amet, consectetur adip, lorem ipsum dolor sit amet,
      consectetur adip, lorem ipsum dolor sit amet, consectetur adip, lorem ipsum dolor
      sit amet, consectetur adip
    </p>,
  ],
}

function App() {
  return (
    <div className="App">
      <Card img={firstCard.img} title={firstCard.title}>
        {firstCard.markup}
      </Card>
      <Card title={secondCard.title}>{secondCard.markup}</Card>
    </div>
  )
}

export default App
