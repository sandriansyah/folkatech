import { Box, MenuItem, TextField, useTheme } from "@mui/material";

const TitleBar = () => {
  const theme = useTheme();
  return (
    <Box
      my={"15px"}
      bgcolor={"#F5F5F5"}
      width={"100%"}
      justifyContent={"space-between"}
      px={"50px"}
    >
      <TextField
        size="small"
        select
        value={"belanja"}
        sx={{ bgcolor: theme.palette.primary.main, color: "white" }}
      >
        <MenuItem value={"belanja"}> Belanja </MenuItem>
      </TextField>
    </Box>
  );
};

export default TitleBar;
