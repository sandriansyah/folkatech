import { Box, TextField } from "@mui/material";

interface TextField_textProps {
  placeholder?: string;
  name?: string;
  required: boolean;
  defaultValue: string;
}

const TextField_text = (props: TextField_textProps) => {
  return (
    <Box my={"15px"}>
      <TextField
        defaultValue={props.defaultValue}
        required={props.required}
        size="small"
        fullWidth
        placeholder={props.placeholder}
        type="text"
        name={props.name}
      />
    </Box>
  );
};

export default TextField_text;
