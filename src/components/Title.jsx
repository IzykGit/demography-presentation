
import { useNavigate } from 'react-router-dom'
import titleCSS from '../styles/Title.module.css'

const Title = () => {

    const navigate = useNavigate()

    return (
        <div className={titleCSS.title_container}>
            <p>Welcome to the career of Demography</p>

            <button type='button' onClick={() => navigate("/information")}>Information</button>
            <button type='button' onClick={() => navigate("/overview")}>overview</button>
        </div>
    )
}

export default Title
