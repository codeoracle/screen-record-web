import { Link } from 'react-router-dom'
import './footer.scss'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footerContent">
            <div className="logoWrap">
                <img src="/img/footerLogo.png" alt="footerLogo" className="footerLogo" />
                <span className="logo">Helpmeout</span>
            </div>
            <div className="menu">
                <span className='menuTitle'>Menu</span>
                <Link to={'/video'} className='menuItem'>Video</Link>
                <Link to={'/videos'} className='menuItem'>Videos</Link>
                <Link to={'/view'} className='menuItem'>View</Link>
                <Link to={'/register'} className='menuItem'>Register</Link>
            </div>
            <div className="menu">
                <span className='menuTitle'>About us</span>
                <span className='menuItem'>About</span>
                <span className='menuItem'>Contact us</span>
                <span className='menuItem'>Privacy Policy</span>
            </div>
            <div className="menu">
                <span className='menuTitle'>Screen Record</span>
                <span className='menuItem'>Browser Window</span>
                <span className='menuItem'>Desktop</span>
                <span className='menuItem'>Application</span>
            </div>
            
        </div>
    </div>
  )
}

export default Footer