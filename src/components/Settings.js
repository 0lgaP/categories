import React from 'react'
import ReactDom from 'react-dom';
// import SettingsMenu from './SettingsMenu';
// import useFilter from './helpers/useFilter';
import Slider from './Slider';
import Card from './UI/Card';


const SettingsMenu = (props) => {
  const {toggle, onToggle} = props
  return (
    <Card>
    <div className="container">
      <Slider toggle={toggle} onToggle={onToggle}/>
      <div className="category">Hi</div>
    </div>
    </Card>
  )
}

const Settings = (props) => {
  const { filter, includeHandler} = props;
  // const {filter, includeHandler} = useFilter()
  return (
    <React.Fragment>
      {ReactDom.createPortal(<SettingsMenu toggle={filter} onToggle={includeHandler}/>, document.getElementById('settings-root')
      )}
    </React.Fragment>
  )
}

export default Settings