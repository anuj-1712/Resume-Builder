import React, { useContext } from "react";
import "./App.css";
import Header from "./components/Header";
import { Context } from "./contextapi/ContextApi";
import Hero from "./components/Hero";
import Editor from "./components/Editor";
import MidLevelResume from "./components/ResumeTemplates/MidLevelResume";
import Choice from "./components/Choice";
import FresherResume from "./components/ResumeTemplates/FresherResume";
import ExperiencedResume from "./components/ResumeTemplates/ExperiencedResume";

function App() {
  const {selectedSection} = useContext(Context)
  return (
    <>
        <Header />
        <Hero />
        <Choice />
        <Editor />
        {selectedSection === "Fresher" && <FresherResume />}
        {selectedSection === "Mid-Level" && <MidLevelResume />}
        {selectedSection === "Experienced" && <ExperiencedResume />}
    </>
  );
}

export default App;
