import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Accordian from './components/Accordian/accordian'
import RandomColor from './components/random-color/random_color'
import StarRating from './components/star-ratings/StarRating'
import Image_Slider from './components/Image_Slider/Image_Slider'
import Load_more from './components/Load_more/Load_more'
import Tree_View from './components/Tree_View/Tree_View'
import QR from './components/QR_Code/QR'
import useOnlineStatus from './components/isOnline.js/isOnline'
import DarkLightMode from './components/DarkLightMode/DarkLightMode'
import ScroolIndicator from './components/Scrool_Indicator/ScroolIndicator'
import TabContainer from './components/CustomTabs/TabContainer'
function App() {
  const [count, setCount] = useState(0)
  const isOnline = useOnlineStatus();
  return (
    <div className="flex flex-col items-center relative">
     <ScroolIndicator/>
     {isOnline ? <h3>Connected ✅</h3> : <h3>Disconnected ❌</h3>}
     <Accordian/>
     <RandomColor/>
     <StarRating/>
     <Image_Slider url={'https://picsum.photos/v2/list?'} pages={2} limit={5} />
     <Load_more url={'https://dummyjson.com/products'} limit={20} skip={20} />
     <Tree_View/>
     <QR/>
     <DarkLightMode/>
     <TabContainer/>
    </div>
  )
}

export default App
