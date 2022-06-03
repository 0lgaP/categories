import React from 'react'
import SettingsButton from './SettingsButton';
import Slider from './Slider';
import Card from './UI/Card';
import styles from "./Settings.module.css"


const Settings = (props) => {
  const { toggleSettings, settings, onFilter, filter} = props;
  return (
    <React.Fragment>
    <Card styles={styles.card}>
    <SettingsButton toggleSettings={toggleSettings} settings={settings} />
    <Slider filter={filter} onFilter={onFilter}/>
    </Card>
    </React.Fragment>
  )
}

export default Settings