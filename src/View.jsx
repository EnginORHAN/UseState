import React from 'react'
import River from './image/1.jpg'
import Mounth from './image/2.jpg'
import Sky from './image/3.jpg'
import Snow from './image/4.jpg'
import Forest from './image/5.jpg'
import Sun from './image/6.jpg'
import River2 from './image/7.jpg'
import Mounth2 from './image/8.jpg'
import Sky2 from './image/9.jpg'
import Sea from './image/10.jpg'
import Sky3 from './image/11.jpg'

const viewMap={
    River,
    Mounth,
    Sky,
    Snow,
    Forest,
    Sun,
    River2,
    Mounth2,
    Sky2,
    Sea,
    Sky3,
}

function View({ viewName }) {
  return (
    <div>
        <img className='image' src={viewMap[viewName]} alt="" />
    </div>
  )
}

export default View