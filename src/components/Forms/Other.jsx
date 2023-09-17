import { Box, Button, TextField } from "@mui/material";
import React, { useContext, useMemo, useRef, useState } from "react";
import { Context } from "../../contextapi/ContextApi";
import JoditEditor from "jodit-react";
import parse from "html-react-parser";

export default function Other() {
  // required variables for text editor
  const editor = useRef(null);
  const config = useMemo(
    () => ({
        readonly: false,
        height:"400px",
        placeholder:"Description..." 
    }),
    []
);

  // states
  const { setOtherSection, setOtherContent } = useContext(Context);
  const [sectionName, setSectionName] = useState("");
  const [content, setContent] = useState("");
  
  // this function will add another section and the content within it to the resume
  const handleOtherSection = () => {
    if (!content || !sectionName) {
      alert("fill the requred details");
    } else {
      setOtherContent(parse(content));
      setOtherSection(sectionName);
      setContent("");
      setSectionName("");
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
        <TextField
          variant="outlined"
          label="Section Name"
          onChange={(e) => setSectionName(e.target.value)}
          value={sectionName}
        />
        <JoditEditor
          ref={editor}
          value={content}
          onChange={(newContent) => {
            setContent(newContent);
          }}
          config={config}
        />
      </Box>
      <Button
        variant="contained"
        sx={{ margin: "2rem" }}
        onClick={handleOtherSection}
      >
        Add
      </Button>
    </>
  );
}
