import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Typography,
  List,
  ListItem,
  Chip,
  Avatar,
  Button,
} from "@mui/material";
import { useGetDiscussion } from "./utils/hadler";
import { CKEditor } from "ckeditor4-react";
import Answer from "./Answer";
import Question from "./Question";
import axios from "axios";
import { useSearchParams, useParams } from "react-router-dom";

const QuestionPage = () => {
  const [ans, setAns] = useState(false);
  const [ansText, setAnsText] = useState("");
  const [body, setBody] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isSuccess, setSuccess] = useState(false);
  const [search] = useSearchParams();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`/api/posts/${id}`)
      .then((res) => {
        console.log(res.data);
        // setDiscussions(res.data);
        setData(res.data);
        setSuccess(true);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const faces = [];

  const pushPeopleFaces = (data) => {
    faces.push({
      name: data?.createdBy.firstname,
      image: data?.createdBy.img,
    });
    data?.subPosts.forEach((subPost) => {
      faces.push({
        name: subPost.createdBy.firstname,
        image: subPost.createdBy.img,
      });
    });
  };

  if (isSuccess) {
    pushPeopleFaces(data);
  }

  useEffect(() => {
    console.log({ data });
  }, [data]);

  return (
    <Box style={{ marginTop: 20, marginLeft: 20, marginRight: 20 }}>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <Grid container spacing={2}>
          <Grid item xs={10}>
            {isSuccess && data && <Question data={data} />}
            {/* <Question /> */}
            {ans && (
              <Box style={{ marginTop: 20 }}>
                <CKEditor
                  data={ansText}
                  onChange={(event) => {
                    setAnsText(event.editor.getData());
                  }}
                />
              </Box>
            )}
            <Box style={{ marginTop: 20, marginBottom: 20 }}>
              <Chip
                variant="outlined"
                label={ans ? "Submit" : "Add Answer"}
                onClick={() => {
                  setAns(!ans);
                }}
                style={{
                  marginRight: 5,
                  backgroundColor: "rgb(255,255,255)",
                  color: "rgb(0,0,255)",
                }}
              />
            </Box>
            {data?.subPosts.map((subPost, key) => {
              console.log("subposts");
              return <Answer key={key} data={subPost} />;
            })}
            {/* <Answer /> */}
          </Grid>
          <Grid item xs={2}>
            <Box style={{ ...styles.grid, textAlign: "center" }}>
              <Typography variant="h6">People</Typography>
              <List>
                {faces.map((person, key) => (
                  <ListItem style={styles.list} key={key}>
                    <Chip
                      avatar={<Avatar alt="Natacha" src={person.image} />}
                      label={person.name}
                      key={key}
                      onClick={() => {}}
                      style={{ marginRight: 5 }}
                    />
                  </ListItem>
                ))}
              </List>
            </Box>
            {/* {data?.subPosts.map((subPost, key) => {
              <Answer key={key} data={subPost} />;
            })} */}
          </Grid>
          {/* <Chip
            variant="outlined"
            label="Add answer"
            onClick={() => {}}
            style={{
              marginRight: 5,
              backgroundColor: "rgb(255,255,255)",
              color: "rgb(0,0,255)",
            }}
          /> */}
        </Grid>
      )}
      {/* <Grid container spacing={2}>
        <Grid item xs={2}>
          <Box style={{ ...styles.grid, textAlign: "center" }}>
            <Typography variant="h6">People</Typography>
            <List>
              {faces.map((person, key) => (
                <ListItem style={styles.list} key={key}>
                  <Chip
                    avatar={<Avatar alt="Natacha" src={person.image} />}
                    label={person.name}
                    key={key}
                    onClick={() => {}}
                    style={{ marginRight: 5 }}
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        </Grid>
      </Grid> */}
    </Box>
  );
};
const styles = {
  grid: {
    backgroundColor: "rgba(0,0,0,0.1)",
    borderRadius: 5,
    padding: 10,
  },
  list: {
    justifyContent: "center",
    paddingBottom: 0,
  },
};
export default QuestionPage;
