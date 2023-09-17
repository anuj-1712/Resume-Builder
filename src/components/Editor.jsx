import React, { useContext, useState } from "react";
import { Tabs, Tab, Box, Typography, Button } from "@mui/material";
import BasicInfo from "./Forms/BasicInfo";
import Workex from "./Forms/Workex";
import Education from "./Forms/Education";
import Skills from "./Forms/Skills";
import Summary from "./Forms/Summary";
import Achievements from "./Forms/Achievements";
import Other from "./Forms/Other";
import { Context } from "../contextapi/ContextApi";
import Projects from "./Forms/Projects";

export default function Editor() {
  const {midLevelSections,selectedSection,studentSections,experiencedSections} = useContext(Context)
  const [value, setValue] = useState(0);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Box
        sx={{
          width: { xs: "90%", md: "80%" },
          margin: "2rem auto",
          minHeight:"450px",
          boxShadow: "5px 5px 10px lightgrey",
          maxWidth:"1080px",
          paddingBottom:"2rem"
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons={false}
          aria-label="scrollable prevent tabs example"
          sx={{width:"90%",margin:"0 auto"}}
        >
        {/* -------------------------student tabs------------------------- */}
        {selectedSection === "Fresher" && studentSections.map((section,index)=>{
          return(
            <Tab label={section} key={index}/>
          )
        })}

        {/* -------------------------mid-level tabs------------------------- */}
        {selectedSection === "Mid-Level" && midLevelSections.map((section,index)=>{
          return(
            <Tab label={section} key={index}/>
          )
        })}

        {/* -------------------------experienced tabs------------------------- */}
        {selectedSection === "Experienced" && experiencedSections.map((section,index)=>{
          return(
            <Tab label={section} key={index}/>
          )
        })}
        </Tabs>

      {/* all the sections of freshers */}
      {value === 0 && selectedSection==="Fresher" && <BasicInfo />}
      {value === 1 && selectedSection==="Fresher" && <Summary />}
      {value === 2 && selectedSection==="Fresher" && <Education />}
      {value === 3 && selectedSection==="Fresher" && <Workex />}
      {value === 4 && selectedSection==="Fresher" && <Projects />}
      {value === 5 && selectedSection==="Fresher" && <Skills />}
      {value === 6 && selectedSection==="Fresher" && <Achievements />}
      {value === 7 && selectedSection==="Fresher" && <Other />}

      {/* all the sections of mid-level  */}  
      {value === 0 && selectedSection==="Mid-Level" && <BasicInfo />}
      {value === 1 && selectedSection==="Mid-Level" && <Summary />}
      {value === 2 && selectedSection==="Mid-Level" && <Education />}
      {value === 3 && selectedSection==="Mid-Level" && <Workex />}
      {value === 4 && selectedSection==="Mid-Level" && <Skills />}
      {value === 5 && selectedSection==="Mid-Level" && <Achievements />}
      {value === 6 && selectedSection==="Mid-Level" && <Other />}

      {/* all the sections of experienced level */}
      {value === 0 && selectedSection==="Experienced" && <BasicInfo />}
      {value === 1 && selectedSection==="Experienced" && <Summary />}
      {value === 2 && selectedSection==="Experienced" && <Education />}
      {value === 3 && selectedSection==="Experienced" && <Workex />}
      {value === 4 && selectedSection==="Experienced" && <Skills />}
      {value === 5 && selectedSection==="Experienced" && <Other />}
      </Box>
    </>
  );
}
