import React from 'react'
import './Footer.css'
import youtube_icon from '../../assets/youtube_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'
function Footer() {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={youtube_icon} alt="" />
        <img src={facebook_icon} alt="" />
        <img src={twitter_icon} alt="" />
        <img src={instagram_icon} alt="" />
      </div>
      <ul>
  <li>Help Center</li>
  <li>Account</li>
  <li>Media Center</li>
  <li>Investor Relations</li>
  <li>Jobs</li>
  <li>Ways to Watch</li>
  <li>Terms of Use</li>
  <li>Privacy</li>
  <li>Cookie Preferences</li>
  <li>Corporate Information</li>
  <li>Contact Us</li>
  <li>Speed Test</li>
  <li>Legal Notices</li>
  <li>Only on Netflix</li>
</ul>
<p className='copyright'>

  <p>&copy; 2024 Netflix, Inc. All rights reserved.</p>
  <p>Terms of Use | Privacy | Cookie Preferences|Corporate Information</p>


</p>
    </div>
  )
}

export default Footer