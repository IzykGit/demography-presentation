
import Title from '../components/Title'
import { info } from '../data/information'
import infoCSS from '../styles/Information.module.css'

const Information = () => {
  return (
    <>
    <Title />
    <main className={infoCSS.info_main}>

        <div className={infoCSS.info_head}>
            <h2>Information</h2>
        </div>

        <div className={infoCSS.info_cards_container}>
            {info.map((item, index) => (
                <div key={index} className={infoCSS.info_card}>
                    <h3>{item.title}</h3>

                    <ul>
                    {item.bullets.map(bullet => (
                        <li key={bullet}>{bullet}</li>
                    ))}
                    </ul>
                </div>
            ))}
        </div>

    </main>
    </>
  )
}

export default Information
