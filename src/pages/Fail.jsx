import { useNavigate } from 'react-router-dom'
import Title from '../components/Title'

const Fail = () => {

    const navigate = useNavigate()

    return (
        <>
        <Title />

        <main style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem"}}>
            <h1>Eligibility Result</h1>

            <p style={{ fontSize: "1.2rem", fontWeight: 400 }}>It seems this career may not be the best fit for you. {`:(`} There are always other careers though. https://ca.indeed.com/</p>

            <button type='button' onClick={() => navigate("/")} className='custom_btn'>Back</button>
        </main>
        </>
    )
}

export default Fail
