import { Link } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import './videos.scss'

const Videos = () => {
  return (
    <div className='videos'>

        <div className="navbar">
        <Link to={'/'} className="logoWrap">
            <img src="/img/logo.png" alt="logo"  className='logoImg'/>
            <span className="logo">Helpmeout</span>
        </Link>
        <div className="profile">
            <img src="/img/profile-circle.png" alt="profile-circle" className="profileIcon" />
            <span className="profileText">John Mark</span>
            <img src="/img/arrow-down.png" alt="arrow-down" className="arrow" />
        </div>
        </div>

    <div className="searchVidWrap">
    <div className="searchVid">
    <div className="user">
        <span className="name">Hello, John Mark</span>
        <span className="content">Here are your recorded videos</span>
    </div>
    <div className="searchBar">
        <img src="/img/search-normal.png" alt="search-normal" className='searchIcon' />
        <input type="text" className="search" placeholder='Search for a particular video'/>
    </div>
    </div>
    </div>

    <div className="filesWrap">
    <div className="files">
        <div className="vidFile">
            <span className="title">Recent files</span>
            <div className="vidDetailsWrap">
            <div className="vidDetails">
                <img src="/img/videoframe1.png" alt="videoframe1" className='vidFrame' />
                <div className="vidContent">
                    <span className="vidTitle">How to create Facebook Ad listing</span>
                    <div className="detailsIcon">
                        <img src="/img/link.png" alt="link" className='icon' />
                        <img src="/img/more.png" alt="more" className='icon'/>
                    </div>
                </div>
                <span className="date">SEPTEMBER 23, 2023</span>
            </div>
            <div className="vidDetails">
                <img src="/img/videoframe2.png" alt="videoframe1" className='vidFrame' />
                <div className="vidContent">
                    <span className="vidTitle">How to create Facebook Ad listing</span>
                    <div className="detailsIcon">
                        <img src="/img/link.png" alt="link" className='icon' />
                        <img src="/img/more.png" alt="more" className='icon'/>
                    </div>
                </div>
                <span className="date">SEPTEMBER 23, 2023</span>
            </div>
            </div>
        </div>
        <div className="vidFile">
            <span className="title">Files from last week</span>
            <div className="vidDetailsWrap">
            <div className="vidDetails">
                <img src="/img/videoframe1.png" alt="videoframe1" className='vidFrame' />
                <div className="vidContent">
                    <span className="vidTitle">How to create Facebook Ad listing</span>
                    <div className="detailsIcon">
                        <img src="/img/link.png" alt="link" className='icon' />
                        <img src="/img/more.png" alt="more" className='icon'/>
                    </div>
                </div>
                <span className="date">SEPTEMBER 23, 2023</span>
            </div>
            <div className="vidDetails">
                <img src="/img/videoframe2.png" alt="videoframe1" className='vidFrame' />
                <div className="vidContent">
                    <span className="vidTitle">How to create Facebook Ad listing</span>
                    <div className="detailsIcon">
                        <img src="/img/link.png" alt="link" className='icon' />
                        <img src="/img/more.png" alt="more" className='icon'/>
                    </div>
                </div>
                <span className="date">SEPTEMBER 23, 2023</span>
            </div>
            </div>
        </div>
    </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Videos