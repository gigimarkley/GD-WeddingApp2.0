import './App.css';
import { BrowserRouter as Router, Routes, Route}
	from 'react-router-dom';
import Layout from "./components/Layout";
import Home from "./pages/Home"
import RSVP from "./pages/RSVP";
import Photos from "./pages/Photos";
import Gifts from "./pages/Gifts";
import Details from "./pages/Details";
import WeddingParty from "./pages/WeddingParty";
import OurStory from "./pages/OurStory"
import React from 'react';


function App() {
return (
	<Router>
	<Routes>
    <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="OurStory" element={<OurStory />} />
          <Route path="RSVP" element={<RSVP />} />
          <Route path="Photos" element={<Photos />} />
          <Route path="Gifts" element={<Gifts />} />
          <Route path="Details" element={<Details />} />
          <Route path="WeddingParty" element={<WeddingParty />} />
          <Route path="*" element={<Home />} />
        </Route>
	</Routes>
	</Router>
);
}

export default App;
