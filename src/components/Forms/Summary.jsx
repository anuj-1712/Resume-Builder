import { Box, Button } from "@mui/material";
import Textarea from "@mui/joy/Textarea";
import React, { useContext, useState } from "react";
import { Context } from "../../contextapi/ContextApi";

export default function Summary() {
  // states
  const { setSummary } = useContext(Context);
  const [desc, setDesc] = useState("");

  // this function will add the summary within the summary section in the resume
  const handleSummary = () => {
    if (!desc) {
      alert("fill the requred details");
    } else {
      setSummary(desc);
    }
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
        <Textarea
          name="Neutral"
          placeholder="Description"
          variant="outlined"
          color="neutral"
          maxRows={14}
          minRows={10}
          onChange={(e) => setDesc(e.target.value)}
        />
      </Box>
      <Button
        variant="contained"
        sx={{ margin: "2rem" }}
        onClick={handleSummary}
      >
        Add
      </Button>
    </>
  );
}
