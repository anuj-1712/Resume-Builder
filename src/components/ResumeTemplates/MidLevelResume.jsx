import { Box, Button, Link, Typography } from "@mui/material";
import React, { useContext, useRef } from "react";
import { Context } from "../../contextapi/ContextApi";
import ReactToPrint from "react-to-print";
import { IconContext } from "react-icons";
import { TfiEmail } from "react-icons/tfi";
import {
  AiOutlinePhone,
  AiOutlineLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";

export default function MidLevelResume() {
  // states
  const {
    basicInfo,
    summary,
    skills,
    educationInfo,
    achievements,
    workExperience,
    otherSection,
    otherContent,
  } = useContext(Context);
  
  // variable required for printing the document
  const pdfRef = useRef();
  return (
    <>
      <Box
        sx={{
          display: { xs: "flex" },
          flexDirection: "column",
          minHeight: {sm:"800px"},
          width: {xs:"90%",md:"80%"},
          maxWidth: "1080px",
          margin: "2rem auto",
          padding: {xs:"0.5rem",sm:"1rem"},
          boxShadow: "5px 5px 10px lightgrey",
          border: "2px solid lightgrey",
          backgroundColor: "#ffffff",
        }}
        ref={pdfRef}
      >
        {/* --------------basic info section-------------------- */}
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "0.7rem", sm: "2rem" },
            color: "#0394cf",
          }}
        >
          {basicInfo?.name ? basicInfo?.name.toUpperCase() : "John Smith"}
        </Typography>
        <Typography variant="p" sx={{ fontSize: { xs: "0.5rem", sm: "1rem" } }}>
          {basicInfo?.title
            ? basicInfo?.title.toUpperCase()
            : "FULL-STACK DEVELOPER"}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexFlow: "wrap",
            justifyContent: "space-evenly",
            gap: {xs:"0.5rem",sx:"2rem"},
            margin: "1rem 0 0.7rem 0",
          }}
        >
          <IconContext.Provider value={{ className: "contact-icons" }}>
            <Box sx={{ display: "flex", gap: {xs:"0.2rem",sm:"0.5rem"},alignItems:"center" }}>
              <TfiEmail />
              <Typography variant="p" sx={{fontSize:{xs:"0.5rem",sm:"1rem"}}}>
                {basicInfo?.email ? basicInfo?.email : "johnSmith10@gmail.com"}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: {xs:"0.2rem",sm:"0.5rem"},alignItems:"center" }}>
              <AiOutlinePhone />
              <Typography variant="p" sx={{fontSize:{xs:"0.5rem",sm:"1rem"}}}>
                {basicInfo?.mobileNo ? basicInfo?.mobileNo : "+1 234-567-890"}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: {xs:"0.2rem",sm:"0.5rem"},alignItems:"center" }}>
              <AiOutlineLinkedin />
              <Link href={basicInfo?.linkedin ? basicInfo?.linkedin : ""} sx={{fontSize:{xs:"0.5rem",sm:"1rem"}}}>
                LinkedIn
              </Link>
            </Box>
            <Box sx={{ display: "flex", gap: {xs:"0.2rem",sm:"0.5rem"},alignItems:"center" }}>
              <AiOutlineGithub />
              <Link href={basicInfo?.github ? basicInfo?.github : ""} sx={{fontSize:{xs:"0.5rem",sm:"1rem"}}}>
                GitHub
              </Link>
            </Box>
          </IconContext.Provider>
        </Box>

        {/* -------------------summary section----------------------- */}
        <Typography
          variant="h5"
          sx={{
            width: "100%",
            borderBottom: "1px solid black",fontSize:{xs:"0.7rem",sm:"1rem"},
            fontWeight: "700",
            color: "#0394cf",
            margin: "0.7rem 0 0.2rem 0",
          }}
        >
          Summary
        </Typography>
        <Typography variant="p" sx={{fontSize:{xs:"0.5rem",sm:"1rem"}}}>
          {summary
            ? summary
            : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.`}
        </Typography>

        {/* -------------------work experience section----------------------- */}
        <Typography
          variant="h5"
          sx={{
            width: "100%",
            borderBottom: "1px solid black",fontSize:{xs:"0.7rem",sm:"1rem"},
            fontWeight: "700",
            color: "#0394cf",
            margin: "0.7rem 0 0.2rem 0",
          }}
        >
          Work Experience
        </Typography>
        {workExperience.length >= 1 ? (
          workExperience.map((exp, index) => {
            return (
              <React.Fragment key={index}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                    margin: index === 0 ? "0.25rem 0" : {xs:"0.55rem 0 0.2rem 0",sm:"0.85rem 0 0.2rem 0"},
                  }}
                >
                  <Typography
                    variant="p"
                    sx={{ fontWeight: "700", fontSize:{xs:"0.55rem",sm:"1.2rem"} }}
                  >
                    {`${exp.company},${exp.location}`}
                  </Typography>
                  <Typography
                    variant="p"
                    sx={{ fontWeight: "700", fontSize:{xs:"0.55rem",sm:"1.2rem"} }}
                  >
                    {exp.current
                      ? `${exp?.startYear?.$y} - present`
                      : `${exp?.startYear?.$y} - ${exp?.endYear?.$y}`}
                  </Typography>
                </Box>
                <Typography variant="p" sx={{fontSize:{xs:"0.4rem",sm:"0.9rem"}}}>{exp.role}</Typography>
                <Typography
                  variant="p"
                  sx={{
                    width: "70%",
                    fontStyle: "italic",
                    marginTop: "0.25rem",
                    fontSize:{xs:"0.4rem",sm:"1rem"}
                  }}
                >
                  {exp.description}
                </Typography>
              </React.Fragment>
            );
          })
        ) : (
          <>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                margin: "0.25rem 0",
              }}
            >
              <Typography
                variant="p"
                sx={{ fontWeight: "700", fontSize: {xs:"0.55rem",sm:"1.2rem"} }}
              >
                Microsoft , New york
              </Typography>
              <Typography
                variant="p"
                sx={{ fontWeight: "700", fontSize: {xs:"0.55rem",sm:"1.2rem"} }}
              >
                2018 - 2020
              </Typography>
            </Box>
            <Typography variant="p" sx={{fontSize:{xs:"0.4rem",sm:"0.9rem"}}}>Frontend Developer</Typography>
            <Typography
              variant="p"
              sx={{ width: "70%", fontStyle: "italic", marginTop: "0.25rem",fontSize:{xs:"0.4rem",sm:"1rem"} }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </>
        )}
        {/* -------------------skills section----------------------- */}
        <Typography
          variant="h5"
          sx={{
            width: "100%",
            borderBottom: "1px solid black",fontSize:{xs:"0.7rem",sm:"1rem"},
            fontWeight: "700",
            color: "#0394cf",
            margin: "1rem 0 0.5rem 0",
          }}
        >
          Skills
        </Typography>
        {skills.length >= 1 ? (
          <Box sx={{ display: "flex", gap: "0.5rem" }}>
            {skills.map((skill, index) => {
              return (
                <Typography
                  variant="p"
                  key={index}
                  sx={{ borderRight: "1px solid", paddingRight: "0.5rem",fontSize:{xs:"0.5rem",sm:"1rem"} }}
                >
                  {skill.toUpperCase()}
                </Typography>
              );
            })}
          </Box>
        ) : (
          <Typography variant="p" sx={{fontSize:{xs:"0.5rem",sm:"1rem"}}}>HTML | CSS | Java Script | React</Typography>
        )}

        {/* -------------------education section----------------------- */}
        <Typography
          variant="h5"
          sx={{
            width: "100%",
            borderBottom: "1px solid black",fontSize:{xs:"0.7rem",sm:"1rem"},
            fontWeight: "700",
            color: "#0394cf",
            margin: "1rem 0 0.5rem 0",
          }}
        >
          Education
        </Typography>
        {educationInfo.length >= 1 ? (
          educationInfo.map((education, index) => {
            return (
              <React.Fragment key={index}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                    margin: index === 0 ? "0.25rem 0" : {xs:"0.55rem 0 0.2rem 0",sm:"0.85rem 0 0.2rem 0"},
                  }}
                >
                  <Typography
                    variant="p"
                    sx={{ fontWeight: "700", fontSize: {xs:"0.55rem",sm:"1.2rem"} }}
                  >
                    {education?.institute.toUpperCase()}
                  </Typography>
                  <Typography
                    variant="p"
                    sx={{ fontWeight: "700", fontSize: {xs:"0.55rem",sm:"1.2rem"} }}
                  >
                    {education.current
                      ? `${education?.startYear?.$y} - present`
                      : `${education?.startYear?.$y} - ${education?.endYear?.$y}`}
                  </Typography>
                </Box>
                <Typography variant="p" sx={{fontSize:{xs:"0.4rem",sm:"0.9rem"}}}>{education?.degree}</Typography>
              </React.Fragment>
            );
          })
        ) : (
          <>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                margin: "0.25rem 0",
              }}
            >
              <Typography
                variant="p"
                sx={{ fontWeight: "700", fontSize: {xs:"0.55rem",sm:"1.2rem"} }}
              >
                Harvard University
              </Typography>
              <Typography
                variant="p"
                sx={{ fontWeight: "700", fontSize: {xs:"0.55rem",sm:"1.2rem"} }}
              >
                2020 - 2022
              </Typography>
            </Box>
            <Typography variant="p" sx={{fontSize:{xs:"0.4rem",sm:"0.9rem"}}}>Master of Enginerring</Typography>
          </>
        )}

        {/* -------------------achievements section----------------------- */}
        <Typography
          variant="h5"
          sx={{
            width: "100%",
            borderBottom: "1px solid black",fontSize:{xs:"0.7rem",sm:"1rem"},
            fontWeight: "700",
            color: "#0394cf",
            margin: "1rem 0 0.5rem 0",
          }}
        >
          Achievements
        </Typography>
        {achievements.length >= 1 ? (
          achievements.map((achievement, index) => {
            return (
              <Typography
                variant="p"
                sx={{ width: "80%", fontStyle: "italic", marginTop: "0.25rem",fontSize:{xs:"0.4rem",sm:"1rem"} }}
                key={index}
              >
                • {achievement}
              </Typography>
            );
          })
        ) : (
          <Typography
            variant="p"
            sx={{ width: "80%", fontStyle: "italic", marginTop: "0.25rem",fontSize:{xs:"0.4rem",sm:"1rem"} }}
          >
            • Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </Typography>
        )}

        {/* ------------- other section ------------------ */}
        {otherSection && (
          <>
            <Typography
              variant="h5"
              sx={{
                width: "100%",
                borderBottom: "1px solid black",fontSize:{xs:"0.7rem",sm:"1rem"},
                fontWeight: "700",
                color: "#0394cf",
                margin: "1rem 0 0.5rem 0",
              }}
            >
              {otherSection.toUpperCase()}
            </Typography>
            <Typography
            variant="p"
            sx={{ width: "80%", marginTop: "0.25rem",fontSize:{xs:"0.5rem",sm:"1rem"} }}
          >
            {otherContent}
          </Typography>
          </>
        )}
      </Box>

      {/* --------------- download button -----------------*/}
      <ReactToPrint
        trigger={() => {
          return (
            <Button
              variant="contained"
              sx={{
                margin: "1rem 0 3rem 0",
                position: "relative",
                left: "50%",
                translate: "-50% 0",
              }}
            >
              Download
            </Button>
          );
        }}
        content={() => pdfRef.current}
        pageStyle="@media print {
      @page {
        size: 220mm 250mm;
        margin: 0;
      }
    }"
      />
    </>
  );
}
