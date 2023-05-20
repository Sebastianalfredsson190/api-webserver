import './Locker.css';
import Background from './images/background.jpg'
import { NavLink } from 'react-router-dom'

function Box(props) {
    return (
        <div className='skin-box'>
            <a href='#'>
                <img className="box" src={props.background}></img>
            </a>
        </div>
    )
}

function Locker() {
    return (
        <div className='locker-boxes'>
            <NavLink to="/insidelocker/outfit">
                <Box background={Background} />
            </NavLink>
            <NavLink to="/insidelocker/backbling">
            <Box background={Background} />
            </NavLink>
            <NavLink to="/insidelocker/pickaxe">
            <Box background={Background} />
            </NavLink>
            <NavLink to="/insidelocker/glider">
            <Box background={Background} />
            </NavLink>
        </div>
    )
}
export default Locker;