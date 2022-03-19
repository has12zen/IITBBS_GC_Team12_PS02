import { Box, Typography, Chip } from "@mui/material";

const Ques = () => {
  const labels = ["Projects", "Fest", "Intern"];
  return (
    <Box
      style={{
        backgroundColor: "rgba(0,0,0,0.1)",
        padding: 15,
        borderRadius: 5,
        marginBottom:10
      }}
    >
      <Typography variant="h4">Title</Typography>
      <Box>
        {labels.map((label, key) => (
          <Chip
            label={label}
            key={key}
            onClick={() => {}}
            style={{ marginRight: 5 }}
          />
        ))}
      </Box>
      <Box style={{ marginTop: 20, marginBottom: 20 }}>
        <Typography style={{ marginTop: 10 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          ultricies, nisl eget consectetur sagittis, erat eros consectetur
          libero, eget congue nunc nisi euismod quis.
        </Typography>
      </Box>
      <Box
        style={{
          marginTop: 10,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box style={styles.bottomBox}>
          <Typography variant="overline">Posted by : </Typography>
          <Typography variant="button">Thomas Ganguly</Typography>
        </Box>
        <Box style={styles.bottomBox}>
          <Typography variant="button">3 Answers</Typography>
        </Box>
      </Box>
    </Box>
  );
};

const styles = {
  bottomBox: {
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 5,
    borderRadius: 5,
    color: "white",
  },
};

export default Ques;
