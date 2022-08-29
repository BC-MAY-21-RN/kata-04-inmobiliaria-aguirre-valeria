import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLocationDot, faBed, faToilet, faRulerCombined, faHeart, faStar } from '@fortawesome/free-solid-svg-icons'
library.add(faLocationDot, faBed, faToilet, faRulerCombined, faHeart, faStar)
import CardsMenu from './src/screens/CardsMenu'

export default App = () => {
  return (
    <CardsMenu/>
  )
}
