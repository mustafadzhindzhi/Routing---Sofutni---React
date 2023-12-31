import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Contacts from "./components/Contacts.jsx";
import CharacterList from "./components/CharactersList.jsx";
import CharacterDetails from "./components/CharacterDetails.jsx";
import NotFound from "./components/NotFound.jsx";

import AboutUs from "./components/AboutUs.jsx";
import Mission from "./components/Mission.jsx";
import OurValues from "./components/OurValues.jsx";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/*" element={<About />} >
            <Route path="us" element={<AboutUs />} />
            <Route path="mission" element={<Mission />} />
            <Route path="values" element={<OurValues />} />
        </Route>
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/characters" element={<CharacterList />} />
        <Route path="/characters/:id" element={<CharacterDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <footer>All rights are reserved &copy;</footer>
    </>
  );
}

export default App;
