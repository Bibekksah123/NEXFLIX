import React from 'react'
import './Home.css'
import Navbar from '../../component/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import Title from '../../component/Title/Title'
import Footer from '../../component/Footer/Footer'

function Home() {
  return (
    <div className='home'>
      <Navbar/>
      <div className="hero">
        <img src={hero_banner} alt="" className='bannerimg' />
        <div className="herocaption">
          <img src={hero_title} alt="" className='caption-img' />
          <p>"In a world where every ally hides a secret and every shadow holds a threat, trust is a luxury no one can afford. Twists, lies, and betrayal blur the line between truth and deception. Who can you trust?"</p>
          <div className="herobtn">
            <button className='btn'><img src={play_icon} className='play' alt="" /></button>
            <button className='btn darkbtn'><img src={info_icon} className='play' alt="" />More Info</button>
          </div>
          <Title/>
        </div>
      </div>
      <div className="morecards">
        <Title title={"BlockBuster Movies"}/>
        <Title title={"Only On Netflix"}/>
        <Title title={"Upcomming"}/>
        <Title title={"Only For You ❤️"}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home