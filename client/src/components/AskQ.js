import React, { useState } from "react";
import { Box, TextField, Typography, Input, Button } from "@mui/material";
import { CKEditor } from "ckeditor4-react";

const AskQ = () => {
  const [question, setQuestion] = useState("");
  return (
    <Box style={{ marginTop: 20 }}>
      <Typography variant="h4">Start a discussion</Typography>
      <Box style={{ marginTop: 20, display: "flex", alignItems: "center" }}>
        <Input fullWidth placeholder="Title" />
      </Box>
      <Box style={{ marginTop: 20 }}>
        <CKEditor
          data="<p>Hello from CKEditor 4!</p>"
          onChange={(event) => {
            console.log(event.editor.getData());
            setQuestion(event.editor.getData());
          }}
        />
      </Box>
      <Button variant="contained" color="primary" style={{ marginTop: 20 }}>
        Post
      </Button>
    </Box>
  );
};

export default AskQ;
