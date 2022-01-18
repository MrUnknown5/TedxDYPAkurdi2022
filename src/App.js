import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from "./pages/Home/Home";
import Team from "./pages/Team/Team";
import Speakers from "./pages/Speakers/Speakers";
import Sponsors from "./pages/Sponsors/Sponsors";
import TermsConditions from "./pages/TermsConditions/TermsConditions";
import Archive from "./pages/Archive/Archive";
import Error from "./pages/Error/Error";

function App() {
    return (
        <Router>
            <Routes>
				<Route exact path="/" element={<Home></Home>}></Route>
				<Route exact path="/home" element={<Home></Home>}></Route>
				<Route exact path="/team" element={<Team></Team>}></Route>
				<Route exact path="/speakers" element={<Speakers></Speakers>}></Route>
				<Route exact path="/sponsors" element={<Sponsors></Sponsors>}></Route>
				<Route exact path="/terms-and-condition" element={<TermsConditions></TermsConditions>}></Route>
				<Route exact path="/archive" element={<Archive></Archive>}></Route>
                <Route exact path="/error" element={<Error></Error>}></Route>
                <Route path="*" element={<Error/>}/>
            </Routes>
        </Router>
    );
}

export default App;