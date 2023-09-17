import { Button, TextField, Box, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { Context } from "../../contextapi/ContextApi";
import { IconContext } from "react-icons";
import { RxCross2 } from "react-icons/rx";

export default function Achievements() {
  // states
  const { achievements, setAchievements } = useContext(Context);
  const [achievement, setAchievement] = useState("");

  // this function will add all the achievements a user have within the resume
  const handleAddingAchievements = () => {
    if (!achievement) {
      alert("fill the requred details")
    } else {
      setAchievements((arr) => {
        return [...arr, achievement];
      });
      setAchievement("");
    }
  };

  // this function can remove a particular achievement
  const handleRemovingAchievements = (index) => {
    achievements.splice(index, 1);
    setAchievements([...achievements]);
  };
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
          label="Add an Achievement"
          onChange={(e) => setAchievement(e.target.value)}
          value={achievement}
        />
        {achievements.length >= 1 && (
          <Box sx={{ display: "flex", gap: "1rem", flexDirection: "column" }}>
            {achievements.map((achievement, index) => {
              return (
                <IconContext.Provider value={{ size: "1.3rem" }} key={index}>
                  <Typography
                    variant="p"
                    sx={{
                      bgcolor: "#1976d2",
                      color: "white",
                      padding: "0.5rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "0.5rem",
                      fontSize:{xs:"0.5rem",sm:"1rem"}
                    }}
                  >
                    {achievement}
                    <RxCross2
                      onClick={() => handleRemovingAchievements(index)}
                    />
                  </Typography>
                </IconContext.Provider>
              );
            })}
          </Box>
        )}
      </Box>
      <Button variant="contained" sx={{margin:"2rem"}} onClick={handleAddingAchievements}>Add</Button>
    </>
  );
}
