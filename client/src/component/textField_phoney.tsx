import { Box, TextField } from "@mui/material";

interface TextField_phone {}

const TextField_phone = () => {
  return (
    <Box my={"15px"}>
      <TextField
        size="small"
        fullWidth
        placeholder="Phone"
        type="text"
        name="phone"
      />
    </Box>
  );
};

export default TextField_phone;
