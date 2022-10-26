import { useState } from 'react'
import '../src/cardswipe.css'
import cards from '../cards'
import CardSwipe from '../components/CardSwipe'

function CardPage() {

  const [allCards, setAllCards] = useState(cards)
  const [swiped, setSwiped] = useState([])

  const click = (e) => {
    const fewCards = allCards.filter(ele => ele.name != e.target.innerText)
    const swipedCard = allCards.filter(ele => ele.name == e.target.innerText)
    
    setAllCards([...fewCards, ...swipedCard])
    setTimeout(()=>{
    },1200)
  }

  const myCards = allCards.map((card, index) => {
    return (
      <CardSwipe 
        key={card.name}
        name={card}
        swiped={swiped}
        handleClick={click}
        index={index}
      />
      )
  })

  return (
    <div className="app">
      <h1>Swipe-left on mobile </h1>
      <h1>Click on Desktop</h1>
      <div className="allcards">
       {myCards} 
      </div>
    </div>
  )
}

export default CardPage