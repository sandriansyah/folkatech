import { Box, IconButton, TextField, useTheme } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

const AppBar = () => {
  const theme = useTheme();
  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      my={"10px"}
      px={"30px"}
    >
      <Box></Box>
      <Box display={"flex"} gap={"10px"}>
        <Box display={"flex"}>
          <TextField
            size="small"
            sx={{ borderRadius: "none", border: "none" }}
          />
          <Box sx={{ bgcolor: theme.palette.primary.main }}>
            <IconButton>
              <SearchIcon />
            </IconButton>
          </Box>
        </Box>
        <Box>
          <IconButton>
            <FavoriteBorderIcon />
          </IconButton>
        </Box>
        <Box>
          <IconButton>
            <LocalMallOutlinedIcon />
          </IconButton>
        </Box>
        <Box>
          <IconButton>
            <PersonOutlineOutlinedIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default AppBar;
