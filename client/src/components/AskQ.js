import React, { useState } from "react";
import { Box, TextField, Typography, Input, Button } from "@mui/material";
import { CKEditor } from "ckeditor4-react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AskQ = ({ user }) => {
  const navigate = useNavigate();
  const [question, setQuestion] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const mutation = useMutation(createPost, {
    retry: 3,
  });
  async function createPost(data) {
    const response = await axios.post("/api/posts", data);
    setMessage(response.data);
    return response.data;
  }
  return (
    <Box style={{ marginTop: 20 }}>
      <Typography variant="h4">Start a discussion</Typography>
      <Box style={{ marginTop: 20, display: "flex", alignItems: "center" }}>
        <Input
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
          placeholder="Title"
        />
      </Box>
      <Box style={{ marginTop: 20 }}>
        <CKEditor
          data="<p>Hello from CKEditor 4!</p>"
          onChange={(event) => {
            setQuestion(event.editor.getData());
          }}
        />
      </Box>
      <Button
        onClick={() => {
          mutation.mutate(
            {
              token: user.token,
              title,
              body: question,
              isComment: false,
            },
            {
              onSuccess: (ret) => {
                navigate("/discussion/" + ret.data.doc._id);
              },
            }
          );
        }}
        variant="contained"
        color="primary"
        style={{ marginTop: 20 }}
      >
        Post
      </Button>
      {mutation.isLoading ? "Saving..." : ""}
      {mutation.isError ? mutation.error.message : ""}
    </Box>
  );
};

export default AskQ;
