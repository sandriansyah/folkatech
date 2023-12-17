import { Box, Button, Typography, useTheme } from "@mui/material";

const Counter = () => {
  const theme = useTheme();
  return (
    <Box display={"flex"} gap={"5px"}>
      <Button variant="outlined" color="secondary" sx={{ width: "50px" }}>
        -
      </Button>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        border={1}
        borderRadius={"4px"}
        width={"50px"}
        sx={{ borderColor: theme.palette.secondary.main }}
      >
        <Typography color={"GrayText"} fontSize={"12px"}>
          1
        </Typography>
      </Box>
      <Button variant="outlined" color="secondary" sx={{ width: "50px" }}>
        +
      </Button>
    </Box>
  );
};

export default Counter;
