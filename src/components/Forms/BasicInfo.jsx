import { Box, Button, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { Context } from "../../contextapi/ContextApi";

export default function BasicInfo() {
  const { setBasicInfo } = useContext(Context);
  const [userName, setUserName] = useState("");
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [linkedinUrl, setLinkedinUrl] = useState("");
  const [githubUrl, setGithubUrl] = useState("");

  // adding or updating the basic info of the user like his name , email id , phone no etc.
  const handleBasicInfo = () => {
    if(!userName || !title || !email || !mobileNo){
      alert("fill the requred details")
    }
    else{
      setBasicInfo({
        name: userName,
        title: title,
        email: email,
        mobileNo: mobileNo,
        linkedin: linkedinUrl,
        github: githubUrl,
      });
    }
  };
  return (
    <>
      <Box
        sx={{
          display: "grid",
          gap: "1.5rem",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
          padding: "2rem",
        }}
      >
        <TextField
          variant="outlined"
          label="Name"
          onChange={(e) => setUserName(e.target.value)}
        />
        <TextField
          variant="outlined"
          label="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          variant="outlined"
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          variant="outlined"
          label="Phone"
          onChange={(e) => setMobileNo(e.target.value)}
        />
        <TextField
          variant="outlined"
          label="LinkedIn Url (optional)"
          onChange={(e) => setLinkedinUrl(e.target.value)}
        />
        <TextField
          variant="outlined"
          label="Github Url (optional)"
          onChange={(e) => setGithubUrl(e.target.value)}
        />
      </Box>
      <Button variant="contained" sx={{margin:"2rem"}} onClick={handleBasicInfo}>Add</Button>
    </>
  );
}
