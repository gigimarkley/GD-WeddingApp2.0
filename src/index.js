import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import RSVP from "./pages/RSVP";
import Photos from "./pages/Photos";
import Gifts from "./pages/Gifts";
import Details from "./pages/Details";
import WeddingParty from "./pages/WeddingParty";
import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="RSVP" element={<RSVP />} />
          <Route path="Photos" element={<Photos />} />
          <Route path="Gifts" element={<Gifts />} />
          <Route path="Details" element={<Details />} />
          <Route path="WeddingParty" element={<WeddingParty />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));