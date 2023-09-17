import React, { createContext, useState } from "react";

export const Context = createContext();

export const AppContext = (props) => {
  // data
  const studentSections = [
    "Basic Info",
    "Summary",
    "Education",
    "Work Experience",
    "Projects",
    "Skills",
    "Achievements",
    "Other",
  ];
  const midLevelSections = [
    "Basic Info",
    "Summary",
    "Education",
    "Work Experience",
    "Skills",
    "Achievements",
    "Other",
  ];
  const experiencedSections = [
    "Basic Info",
    "Summary",
    "Education",
    "Work Experience",
    "Skills",
    "Other",
  ];
  // states
  const [basicInfo, setBasicInfo] = useState({});
  const [educationInfo, setEducationInfo] = useState([]);
  const [workExperience, setWorkExperience] = useState([]);
  const [projects, setProjects] = useState([]);
  const [summary, setSummary] = useState("");
  const [skills, setSkills] = useState([]);
  const [achievements, setAchievements] = useState([]);
  const [otherSection, setOtherSection] = useState("");
  const [otherContent, setOtherContent] = useState("");
  const [selectedSection, setSelectedSection] = useState("Mid-Level");
  return (
    <Context.Provider
      value={{
        basicInfo,
        setBasicInfo,
        educationInfo,
        setEducationInfo,
        summary,
        setSummary,
        achievements,
        setAchievements,
        skills,
        setSkills,
        workExperience,
        setWorkExperience,
        otherContent,
        setOtherContent,
        otherSection,
        setOtherSection,
        selectedSection,
        setSelectedSection,
        studentSections,
        midLevelSections,
        experiencedSections,
        projects,
        setProjects,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
