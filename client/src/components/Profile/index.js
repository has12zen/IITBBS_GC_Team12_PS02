import { useState, useEffect } from "react";
import axios from "axios";
import { Button, Grid, MenuItem, TextField, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Edit, FormatListBulleted } from "@mui/icons-material";
import Discussions from "../Discussions";

const branches = ["CSE", "EE", "ECE", "CE", "ME", "MM"];
const degrees = ["BTech", "MTech", "Dual Degree", "MSc", "PhD"];

const admissionYears = () => {
  const date = new Date();
  const year = date.getFullYear();

  const years = [];
  for (var i = 2000; i <= year; i++) years.push(i);

  return years.reverse();
};

const graduationYears = () => {
  const date = new Date();
  const year = date.getFullYear();

  const years = [];
  for (var i = 2000; i <= year + 5; i++) years.push(i);

  return years.reverse();
};

const Profile = ({ user, setUser }) => {
  const [discussions, setDiscussions] = useState([]);
  const [loading, setLoading] = useState(true);

  const [edit, setEdit] = useState(false);
  const [updating, setUpdating] = useState(false);
  const [changed, setChanged] = useState(false);

  const initState = {
    bio: user.bio,
    branch: user.branch,
    degree: user.degree,
    yearOfAdmission: user.yearOfAdmission,
    yearOfGraduation: user.yearOfGraduation,
  };

  const [updatedProfile, setUpdatedProfile] = useState(initState);

  useEffect(() => {
    setUpdatedProfile(initState);
    if (!edit) {
      setChanged(false);
      setUpdating(false);
    }
  }, [edit]);

  useEffect(() => {
    const fields = [
      "bio",
      "branch",
      "degree",
      "yearOfAdmission",
      "yearOfGraduation",
    ];
    const ind = fields.findIndex((fld) => user[fld] !== updatedProfile[fld]);
    console.log({ ind });

    setChanged(ind > -1);
  }, [updatedProfile]);

  useEffect(() => {
    axios
      .get("/api/posts/me")
      .then((res) => {
        console.log(res.data);
        setDiscussions(res.data);

        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response.data);

        setLoading(false);
      });
  }, []);

  const updateProfile = () => {
    axios
      .patch("/api/user", { ...updatedProfile })
      .then((res) => {
        console.log(res);

        setUser({ ...user, ...res.data.data.doc });

        setEdit(false);
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response.data);
      });
  };

  console.log({ user });

  if (!edit)
    return (
      <div style={{ marginTop: "20px" }}>
        <Grid container>
          <Grid item md={4} xs={12}>
            <div>
              <img alt="profile_image" src={user.img} />
            </div>
            <Typography variant="h6">
              {user.firstname + " " + user.lastname}
            </Typography>
            <Typography style={{ color: "grey" }}>{user.email}</Typography>

            {user.bio && (
              <Typography style={{ marginTop: "20px", fontStyle: "italic" }}>
                {user.bio}
              </Typography>
            )}

            {user.branch && <Typography>{user.branch}</Typography>}
            {user.yearOfAdmission && (
              <Typography>{user.yearOfAdmission}</Typography>
            )}
            {user.yearOfGraduation && (
              <Typography>{user.yearOfGraduation}</Typography>
            )}

            <Button
              variant="outlined"
              startIcon={<Edit />}
              style={{ marginTop: "20px" }}
              onClick={() => {
                setEdit(true);
              }}
            >
              Edit Profile
            </Button>
          </Grid>
          <Grid item md={8} xs={12}>
            <Discussions user={user} data={discussions} hideCreator />
          </Grid>
        </Grid>
      </div>
    );

  return (
    <div style={{ marginTop: "20px" }}>
      <Grid container>
        <Grid item md={4} xs={12}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img alt="profile_image" src={user.img} />
          </div>
          <Typography variant="h6" align="center" style={{ marginTop: "10px" }}>
            {user.firstname + " " + user.lastname}
          </Typography>
          <Typography style={{ color: "grey" }} align="center">
            {user.email}
          </Typography>
        </Grid>
        <Grid item md={8} xs={12}>
          <div>
            <div style={{ marginTop: "20px", display: "flex" }}>
              <TextField
                label="Bio"
                value={updatedProfile.bio}
                multiline
                rows={3}
                style={{ width: "min(400px, 90vw)", margin: "auto" }}
                disabled={updating}
                onChange={(event) => {
                  let bio = event.target.value?.trimStart();
                  if (bio.length > 200) bio = bio.substring(0, 200);
                  if (bio.length === 0) bio = undefined;

                  setUpdatedProfile({ ...updatedProfile, bio });
                }}
              />
            </div>
            <div
              style={{
                margin: "auto",
                display: "flex",
                width: "min(400px, 90vw)",
                justifyContent: "space-between",
              }}
            >
              <TextField
                label="Degree"
                value={updateProfile.degree}
                select
                style={{ width: "140px", marginTop: "20px" }}
                disabled={updating}
                onChange={(event) => {
                  setUpdatedProfile({
                    ...updatedProfile,
                    degree: event.target.value,
                  });
                }}
              >
                {degrees.map((degree) => (
                  <MenuItem key={"degree" + degree} value={degree}>
                    {degree}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                label="Branch"
                value={updateProfile.branch}
                select
                style={{ width: "100px", marginTop: "20px" }}
                disabled={updating}
                onChange={(event) => {
                  setUpdatedProfile({
                    ...updatedProfile,
                    branch: event.target.value,
                  });
                }}
              >
                {branches.map((branch) => (
                  <MenuItem key={"branch" + branch} value={branch}>
                    {branch}
                  </MenuItem>
                ))}
              </TextField>
            </div>
            <div
              style={{
                width: "min(400px, 90vw)",
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
                margin: "auto",
              }}
            >
              <TextField
                label="Admission year"
                value={updateProfile.yearOfAdmission}
                select
                style={{ width: "170px", marginTop: "20px" }}
                disabled={updating}
                onChange={(event) => {
                  setUpdatedProfile({
                    ...updatedProfile,
                    yearOfAdmission: event.target.value,
                  });
                }}
              >
                {admissionYears().map((year) => (
                  <MenuItem key={"ad-year" + year} value={year}>
                    {year}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                label="Graduation year"
                value={updateProfile.yearOfGraduation}
                select
                style={{
                  width: "170px",
                  marginTop: "20px",
                }}
                disabled={updating}
                onChange={(event) => {
                  setUpdatedProfile({
                    ...updatedProfile,
                    yearOfGraduation: event.target.value,
                  });
                }}
              >
                {graduationYears().map((year) => (
                  <MenuItem key={"grad-year" + year} value={year}>
                    {year}
                  </MenuItem>
                ))}
              </TextField>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              marginTop: "30px",
              justifyContent: "center",
            }}
          >
            <Button
              variant="outlined"
              style={{ margin: "0px 5px" }}
              disabled={updating}
              onClick={() => {
                setEdit(false);
              }}
            >
              CANCEL
            </Button>
            <LoadingButton
              loading={updating}
              disabled={!changed}
              variant="contained"
              style={{ margin: "0px 5px" }}
              onClick={() => {
                setUpdating(true);
                updateProfile();
              }}
            >
              UPDATE
            </LoadingButton>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Profile;
