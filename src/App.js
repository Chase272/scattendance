import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Topbar from "./views/global/Topbar";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./views/dashboard";
import Sidebar from "./views/global/MySidebar";
import CurrentClass from "./views/class";
import Timetable from "./views/timetable";
import Attendence from "./views/attendence";
import Register from "./views/register";
import Login from "./views/login";
import Main from "./Main";
import { AuthProvider } from "./context/AuthContext";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <CssBaseline />
          <Main />
        </AuthProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
