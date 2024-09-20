
import overviewCSS from '../styles/Overview.module.css'
import Title from '../components/Title'

const Overview = () => {
    return (
        <>
        <Title />
        <main className={overviewCSS.overview_section}>

            <div className={overviewCSS.overview_text}>
                <h2>Overview</h2>
                <p>A demographer is an expert in the study of statistics relating to the changing structure of human populations.
                They study birth and death rates, gender ratios, living rations and conditions as well as changes in the marriage or divorce rates.</p>
            </div>


            <img src='/people.jpg' alt='People walking' className={overviewCSS.people_walking}/>
        </main>
        </>
    )
}

export default Overview
