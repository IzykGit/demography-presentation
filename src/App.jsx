import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Overview from "./pages/Overview"
import Information from "./pages/Information"
import Jobs from "./pages/Jobs";
import Facts from "./pages/Facts";
import Eligible from "./pages/Eligible";

import { NavBarProvider } from './context/NavBarContext';
import Pass from "./pages/Pass";
import Fail from "./pages/Fail";

const App = () => {
    return (
        <NavBarProvider>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/overview" element={<Overview />} />
                <Route path="/information" element={<Information />}/>
                <Route path="/jobs" element={<Jobs />}/>
                <Route path="/facts" element={<Facts />}/>
                <Route path="/eligibility" element={<Eligible />} />
                <Route path="/pass" element={<Pass />}/>
                <Route path="/fail" element={<Fail />}/>
            </Routes>
        </BrowserRouter>
        </NavBarProvider>
    )
}

export default App
