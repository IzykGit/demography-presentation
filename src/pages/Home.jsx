

import homeCSS from "../styles/Home.module.css"
import Title from '../components/Title'

const Home = () => {


    return (
        <>
        <Title />
        <main className={homeCSS.main}>

            <div className={homeCSS.max_content_width}>



            <section className={homeCSS.introduction}>

                <h1>What is demography?</h1>
                <iframe src="https://www.youtube.com/embed/WRLdkTLVjl0" height={381} width={675}></iframe>
                
            </section>

            </div>
        </main>
        </>
    )
}

export default Home
