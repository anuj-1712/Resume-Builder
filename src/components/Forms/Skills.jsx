import { Button, TextField, Box, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { Context } from "../../contextapi/ContextApi";
import { IconContext } from "react-icons";
import {RxCross2} from "react-icons/rx"

export default function Skills() {
  // states
  const { skills, setSkills } = useContext(Context);
  const [skill, setSkill] = useState("");

  // this function will add all the skills user have within the skills section
  const handleAddingSkills = () => {
    if (!skill) {
      alert("fill the requred details")
    } else {
      setSkills((arr) => {
        return [...arr, skill];
      });
      setSkill("");
    }
  };

  // this function will remove a particular skill
  const handleRemovingSkills = (index) =>{
    skills.splice(index,1)
    setSkills([...skills])
  }
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          padding: "2rem",
        }}
      >
        <TextField
          variant="outlined"
          label="Add a Skill"
          onChange={(e) => setSkill(e.target.value)}
          value={skill}
        />

        {skills.length >= 1 && (
          <Box sx={{ display: "flex", gap: "0.5rem",flexFlow:"wrap" }}>
            {skills.map((skill, index) => {
              return (
                <IconContext.Provider value={{size:"1.3rem"}} key={index}>
                  <Typography
                    variant="p"
                    sx={{
                      bgcolor: "#1976d2",
                      color: "white",
                      padding: "0.5rem",
                      display:"flex",
                      alignItems:"center",
                      gap:"0.5rem",
                      fontSize:{xs:"0.5rem",sm:"1rem"}
                    }}
                  >
                    {skill.toUpperCase()}
                    <RxCross2 onClick={()=>handleRemovingSkills(index)}/>
                  </Typography>
                </IconContext.Provider>
              );
            })}
          </Box>
        )}
      </Box>
      <Button variant="contained" sx={{margin:"2rem"}} onClick={handleAddingSkills}>Add</Button>
    </>
  );
}
