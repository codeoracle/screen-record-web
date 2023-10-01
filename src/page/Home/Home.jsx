import './home.scss'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div className='home'>
        <div className="navbar">
            <div className="navWrap">
            <Navbar/>
            </div>
        </div>
        <div className="showCase">
            <div className="showBg">
            <div className="showContentWrap">
            <div className="showContent">
                <span className="showTitle">Show Them
                    Don’t Just Tell</span>
                <span className="showText">Help your friends and loved ones by creating and sending videos on how to get things done on a website.</span>
        

                <Link className="showBtn"><span className="btnText">Install HelpMeOut</span><img src="/img/arrow-right.png" alt="arrow-right" className="btnImg" /></Link>
 
               
            </div>
            <div className="showImages">
                <span className="frame">
                    <img src="/img/Frame1.png" alt="Frame1" className="showImg" />
                    <img src="/img/Frame2.png" alt="Frame2" className="showImg" />
                </span>
                <img src="/img/Frame3.png" alt="Frame3" className="showImg2" />
            </div>
            </div>
            </div>
        </div>

        <div className="feature">
            <div className="featureWrap">
                <div className="featureContent">
                    <h1 className="featureTitle">Feature</h1>
                    <span className="featureText">Key Highlights of Our Extension</span>
                </div>
                <div className="featuresDetails">
                    <div className="featuresList">
                        <div className="listWrap">
                        <img src="/img/record-circle.png" className='listImg' alt="record-circle" />
                        <div className="listContent">
                        <span className="listTitle">Simple Screen Recording</span>
                        <span className="listContent">Effortless screen recording for everyone. Record with ease, no tech expertise required.</span>
                        </div>
                        </div>
                        <div className="listWrap">
                        <img src="/img/send-2.png" className='listImg' alt="record-circle" />
                        <div className="listContent">
                        <span className="listTitle">Easy-to-Share URL</span>
                        <span className="listContent">Share your recordings instantly with a single link. No attachments, no downloads.</span>
                        </div>
                        </div>
                        <div className="listWrap">
                        <img src="/img/refresh-square-2.png" className='listImg' alt="record-circle" />
                        <div className="listContent">
                        <span className="listTitle">Revisit Recordings</span>
                        <span className="listContent">Access and review your past content effortlessly. Your recordings, always at your fingertips.</span>
                        </div>
                        </div>
                    </div>
                    <img src="/img/Video-Repository.png" alt="Video-Repository" />
                </div>
            </div>
        </div>

        <div className="howItWork">
            <div className="howItWorkContent">
                <h1 className="title">How it works</h1>
                <div className="stepWrap">
                    <div className="steps">
                        <span className="stepNum">1</span>
                        <span className="stepTitle">Record Screen</span>
                        <span className="stepText">Click the "Start Recording" button in our extension.  choose which part of your screen to capture and who you want to send it to.</span>
                        <img src="/img/rec-1.png" alt="rec-1" className="stepImg" />
                    </div>
                    <div className="steps">
                        <span className="stepNum">2</span>
                        <span className="stepTitle">Share Your Recording</span>
                        <span className="stepText">We generate a shareable link for your video. Simply send it to your audience via email or copy the link to send via any platform.</span>
                        <img src="/img/rec-1.png" alt="rec-1" className="stepImg" />
                    </div>
                    <div className="steps">
                        <span className="stepNum">3</span>
                        <span className="stepTitle">Learn Effortlessly</span>
                        <span className="stepText">Recipients can access your video effortlessly through the provided link, with our user-friendly interface suitable for everyone.</span>
                        <img src="/img/rec-1.png" alt="rec-1" className="stepImg" />
                    </div>
                </div>
            </div>
        </div>

            <Footer/>
    </div>
  )
}

export default Home