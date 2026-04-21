import React from 'react'
import "../css/intro.css"
import me from "../assets/me.jpeg"
import email from "../assets/email.png"
import maps from "../assets/map.png"
import linked from "../assets/linked.webp"
const Intro = () => {
    return (
        <div className='self'>
            <div className='self-pic'>
                <img src={me} alt='ananya_narang' />
            </div>
            <div className='intro'>
                <h1>Ananya Narang</h1>
                <span>heheananya</span>
                <p>Data Analysis enthusiast proficient in Tableau, Excel, Google Sheets, Google Colab, MySQL, and MongoDB. Currently expanding expertise with Power BI. Passionate about transforming raw data into meaningful insights.</p>
                <a href='ananyanarang1411@gmail.com'><button>Folow/Connect</button></a>
            </div>
            <div className='details'>
                <div className='detail-info'>
                    <img src={maps} alt="location" /> <span>New Delhi</span>
                </div>
                <a href='mailto:ananyanarang1411@gmail.com' className='detail-info'>
                    <img src={email} alt="email" /> <span>ananyanarang1411@gmail.com</span>
                </a>
                <a href='https://www.linkedin.com/in/ananya-narang-776128246' target="_blank" rel="noreferrer" className='detail-info'>
                    <img src={linked} alt="linkedin" /> <span>LinkedIn</span>
                </a>
            </div>
        </div>
    )
}

export default Intro