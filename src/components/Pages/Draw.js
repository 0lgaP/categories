import React from 'react'
import Card from '../UI/Card'
import ButtonContainer from '../UI/ButtonContainer'
import Button from '../UI/Button'
import styles from "./Draw.module.css"
import DownloadButton from '../UI/DownloadButton'
import DrawButtonContainer from '../UI/DrawButtonContainer'

import Huntress from '../../assets/huntress-icon-removebg-preview.png';
import Freddy from '../../assets/killers/Freddy.jpg'
import Spirit from '../../assets/killers/Spirit.jpg'
import Oni from '../../assets/killers/Tony.jpg'
import Wraith from '../../assets/killers/Wraith.jpg'

import hunt from '../../assets/killers/Huntress.jpg'



const Draw = (props) => {
  const {toggleSettings, toggleDraw} = props

  return (
    <Card styles={styles.backdrop}>
    <ButtonContainer>
      <Button onClick={toggleDraw} main="true"/>
      <Button onClick={toggleSettings} setting="true"/>
    </ButtonContainer>
    <DrawButtonContainer>
    <DownloadButton title="Huntress" img={Huntress} drawing={hunt}/>
    <DownloadButton title="Huntress" img={Huntress} drawing={hunt}/>

    <DownloadButton title="Huntress" img={Huntress} drawing={hunt}/>

    <DownloadButton title="Huntress" img={Huntress} drawing={hunt}/>


    </DrawButtonContainer>
  </Card>
  )
}

export default Draw