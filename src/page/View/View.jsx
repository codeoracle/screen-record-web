import { Link } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import './view.scss'

const View = () => {
  return (
    <div className='view'>
        
    <div className="navbar">
        <div className="logoWrap">
            <img src="/img/logo.png" alt="logo"  className='logoImg'/>
            <span className="logo">Helpmeout</span>
        </div>
        <div className="profile">
            <img src="/img/profile-circle.png" alt="profile-circle" className="profileIcon" />
            <span className="profileText">John Mark</span>
            <img src="/img/arrow-down.png" alt="arrow-down" className="arrow" />
        </div>
        </div>

        <div className="menuLink">
            <Link to={'/'} className="url">Home</Link> /
            <Link to={'/videos'} className="url"> Recent Videos</Link> /
            <Link to={'/video'} className="url2"> How To Create A Facebook Ad Listing </Link> 
        </div>

         <div className="videoLink">



                <div className="vidNameWrap">
                <span className="vidName">How To Create A Facebook Ad Listing</span>
                <img src="/img/edit.png" alt="edit" className='edit'/>
                </div>

                <div className="vidFrame">
                    <img src="/img/videoframe3.png" alt="videoframe3" className="vidImg" />
                </div>

                <div className="shareWrap">
              <div className="shareSocial">

              <div className="receiverEmail">
                <input type="text" placeholder='enter email of receiver' className="emailInput" />
                <span className="emailBtn">Send</span>
              </div>

              <div className="vidUrlWrap">
              <div className="urlInputWrap">
                <input type="text" placeholder='https://www.helpmeout/Untitled_Video_20232509' className="urlInput" />
                <div className="urlBtnWrap">
                <img src="/img/copy.png" alt="copy" className="btnImg" />
                <span className="urlBtn">Copy</span>
                </div>
              </div>
              </div>

              </div>

              <div className="socialMedia">
                <span className="shareVid">Share your video </span>
                <div className="socialWrap">
                  <div className="socialBtn">
                  <img src="/img/facebook.png" alt="Facebook" className="socialImg" />
                  <span className="social">Facebook</span>
                  </div>
                  <div className="socialBtn">
                  <img src="/img/whatsapp.png" alt="Facebook" className="socialImg" />
                  <span className="social">WhatsApp</span>
                  </div>
                  <div className="socialBtn">
                  <img src="/img/telegram.png" alt="Facebook" className="socialImg" />
                  <span className="social">Telegram</span>
                  </div>
                </div>
              </div>

                </div>

              {/* transcript */}

              <div className="transcript">
                <span className="transcriptHead">Transcript</span>
                <select name="" id="" className='selectLang'>
                  <option value="" className='lang'>English</option>
                </select>
                <div className="transcriptContentWrap">
                <div className="transcriptContent">
                  <span className="timeSpan">0.01</span>
                  <span className="script">First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the</span>
                </div>
                <div className="transcriptContent">
                  <span className="timeSpan">0.15</span>
                  <span className="script">First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the . Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-ha</span>
                </div>
                <div className="transcriptContent">
                  <span className="timeSpan">0.30</span>
                  <span className="script">First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the </span>
                </div>
                <div className="transcriptContent">
                  <span className="timeSpan">1.00</span>
                  <span className="script">First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the </span>
                </div>
                </div>
              </div>

            </div>
            <Footer/>
    </div>
  )
}

export default View