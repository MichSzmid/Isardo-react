import React, {useState} from 'react'
import HeaderLogin from '../Header/HeaderLogin'
import ImageButton from '../UI/ImageButton'

export default function HeaderComponent(props) {
    const [userLoggodenIn, setUser] = useState(props.userLoggedIn);
    return (
        <div className='header'>
            <div className="header-grid header-grid--left">
                {!userLoggodenIn ? "" : 
                <div>
                    <a>Isardo</a>
                    <ul className="navbar">
                        <li><a>Students</a></li>
                        <li><a>Lessons</a></li>
                    </ul>
                </div>}
                </div>
            <div className="header-grid header-grid--right">
                {!userLoggodenIn ? <HeaderLogin/> :
                <div>
                    <ul className="user-panel">
                        klikXD
                        <ImageButton src="https://cdn.thingiverse.com/assets/b5/e0/84/c3/23/card_preview_title.jpg" onClick={console.log("toggleMenu")}/>
                    </ul>
                </div>    
                }
            </div>
        </div>
    )
}
