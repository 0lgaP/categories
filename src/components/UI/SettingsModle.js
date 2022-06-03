import React from 'react'
import ReactDom from 'react-dom';
import Card from "./Card.js"
import Slider from '../Slider';
import styles from "./SettingsModule.module.css"
import SettingsButton from '../SettingsButton.js';

const Backdrop = (props) => {
  return (
    <div className={styles.backdrop} onClick={props.toggleSettings} />
  )
}

const ModalOverlay = (props) => {
  const { onFilter, filter, toggleSettings, settings} = props;
  return (

    <Card styles={styles.modal}>

      <SettingsButton toggleSettings={toggleSettings} settings={settings} />
      <Slider filter={filter} onFilter={onFilter}/>

    </Card>


  )
}

const SettingsModle = (props) => {
  const {onFilter, filter, toggleSettings, settings} = props;
  return (
    <React.Fragment>
      {ReactDom.createPortal(<Backdrop toggleSettings={toggleSettings} />, document.getElementById('backdrop-root'))}
      {ReactDom.createPortal(<ModalOverlay toggleSettings={toggleSettings} settings={settings} filter={filter} onFilter={onFilter}/>, document.getElementById('overlay-root'))}
    </React.Fragment>
  )
}

export default SettingsModle