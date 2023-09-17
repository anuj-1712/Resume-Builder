import React, { useContext, useState } from "react";
import {
  Box,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
} from "@mui/material";
import { Context } from "../../contextapi/ContextApi";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { IconContext } from "react-icons";
import { RxCross2 } from "react-icons/rx";

export default function Workex() {
  // states
  const { workExperience, setWorkExperience } = useContext(Context);
  const [company, setCompany] = useState("");
  const [role, setrole] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [startYear, setStartYear] = useState("");
  const [endYear, setEndYear] = useState("");
  const [current, setCurrent] = useState(false);

  // this function add all the work experience user have to the resume
  const handleAddingExperience = () => {
    // confirming that there are no empty values
    if (
      !company ||
      !role ||
      !location ||
      !startYear ||
      (!endYear && !current)
    ) {
      alert("fill the requred details");
    } else {
      setWorkExperience((arr) => {
        return [
          ...arr,
          {
            id: workExperience.length + 1,
            company: `${company.charAt(0).toUpperCase()}${company.slice(
              1,
              company.length
            )}`,
            role: `${role.charAt(0).toUpperCase()}${role.slice(
              1,
              role.length
            )}`,
            location: `${location.charAt(0).toUpperCase()}${location.slice(
              1,
              location.length
            )}`,
            description: description,
            startYear: startYear,
            endYear: endYear,
            current: current,
          },
        ];
      });
      setCompany("");
      setLocation("");
      setrole("");
      setDescription("");
      setEndYear(dayjs("MM/DD/YYYY"));
      setStartYear(dayjs("MM/DD/YYYY"));
    }
  };

  // this function will remove a particular experience from the array
  const handleRemovingworkExperience = (index) => {
    workExperience.splice(index, 1);
    setWorkExperience([...workExperience]);
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
        {workExperience.length >= 1 && (
          <Box sx={{ display: "flex", gap: "1rem", flexFlow: "wrap" }}>
            {workExperience.map((exp, index) => {
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
                    {`Work Experience ${exp.id}`}
                    <RxCross2
                      onClick={() => handleRemovingworkExperience(index)}
                    />
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
            label="Company"
            onChange={(e) => setCompany(e.target.value)}
            value={company}
          />
          <TextField
            variant="outlined"
            label="Title/Job Role"
            onChange={(e) => setrole(e.target.value)}
            value={role}
          />
          <TextField
            variant="outlined"
            label="City"
            onChange={(e) => setLocation(e.target.value)}
            value={location}
          />
          <TextField
            variant="outlined"
            label="Description"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker", "DatePicker"]}>
              <DatePicker
                label="Start Year"
                value={startYear}
                onChange={(newValue) => setStartYear(newValue)}
              />
            </DemoContainer>
          </LocalizationProvider>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker", "DatePicker"]}>
              <DatePicker
                label="End Year"
                value={endYear}
                onChange={(newValue) => setEndYear(newValue)}
                disabled={current ? true : false}
              />
            </DemoContainer>
          </LocalizationProvider>
        </Box>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox onChange={(e) => setCurrent(e.target.checked)} />
            }
            label="Currently attending"
          />
        </FormGroup>
      </Box>

      {/* ------------------ control Buttons ------------------*/}
      <Button
        variant="contained"
        sx={{ margin: "2rem" }}
        onClick={handleAddingExperience}
      >
        Add
      </Button>
    </>
  );
}
