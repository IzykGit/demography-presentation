import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Overview from "./pages/Overview"
import Information from "./pages/Information"

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/overview" element={<Overview />} />
                <Route path="/information" element={<Information />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
