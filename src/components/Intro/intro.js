import React from 'react'
import './intro.css';
import bg from '../../assets/image2.png'
import btnImg from '../../assets/hireme.png'
import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello, </span>
            <span className="introText">I'm 
                <span className="introName"> Reage</span><br/>
                Computer Science Student
            </span>
            <p className="introPara">I am a diligent student who is currently studying IT in Computer Science <br></br>and Informatics</p>
            <Link><button className="btn"><img src={btnImg} alt="Hire" className='btnImg' />Hire me</button> </Link>
        </div>
        <img src={bg} alt="Profile" className="bg"/>
    </section>
  )
}

export default Intro;