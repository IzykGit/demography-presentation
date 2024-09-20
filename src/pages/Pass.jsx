import { useNavigate } from 'react-router-dom'
import Title from '../components/Title'

const Pass = () => {

    const navigate = useNavigate()

    return (
        <>
        <Title />

        <main  style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem"}}>
            <h1>Eligibility Result</h1>

            <p  style={{ fontSize: "1.2rem", fontWeight: 400 }}>Congratulations! You are a great fit for a career in demography.</p>

            <button type='button' onClick={() => navigate("/")} className='custom_btn'>Back</button>
        </main>
        </>
    )
}

export default Pass
