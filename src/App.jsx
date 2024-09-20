import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Overview from "./pages/Overview"
import Information from "./pages/Information"
import Jobs from "./pages/Jobs";

import { NavBarProvider } from './context/NavBarContext';


const App = () => {
    return (
        <NavBarProvider>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/overview" element={<Overview />} />
                <Route path="/information" element={<Information />}/>
                <Route path="/jobs" element={<Jobs />}/>
            </Routes>
        </BrowserRouter>
        </NavBarProvider>
    )
}

export default App
