import { useState } from "react";
import {
  Sidebar,
  Menu,
  MenuItem,
  sidebarClasses,
  menuClasses,
} from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { Link } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import TodayIcon from "@mui/icons-material/Today";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { useAuth } from "../../context/AuthContext";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Link to={to} style={{ textDecoration: "none" }}>
      <MenuItem
        routerLink={<Link to={to} />}
        active={selected === title}
        style={{ color: colors.grey[100] }}
        onClick={() => setSelected(title)}
        icon={icon}
      >
        <Typography>{title}</Typography>
      </MenuItem>
    </Link>
  );
};

const MySidebar = () => {
  const theme = useTheme();

  const colors = tokens(theme.palette.mode);

  const [isCollapsed, setIsCollapsed] = useState(false);

  const [selected, setSelected] = useState("Dashboard");
  const user = useAuth();

  return (
    <Sidebar
      collapsed={isCollapsed}
      rootStyles={{
        border: "none !important",
        height: "140%",
        [`.${sidebarClasses.container}`]: {
          background: `${colors.primary[400]} !important`,
        },
        [`.${menuClasses.container}`]: {
          padding: "5px 35px 5px 20px !important",
        },
        [`.${menuClasses.icon}`]: {
          backgroundColor: "transparent !important",
        },
      }}
    >
      <Menu
        iconShape="square"
        menuItemStyles={{
          button: {
            "&:hover": {
              backgroundColor: "transparent !important",
              color: "#868dfb !important",
            },
          },
        }}
      >
        {/* LOGO AND MENU ICON */}
        <MenuItem
          onClick={() => setIsCollapsed(!isCollapsed)}
          icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
          style={{
            margin: "10px 0 20px 0",
            color: colors.grey[100],
          }}
        >
          {!isCollapsed && (
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              ml="15px"
            >
              <Typography variant="h3" color={colors.grey[100]}>
                ADMINS
              </Typography>
              <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                <MenuOutlinedIcon />
              </IconButton>
            </Box>
          )}
        </MenuItem>
        {!isCollapsed && (
          <Box mb="25px">
            <Box display="flex" justifyContent="center" alignItems="center">
              <img
                alt="profile-user"
                width="100px"
                height="100px"
                src={`../../user.png`}
                style={{ cursor: "pointer", borderRadius: "50%" }}
              />
            </Box>
            <Box textAlign="center">
              <Typography
                variant="h2"
                color={colors.grey[100]}
                fontWeight="bold"
                sx={{ m: "10px 0 0 0" }}
              >
                {user.name}
              </Typography>
              <Typography variant="h5" color={colors.greenAccent[500]}>
                {user.subject}
              </Typography>
            </Box>
          </Box>
        )}

        {/* menu items */}
        <Box>
          <Item
            title="Dashboard"
            to="/"
            icon={<HomeOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
        </Box>
        <Box>
          <Item
            title="Current Class"
            to="/class"
            icon={<QrCodeScannerIcon />}
            selected={selected}
            setSelected={setSelected}
          />
        </Box>
        <Box>
          <Item
            title="Timetable"
            to="/timetable"
            icon={<TodayIcon />}
            selected={selected}
            setSelected={setSelected}
          />
        </Box>

        <Box>
          <Item
            title="Student Attendence"
            to="/attendence"
            icon={<BarChartOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
        </Box>
        <Box>
          <Item
            title="Register Student"
            to="/register"
            icon={<ContentPasteIcon />}
            selected={selected}
            setSelected={setSelected}
          />
        </Box>
      </Menu>
    </Sidebar>
  );
};

export default MySidebar;
