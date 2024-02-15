import { useState } from 'react'
import './App.css'
import View from './View'

function getRandomView(){
  const viewArray = ["River","Mounth","Sky","Snow","Forest","Sun","River2","Mounth2","Sky2","Sea","Sky3"]
  return viewArray[Math.floor(Math.random()*viewArray.length)]
}

function App() {
  const [views, setViews] = useState([])

  const handleClick = ()=>{
    setViews([...views, getRandomView()])
  };

  const viewList = views.map((view,index)=>{
  return <View key={index} viewName={view} />
  })

  return (
    <div className='container' >
    <button className='btn' onClick={handleClick}>Manzara Getir</button>
    
    <div className='viewlist' >{viewList.reverse()}</div>

    </div>
  )
}

export default App
