import {
  Box,
  InputAdornment,
  Slider,
  TextField,
  Typography,
} from "@mui/material";

const RangePrice = () => {
  return (
    <Box>
      <Typography>Harga</Typography>
      <Slider defaultValue={70} aria-label="Default" valueLabelDisplay="auto" />
      <Box
        mb={"10px"}
        display={"flex"}
        justifyContent={"space-evenly"}
        alignItems={"center"}
        gap={"10px"}
      >
        <TextField
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Typography fontSize={"10px"}>Rp</Typography>
              </InputAdornment>
            ),
          }}
        />

        <Typography> - </Typography>

        <TextField
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Typography fontSize={"10px"}>Rp</Typography>
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </Box>
  );
};

export default RangePrice;
