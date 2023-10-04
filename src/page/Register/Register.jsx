import { Link } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import './register.scss'

function Register() {
  return (
    <div className='register'>
        <Link to={'/'} className="logoWrap">
            <img src="/img/logo.png" alt="logo"  className='logoImg'/>
            <span className="logo">Helpmeout</span>
        </Link>
        <div className="auth">
        <div className="authWrap">
            <div className="loginContent">
                <span className="LoginTitle">Log in or Sign up</span>
                <span className="loginText">Join millions of others in sharing successful moves on HelpMeOut.</span>
            </div>
            <div className="loginSocial">
                <button className="btnWrap">
                    <img src="/img/Google.png" alt="Google" className='btnImg' />
                    <span className="btnText">Continue with Google</span>
                </button>
                <button className="btnWrap">
                    <img src="/img/Facebook.png" alt="Facebook" className='btnImg' />
                    <span className="btnText">Continue with Facebook</span>
                </button>
            </div>
            <div className="loginOr"><span className='line'></span>or<span className='line'></span></div>
            <form className="loginForm">
                    <div className="formDetails">
                        <label htmlFor="" className='label'>Email</label>
                        <input type="email" className="formInput" placeholder='Enter your email address'/>
                    </div>
                    <div className="formDetails">
                        <label htmlFor="" className='label'>Password</label>
                        <input type="password" className="formInput" placeholder='Enter your Password'/>
                    </div>
                    <button className="submit">Sign Up</button>
            </form>
        </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Register