import React, { useContext, useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import Textarea from "@mui/joy/Textarea";
import { Context } from "../../contextapi/ContextApi";
import { IconContext } from "react-icons";
import { RxCross2 } from "react-icons/rx";

export default function Projects() {
  // states
  const { projects, setProjects } = useContext(Context);
  const [projectName, setProjectName] = useState("");
  const [projectLink, setProjectLink] = useState("");
  const [projectDetail, setProjectDetail] = useState("");
  const [id, setId] = useState(1);

  // this function add all the work projecterience user have to the resume
  const handleAddingprojects = () => {
    // confirming that there are no empty values
    if (!projectName || !projectDetail) {
      alert("fill the requred details");
    } else {
      setProjects((arr) => {
        return [
          ...arr,
          {
            id: projects.length + 1,
            projectName: `${projectName
              .charAt(0)
              .toUpperCase()}${projectName.slice(1, projectName.length)}`,
            projectLink: projectLink,
            projectDetail: projectDetail,
          },
        ];
      });
      setProjectName("");
      setProjectLink("");
      setProjectDetail("");
    }
  };

  // this function will remove a particular projecterience from the array
  const handleRemovingprojects = (index) => {
    projects.splice(index, 1);
    setProjects([...projects]);
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
        {/* -------- tabs area ---------- */}
        {projects.length >= 1 && (
          <Box sx={{ display: "flex", gap: "1rem", flexFlow: "wrap" }}>
            {projects.map((project, index) => {
              return (
                <IconContext.Provider value={{ size: "1.3rem" }} key={index}>
                  <Button
                    variant="outlined"
                    sx={{
                      display: "flex",
                      gap: "1rem",
                      alignItems: "center",
                      fontSize: { xs: "0.5rem", sm: "1rem" },
                    }}
                  >
                    {`Project ${project.id}`}
                    <RxCross2 onClick={() => handleRemovingprojects(index)} />
                  </Button>
                </IconContext.Provider>
              );
            })}
          </Box>
        )}

        {/* ------------------ form inputs and date picker ------------------*/}
        <Box
          sx={{
            display: "grid",
            gap: "1.5rem",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
          }}
        >
          <TextField
            variant="outlined"
            label="Project Name"
            onChange={(e) => setProjectName(e.target.value)}
            value={projectName}
          />
          <TextField
            variant="outlined"
            label="Project Link (optional)"
            onChange={(e) => setProjectLink(e.target.value)}
            value={projectLink}
          />
          <Textarea
            name="Neutral"
            placeholder="Project Description"
            variant="outlined"
            color="neutral"
            maxRows={12}
            minRows={8}
            onChange={(e) => setProjectDetail(e.target.value)}
            value={projectDetail}
            sx={{gridColumn:{sm:"1 / 3"}}}
          />
        </Box>
      </Box>

      {/* ------------------ control Buttons ------------------*/}
      <Button
        variant="contained"
        sx={{ margin: "2rem" }}
        onClick={handleAddingprojects}
      >
        Add
      </Button>
    </>
  );
}
