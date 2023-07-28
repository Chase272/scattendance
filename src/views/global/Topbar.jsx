import { Box, IconButton, InputBase, useTheme } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import Header from "../../components/Header";

const Topbar = () => {
  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      <Box>
        <Header title={"Attendance Portal"} subtitle={"Last Updated: 000000"} />
      </Box>

      <Box display="flex">
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton>
          <PersonOutlineOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
