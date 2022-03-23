import react, {useState} from 'react'
function onLoggedIn (loggedIn) {
if (!loggedIn) return (<div className="menu-left-poster"></div>)
else return (
    <div className="menu-left-sidebar menu-left--hidden">
    <a>Meni</a>
    <ul>
        <li>Settings</li>
        <li>DarkMode</li>
        <li>Logout</li>
    </ul>
</div>)
}


const MenuLeft = (props) => {
    const [userLoggodenIn, setUser] = useState(props.userLoggedIn);
    return (
        <div>
            {onLoggedIn(userLoggodenIn)}
        </div>
    )
}

export default MenuLeft