import React from 'react'
// import '../Styles/home.css'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";

const Home = () => {
  return (
    <>
        <section className="home active">
            <div className="home-detail">
                <h1>Nihal</h1>
                <h2>I'm a Coder</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere itaque adipisci nulla iure blanditiis est a, rerum labore, nobis commodi voluptatibus sapiente maiores eum recusandae. Voluptatibus assumenda quibusdam recusandae iste     
                </p>
                <div className="btn-sci">
                    <a href="#" className='btn'>Download CV</a>
                    <div className="sci">
                        <a href="#"><FaGithub /></a>
                        <a href="#"><FaLinkedin /></a>
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaDiscord /></a>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Home