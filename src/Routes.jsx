import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Materi from "./pages/materi";

const Routing = () => {
    return(
        <React.Suspense fallback={<>Loading...</>}>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/materi" element={<Materi />} />
                </Routes>
            </Router>
        </React.Suspense>
    );
}

export default Routing;



