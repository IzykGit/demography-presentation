import Title from "../components/Title"

import factCSS from '../styles/Facts.module.css'


const Facts = () => {
    return (
        <>
        <Title />

        <main className={factCSS.facts_main}>

            <h1>Facts</h1>

            <div className={factCSS.facts_text}>
                <h2>Some Interesting Facts!</h2>


                <ul>
                    <li>The field has roots as far back as ancient Rome, where early population statistics were used to manage resources and military planning</li>
                    <li>They help predict the future by using data to learn about future population growth, and other predictions.</li>
                    <li>Some movie studios use demographic data to figure out what types of movies different age groups or areas of the world will like the most.</li>
                    <li>Demographers don’t just study people, they also look at things like jobs, education, housing, and even how long people live in different areas.</li>
                </ul>
            </div>
        </main>
        </>
    )
}

export default Facts
