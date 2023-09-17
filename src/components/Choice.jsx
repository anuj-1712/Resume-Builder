import { Box, Button, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { Context } from "../contextapi/ContextApi";

export default function Choice() {
  const { selectedSection, setSelectedSection } = useContext(Context);
  const experience = ["Fresher", "Mid-Level", "Experienced"];
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        alignItems: "center",
        margin: "2rem auto",
        padding: "2rem 0",
        width: { xs: "90%", md: "80%" },
        maxWidth:"1080px",
        boxShadow: "5px 5px 10px lightgrey",
      }}
    >
      <Typography variant="p" sx={{ fontSize: "2rem", color: "#1976d2" }}>
        Are you a ?
      </Typography>
      <Box sx={{ display: "flex", gap:{xs:"0.5rem",sm:"1rem"},padding:"0.5rem",flexWrap:"wrap" }}>
        {experience.map((exp, index) => {
          return (
            <Button
              variant={selectedSection === exp ? "contained" : "outlined"}
              key={index}
              onClick={() => setSelectedSection(exp)}
              sx={{fontSize:{xs:"0.7rem",sm:"1rem"}}}
            >
              {exp}
            </Button>
          );
        })}
      </Box>
    </Box>
  );
}
