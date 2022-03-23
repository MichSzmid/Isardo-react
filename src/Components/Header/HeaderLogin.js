import React, {useState, /*useRef*/ } from 'react'
import UIButton from '../UI/UIButton'

function HeaderLogin() {
    const data = "xDD";
    const [activateOverlay, setActivateOverlay] = useState(true)
    const jebanie = () => {
        setActivateOverlay(!activateOverlay);
    }
    return (
        <div className="header-login">
            <UIButton text={'Log In'} addClass={"button-class--header"} onClick={jebanie} />
            <a>Already have an account?</a>
        </div>
    )
}

export default HeaderLogin
