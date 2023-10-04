import { Link } from 'react-router-dom'
import './navbar.scss'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navWrap">
            <Link to={'/'} className="logoWrap">
                <img src="/img/logo.png" alt="logo" className="logoIcon" />
                <span className="logo">Helpmeout</span>
            </Link>
            <div className="menuWrap">
                <span className="menuList">Features</span>
                <span className="menuList">How it works</span>
            </div>
            <Link to={'/register'} className="btnWrap">
                <span className="btn">Get Started</span>
            </Link>
        </div>
    </div>
  )
}

export default Navbar