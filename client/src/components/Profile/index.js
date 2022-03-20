import { useState, useEffect } from "react";
import axios from "axios";

import {
  Button,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Popover,
  TextField,
  Typography,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Edit, FormatListBulleted, MoreHoriz } from "@mui/icons-material";
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

const Profile = ({ user, dispUser, setUser, refreshUser }) => {
  const [discussions, setDiscussions] = useState([]);
  const [loading, setLoading] = useState(true);

  const [edit, setEdit] = useState(false);
  const [updating, setUpdating] = useState(false);
  const [changed, setChanged] = useState(false);

  const [openPopover, setOpenPopover] = useState(false);
  const [popoverAnchor, setPopoverAnchor] = useState(false);

  const initState = {
    bio: dispUser.bio,
    branch: dispUser.branch,
    degree: dispUser.degree,
    yearOfAdmission: dispUser.yearOfAdmission,
    yearOfGraduation: dispUser.yearOfGraduation,
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
    const ind = fields.findIndex(
      (fld) => dispUser[fld] !== updatedProfile[fld]
    );

    setChanged(ind > -1);
  }, [updatedProfile]);

  useEffect(() => {
    axios
      .get(`/api/posts/user/${dispUser._id}`)
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

  const blacklistUser = (status) => {
    axios
      .patch(`/api/user/${dispUser._id}`, { isBlacklisted: status })
      .then((res) => {
        console.log(res);

        refreshUser();

        setEdit(false);
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response.data);
      });
  };

  console.log({ dispUser, user });

  if (!edit)
    return (
      <div style={{ marginTop: "20px" }}>
        <Grid container>
          <Grid item md={4} xs={12}>
            <div>
              <img alt="profile_image" src={dispUser.img} />
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div>
                <Typography variant="h6">
                  {dispUser.firstname + " " + dispUser.lastname}
                </Typography>
              </div>
              {user._id !== dispUser._id && user.role === "admin" && (
                <>
                  <IconButton
                    color="primary"
                    onClick={(event) => {
                      setPopoverAnchor(event.currentTarget);
                      setOpenPopover(true);
                    }}
                  >
                    <MoreHoriz />
                  </IconButton>
                  <Popover
                    open={openPopover}
                    anchorEl={popoverAnchor}
                    onClose={() => {
                      setOpenPopover(false);
                    }}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                  >
                    {dispUser.isBlacklisted ? (
                      <MenuItem
                        onClick={() => {
                          blacklistUser(false);
                          setOpenPopover(false);
                        }}
                      >
                        Whitelist user
                      </MenuItem>
                    ) : (
                      <MenuItem
                        onClick={() => {
                          blacklistUser(true);
                          setOpenPopover(false);
                        }}
                      >
                        Blacklist user
                      </MenuItem>
                    )}
                  </Popover>
                </>
              )}
            </div>
            <Typography style={{ color: "grey" }}>{dispUser.email}</Typography>

            {dispUser.bio && (
              <Typography style={{ marginTop: "20px", fontStyle: "italic" }}>
                {dispUser.bio}
              </Typography>
            )}

            {dispUser.branch && <Typography>{dispUser.branch}</Typography>}
            {dispUser.yearOfAdmission && (
              <Typography>{dispUser.yearOfAdmission}</Typography>
            )}
            {dispUser.yearOfGraduation && (
              <Typography>{dispUser.yearOfGraduation}</Typography>
            )}

            {user._id === dispUser._id && (
              <Button
                variant="outlined"
                startIcon={<Edit />}
                style={{ margin: "20px 0px" }}
                onClick={() => {
                  setEdit(true);
                }}
              >
                Edit Profile
              </Button>
            )}
          </Grid>
          <Grid item md={8} xs={12}>
            <Discussions user={dispUser} data={discussions} hideCreator />
          </Grid>
        </Grid>
      </div>
    );

  return (
    <div style={{ marginTop: "20px" }}>
      <Grid container>
        <Grid item md={4} xs={12}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img alt="profile_image" src={dispUser.img} />
          </div>
          <Typography variant="h6" align="center" style={{ marginTop: "10px" }}>
            {dispUser.firstname + " " + dispUser.lastname}
          </Typography>
          <Typography style={{ color: "grey" }} align="center">
            {dispUser.email}
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
