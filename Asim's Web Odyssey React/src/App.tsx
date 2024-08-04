import { Box } from "@chakra-ui/react";
import HomePage from "./components/HomePage";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Education from "./components/Education";
import SkillsPage from "./components/SkillsPage";
import { useState } from "react";

const App = () => {
  let [tab, setTab] = useState("home");

  return (
    <div>
      <Box position="fixed" top="0" width="100vw" zIndex="1000">
        <Navbar onSelectTab={setTab} tab={tab} />
      </Box>
      <Box marginTop={"6rem"}>
        {tab === "home" && <HomePage />}
        {tab === "contact" && <Contact />}
        {tab === "skills" && <SkillsPage />}
        {tab === "education" && <Education />}
      </Box>
    </div>
  );
};

export default App;
