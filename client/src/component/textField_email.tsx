import { Box, TextField } from "@mui/material";

interface TextField_emailProps {
  required: boolean;
  defaultValue: string;
}

const TextField_email = (props: TextField_emailProps) => {
  return (
    <Box my={"15px"}>
      <TextField
        defaultValue={props.defaultValue}
        required={props.required}
        size="small"
        fullWidth
        placeholder="Email"
        type="email"
        name="email"
      />
    </Box>
  );
};

export default TextField_email;
