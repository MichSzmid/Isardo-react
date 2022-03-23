import React, {useState} from 'react'
import LoginForm from '../Main/LoginForm'

const Overlay = (onClick) => {
    const [showOverlay, setShowOverlay] = useState(true);
    const handleToggle = () => {
     setShowOverlay(!showOverlay);
    }
    return (
        <div className={"overlay"+ (showOverlay ?" class--hidden" : "")} onClick={handleToggle}>
            <LoginForm/>
        </div>
    )
}

export default Overlay
