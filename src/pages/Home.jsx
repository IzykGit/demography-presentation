import React, { useEffect } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'

import homeCSS from "../styles/Home.module.css"

const Home = () => {

    useEffect(() => {
        AOS.init({
            duration: 400
        })
    })

    return (
        <>
        <div className={homeCSS.title}>
            <p>Welcome to the career of Demography</p>
        </div>
        <main className={homeCSS.main}>

            <div className={homeCSS.max_content_width}>



            <section className={homeCSS.introduction}>

                <h1>What is demography?</h1>
                <iframe src="https://www.youtube.com/embed/WRLdkTLVjl0" frameborder="0" height={381} width={675}></iframe>

            </section>




            <section className={homeCSS.overview_section}>

                <div className={homeCSS.overview_text} data-aos="fade-right">
                    <h2>Overview</h2>
                    <p>A demographer studies population dynamics and trends, including birth rates, migration, and aging.</p>
                </div>


                <img src='/people.jpg' alt='People walking' className={homeCSS.people_walking} data-aos="fade-left"/>
            </section>


            </div>
        </main>
        </>
    )
}

export default Home
