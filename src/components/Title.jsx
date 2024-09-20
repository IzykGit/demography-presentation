import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import titleCSS from '../styles/Title.module.css'


import { motion } from "framer-motion"
import NavBarContext from '../context/NavBarContext';
import { buttonVariants, navVariants } from '../data/framer-variants'

const Title = () => {

    const navigate = useNavigate()

    const { isOpen, toggleNav } = useContext(NavBarContext);

    return (
        <div className={titleCSS.title_container}>
            <p>Career of Demography</p>

            <motion.div className={titleCSS.hamburger_menu} onClick={() => toggleNav()} animate={ isOpen ? { rotate: 90 } : { rotate: 0 } }>
                <div></div>
                <div></div>
                <div></div>
            </motion.div>

            <motion.nav initial={false} className={titleCSS.nav} variants={navVariants} animate={isOpen ? "open" : "closed"} onMouseLeave={() => toggleNav()}>

                <motion.button className={titleCSS.nav_button} type="button" onClick={() => navigate("/overview")}
                variants={buttonVariants} animate={isOpen ? "open" : "closed"}>Overview</motion.button>
                
                <motion.button className={titleCSS.nav_button} type="button" onClick={() => navigate("/information")}
                variants={buttonVariants} animate={isOpen ? "open" : "closed"}>Information</motion.button>

                <motion.button className={titleCSS.nav_button} type="button" onClick={() => navigate("/jobs")}
                variants={buttonVariants} animate={isOpen ? "open" : "closed"}>Education/Jobs</motion.button>

                <motion.button className={titleCSS.nav_button} type="button" onClick={() => navigate("/facts")}
                variants={buttonVariants} animate={isOpen ? "open" : "closed"}>Facts</motion.button>

                <motion.button className={titleCSS.nav_button} type="button" onClick={() => navigate("/eligibility")}
                variants={buttonVariants} animate={isOpen ? "open" : "closed"}>Check Eligibility</motion.button>

                <motion.button className={titleCSS.nav_button} type="button" onClick={() => navigate("/")}
                variants={buttonVariants} animate={isOpen ? "open" : "closed"}>Home</motion.button>

            </motion.nav>
        </div>
    )
}

export default Title
