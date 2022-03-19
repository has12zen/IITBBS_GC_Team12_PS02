import { Box, Typography, Chip } from "@mui/material";

const Ques = () => {
  const labels = ["Projects", "Fest", "Intern"];
  return (
    <Box>
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
    </Box>
  );
};

export default Ques;
