import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/Information/About";
import Projects from "./components/Information/Projects";
import Contact from "./components/Information/Contact";
import Dashboard from "./Dashboard";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>

                    <Route path="/" element={<Dashboard />} />
                    {/* <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} /> */}
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
