import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import Postjobs from '../pages/Postjobs';

function Index() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/postjobs" element={<Postjobs />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Index;
