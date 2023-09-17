import React, { useContext, useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
} from "@mui/material";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Context } from "../../contextapi/ContextApi";
import { IconContext } from "react-icons";
import { RxCross2 } from "react-icons/rx";

export default function Education() {
  // states
  const { educationInfo, setEducationInfo } = useContext(Context);
  const [institute, setInstitute] = useState("");
  const [degree, setDegree] = useState("");
  const [startYear, setStartYear] = useState("");
  const [endYear, setEndYear] = useState("");
  const [current, setCurrent] = useState(false);

  // this function will add all the details regarding the education of the user and save it
  const handleEducationInfo = () => {
    if (!degree || !institute || !startYear || (!endYear && !current)) {
      alert("fill the requred details");
    } else {
      setEducationInfo((arr) => {
        return [
          ...arr,
          {
            id: educationInfo.length + 1,
            institute: institute,
            degree: `${degree.charAt(0).toUpperCase()}${degree.slice(
              1,
              degree.length
            )}`,
            startYear: startYear,
            endYear: endYear,
            current: current,
          },
        ];
      });
      setInstitute("");
      setDegree("");
      setEndYear(dayjs("MM/DD/YYYY"));
      setStartYear(dayjs("MM/DD/YYYY"));
    }
  };

  // this function will delete all the details regarding the particular education info of the user
  const handleRemovingEducationInfo = (index) => {
    educationInfo.splice(index, 1);
    setEducationInfo([...educationInfo]);
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
      {/* --------------------------Tabs-------------------------- */}
        {educationInfo.length >= 1 && (
          <Box sx={{ display: "flex", gap: "1rem", flexFlow: "wrap" }}>
            {educationInfo.map((education, index) => {
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
                    {`Education ${education.id}`}
                    <RxCross2
                      onClick={() => handleRemovingEducationInfo(index)}
                    />
                  </Button>
                </IconContext.Provider>
              );
            })}
          </Box>
        )}

        {/* -------------------Form Inputs and date picker------------------- */}
        <Box
          sx={{
            display: "grid",
            gap: "1.5rem",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
          }}
        >
          <TextField
            variant="outlined"
            label="Institute"
            onChange={(e) => setInstitute(e.target.value)}
            value={institute}
          />
          <TextField
            variant="outlined"
            label="Degree"
            onChange={(e) => setDegree(e.target.value)}
            value={degree}
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
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  onChange={(e) => setCurrent(e.target.checked)}
                  value={current}
                />
              }
              label="Currently attending"
            />
          </FormGroup>
        </Box>
      </Box>

      {/* -------------------Save Button------------------- */}
      <Button
        variant="contained"
        sx={{ margin: "2rem" }}
        onClick={handleEducationInfo}
      >
        Add
      </Button>
    </>
  );
}
