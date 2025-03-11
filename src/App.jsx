import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Accordian from './components/Accordian/accordian'
import RandomColor from './components/random-color/random_color'
import StarRating from './components/star-ratings/StarRating'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col items-center">
     <Accordian/>
     <RandomColor/>
     <StarRating/>
    </div>
  )
}

export default App
