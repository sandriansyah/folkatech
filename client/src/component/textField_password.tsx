import { Box, InputAdornment, TextField, Typography } from "@mui/material";
import { useState } from "react";

interface TextField_password {
  placeHolder?: string;
  name: string;
}

const TextField_password = (props: TextField_password) => {
  const [visible, setVisible] = useState(false);

  const showPassword = () => {
    !visible ? setVisible(true) : setVisible(false);
  };
  return (
    <Box my={"10px"}>
      <TextField
        name={props.name}
        size="small"
        fullWidth
        placeholder={props.placeHolder}
        type={visible ? "text" : "password"}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Box
                onClick={showPassword}
                sx={{ cursor: "pointer" }}
                display={"flex"}
                alignItems={"center"}
              >
                {visible ? (
                  <Typography fontSize={"12px"}>Hide</Typography>
                ) : (
                  <Typography fontSize={"12px"}>Show</Typography>
                )}
              </Box>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default TextField_password;
