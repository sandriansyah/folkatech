import { Box, Button } from "@mui/material";

interface ButtonAuthProps {
  text: string;
}

const ButtonAuth = (props: ButtonAuthProps) => {
  return (
    <Box my={"10px"}>
      <Button
        variant="contained"
        color="primary"
        size="small"
        fullWidth
        type="submit"
      >
        {props.text}
      </Button>
    </Box>
  );
};

export default ButtonAuth;
