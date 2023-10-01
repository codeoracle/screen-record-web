import './singleVideo.scss'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { useState } from 'react'
import { Link } from 'react-router-dom'




const SingleVideo = () => {

  const [popup, setPopup] = useState(false)
  return (
    <div className='singleVideo'>

      {/* popup */}

          {popup && <div className="popupWrap">
            <div className="emailPopup">
              <span className="cancelWrap">
              <img src="/img/close-circle.png" onClick={() => setPopup(!popup)} alt="close-circle" className="cancel" />
              </span>
              <img src="/img/success-kite 1.png" alt="close-circle" className="sendIcon" />
              <span className="sent">Your video link has been sent to <span className='userEmail'>johnmark@gmail.com</span></span>
              <div className="account">
                <span className="acctText">Would you need to view this video later? Save to your account now!</span>
                <Link to={'/register'} className="btn">Save Video</Link>
                <span className="createAcct">Don’t have an account? <Link to={'/register'}className='signUp'>Create Account</Link></span>

              </div>
            </div>
          </div>}

          {/* popup close */}

      <div className="navbar">
        <Navbar/>
      </div>
        <div className="singleVideoWrap">

          {/* video details */}

          <div className="vidContainer">
          
          <div className="videoDetails">

            <div className="videoLink">

              <span className="vidHeader">Your video is ready!</span>

              <div className="vidInput">
                <span className="name">Name</span>
                <div className="vidNameWrap">
                <span className="vidName">Untitled_Video_20232509</span>
                <img src="/img/edit.png" alt="edit" className='edit'/>
                </div>
              </div>

              <div className="receiverEmail">
                <input type="text" placeholder='enter email of receiver' className="emailInput" />
                <button onClick={() => setPopup(!popup)} className="emailBtn">Send</button>
              </div>

              <div className="vidUrlWrap">
              <span className="vidUrl">Video Url</span>
              <div className="urlInputWrap">
                <input type="text" placeholder='https://www.helpmeout/Untitled_Video_20232509' className="urlInput" />
                <div className="urlBtnWrap">
                <img src="/img/copy.png" alt="copy" className="btnImg" />
                <span className="urlBtn">Copy</span>
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


            <div className="videoPreview">
              <div className="video">
                <img src="/img/video.png" alt="video" />
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
                  <span className="script">First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the</span>
                </div>
                <div className="transcriptContent">
                  <span className="timeSpan">0.10</span>
                  <span className="script">First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the</span>
                </div>
                <div className="transcriptContent">
                  <span className="timeSpan">0.20</span>
                  <span className="script">First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the</span>
                </div>
                <div className="transcriptContent">
                  <span className="timeSpan">0.30</span>
                  <span className="script">First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the</span>
                </div>
                </div>
              </div>

            </div>

          </div>
          </div>

          {/* account */}

          <div className="accountWrap">
            <div className="accountContent">
              <h3 className="accHead">To ensure the availability and privacy of your video, we recommend saving it to your account.</h3>
              <Link to={'/register'} className="accBtn">Save Video</Link>
              <h3 className="signUp">Don’t have an account? <Link to={'/register'} className="createAct">Create account</Link></h3>
            </div>
          </div>
          
        </div>
        <Footer/>
    </div>
  )
}

export default SingleVideo