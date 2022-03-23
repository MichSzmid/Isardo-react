import react from 'react'
import MenuLeft from '../Main/MenuLeft'

export default function ImageButton(props) {
    return(
        <div className="image-button">
            <a><img src={(props.src)}/></a>
        </div>
    )
}