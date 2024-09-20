import Title from "../components/Title"

import jobCSS from '../styles/Jobs.module.css'

const Jobs = () => {
    return (
        <>
        <Title />
        <main className={jobCSS.jobs_main}>
            <h1>How do you become a demographer?</h1>


            <section className={jobCSS.education}>

                <div className={jobCSS.education_text}>
                    <h2>Education Required:</h2>

                    <ul>
                        <li>Courses in statistics, data analysis, and research methodology.</li>
                        <li>{`Bachelor's`} degree in sociology, economics, or related fields.</li>
                    </ul>
                </div>


                {/* <img src="./books.jpg" alt="Books"/> */}
            </section>


            <section className={jobCSS.fields}>
                <h2>Some Jobs in the Demography field include:</h2>


                <ul>
                    <li>
                        <h3>Research Analyst:</h3>
                        <p>Demographers working as research analysts collect and analyze population data. They help with research projects, write reports,
                        and share their findings to help make decisions about things like city planning, public health, or social policies.</p>
                    </li>
                    <li>
                        <h3>Population Planner:</h3>
                        <p>Population planners use demographic data and predictions to help create policies and programs about population growth, city development, and resource management.
                        They look at population trends and how different factors affect them to give advice on how to manage resources better.</p>
                    </li>
                    <li>
                        <h3>Data Scientist:</h3>
                        <p>Demographers with data science skills use advanced statistical tools and computer programs to study large sets of population data.
                        They use machine learning and other techniques to find patterns, make predictions, and learn from the data.</p>
                    </li>
                    <li>
                        <h3>Public Health Specialist:</h3>
                        <p>Demographers who focus on public health study population health issues like disease rates, death rates, and health inequalities.
                        They look at how social factors affect health and help create public health policies and interventions.</p>
                    </li>
                    <li>
                        <h3>Market Research Analyst:</h3>
                        <p>Demographers in market research study population data to identify consumer trends and target specific groups of people. They analyze consumer behavior, market, and population characteristics to help businesses make better decisions about product development and marketing strategies.</p>
                    </li>
                </ul>
            </section>

            <div className={jobCSS.salary}>
                <h3>A demographer with 1-3 years of experience earns an average salary of $69,649. On the other end, a demographer with 8+ years of experience earns an average salary of $121,611.</h3>
            </div>
        </main>
        </>
    )
}

export default Jobs
