import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Image from "./Image";

export default function Hero() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        alignItems: "center",
        justifyContent: { xs: "space-between", lg: "center" },
        gap: "1rem",
        padding: "2rem",
        backgroundColor: "#E7EAF3",
        width: "100%",
      }}
    >
      {/* -------------------hero-content---------------- */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
          width: { xs: "98%", sm: "45%" },
          maxWidth: "500px",
        }}
      >
        <Typography
          variant="h2"
          sx={{ fontSize: { xs: "1.5rem", sm: "2rem" }, fontWeight: "bold" }}
        >
          The Ultimate Resume Builder
        </Typography>
        <Typography variant="p">
          Build beautiful, recruiter-tested resumes in a few clicks! Our resume
          builder is powerful and easy to use, with a range of amazing
          functions. Custom-tailor resumes for any job within minutes. Increase
          your interview chances and rise above the competition.
        </Typography>
        <Button variant="contained" sx={{ maxWidth: "250px" }}>
          Build Your Resume
        </Button>
      </Box>

      {/* -------------------hero-image------------------- */}
      <Image
        url={
          "https://images.pexels.com/photos/5989925/pexels-photo-5989925.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
        height={""}
        width={"70%"}
        minWidth={"200px"}
        maxWidth={"400px"}
        minHeight={"200px"}
        maxHeight={"300px"}
      />
    </Box>
  );
}
