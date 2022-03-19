import React, { useState } from "react";
import {
  Box,
  TextField,
  Typography,
  Input,
  Button,
  Autocomplete,
  Chip,
  Checkbox,
} from "@mui/material";
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
  const [label, setLabel] = useState("");
  const [pri, setPri] = useState(false);
  const labels = [
    "Internship",
    "Placements",
    "Projects",
    "Fests",
    "Polls",
    "Events",
    "Lectures",
    "Workshops",
    "Talks",
    "Exams",
    "Courses",
    "Jobs",
    "Knowledge",
    "Books",
    "Movies",
    "Music",
    "Sports",
    "Others",
  ];
  const [tags, setTags] = useState(labels);
  return (
    <Box style={{ marginTop: 20, marginBottom: 20 }}>
      <Typography variant="h4">Start a discussion</Typography>
      <Box style={{ marginTop: 20, alignItems: "center" }}>
        <Typography variant="h6" component="div">
          Title :{" "}
        </Typography>
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
          placeholder="Add title"
          variant="outlined"
          margin="dense"
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
      <Box style={{ marginTop: 20 }}>
        <Typography variant="h6">Tags :</Typography>
        <Autocomplete
          autoComplete
          freeSolo={true}
          options={labels}
          value={label}
          onChange={(event, newValue) => {
            // console.log(newValue);
            if (newValue) {
              setLabel(newValue);
            } else {
              setLabel("");
            }
          }}
          inputValue={label}
          onInputChange={(event, newInputValue) => {
            // console.log(newInputValue);
            if (newInputValue) {
              setLabel(newInputValue);
            } else {
              setLabel("");
            }
          }}
          onKeyDown={(event) => {
            // console.log(tags);
            if (event.key === "Enter") {
              setTags([...tags, label]);
              setLabel("");
            }
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              placeholder="Add tags"
              style={{ maxWidth: 300 }}
            />
          )}
        />
      </Box>
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: 20,
          marginBottom: 20,
        }}
      >
        <Checkbox
          onChange={(event) => {
            setPri(event.target.checked);
          }}
        />
        <Typography variant="h6">Make this question private</Typography>
      </Box>
      <Box>
        {tags.map((tag, key) => {
          return (
            <Chip
              key={key}
              label={tag}
              onDelete={() => {
                setTags(tags.filter((t) => t !== tag));
              }}
              style={{ marginRight: 5, marginTop: 5 }}
            />
          );
        })}
      </Box>
      <Button
        onClick={() => {
          mutation.mutate(
            {
              token: user.token,
              title,
              body: question,
              isComment: false,
              isPrivate: pri,
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
