import Header from "../../components/Header";

import { useAuth } from "../../context/AuthContext";

import { Box, Button, Typography, useTheme } from "@mui/material";

import { Link } from "react-router-dom";

import { tokens } from "../../theme";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { LineChart } from "../../components/LineChart";
import { PieChart } from "../../components/PieChart";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const theme = useTheme();

  const colors = tokens(theme.palette.mode);

  const [Classes, setClasses] = useState([]);

  const user = useAuth();

  useEffect(() => {
    // Update the document title using the browser API

    fetch(`http://localhost:5000/teacher/${user.id}`)
      .then((response) => response.json())
      .then((res) => {
        setClasses(res);
      });
  }, []);

  if (Classes) {
    let newClasses = [];
    for (let i = 0; i < Classes.length; i++) {
      let clas = Classes[i];

      if (clas["totalPresent"] !== 0) {
        console.log(clas);
        newClasses.push(clas);
      }
    }

    console.log(newClasses);
  }

  return (
    <Box m="20px">
      {/* Grid */}
      <Box display="grid" gridTemplateColumns="repeat(12,1fr)" gap="20px">
        {/* Row 1 */}
        <Box
          backgroundColor={colors.primary[400]}
          borderRadius="3px"
          gridColumn="span 4"
          alignItems="center"
          justifyContent="space-between"
          display="flex"
          p="10px"
        >
          <Typography variant="h3" sx={{ m: "15px" }}>
            {user.subject}
          </Typography>
          <Link to="/class" style={{ textDecoration: "none" }}>
            <Button
              sx={{
                backgroundColor: colors.blueAccent[700],
                color: colors.grey[100],
                fontSize: "14px",
                fontWeight: "bold",
                padding: "10px 20px",
                alignItems: "right",
                "&:hover": {
                  backgroundColor: colors.blueAccent[800],
                  color: "grey",
                },
              }}
            >
              Take Attendence
            </Button>
          </Link>
        </Box>
        <Box
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="3px"
          gridColumn="span 4"
        >
          <Typography variant="h6" sx={{ m: "15px" }}>
            Upcoming class
          </Typography>
          <Typography variant="h3" sx={{ m: "15px" }}>
            TE-IT SUBJECT
          </Typography>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 4"
          backgroundColor={colors.primary[400]}
          p="10px 20px"
        >
          <Typography variant="h3" fontWeight="bold" sx={{ m: "15px 0px" }}>
            Pie Chart
          </Typography>
          <PieChart />
        </Box>

        {/* Row 2 */}

        <Box
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          gridColumn="span 8"
          gridRow="span 8"
          p="10px 30px 10px 30px"
        >
          <Typography variant="h3" fontWeight="bold" sx={{ m: "15px 0px" }}>
            Overall Attendance by Class
          </Typography>
          <LineChart />
        </Box>
        <Box
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          gridColumn="span 4"
          gridRow="span 4"
          p="20px"
        >
          <Header title={"64"} subtitle={"Present Students"} />
          <Header title={"21"} subtitle={"Absent Students"} />
          <Header title={"101"} subtitle={"Total "} />
        </Box>
        {/* <Box
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          gridColumn="span 3"
          gridRow="span 4"
        >
          <div style={{ width: 100, height: 100 }}>
            <CircularProgressbar
              value={value}
              maxValue={1}
              text={`${value * 100}%`}
            />
          </div>
          <Box
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="right"
            justifyContent="right"
            sx={{ flexDirection: "column" }}
          >
            <Box sx={{ m: "15px" }}>
              <Typography mb="20px" variant="h4" fontWeight="bold">
                Attendence Today
              </Typography>

              <Typography m="5px" variant="h5">
                {present} Present
              </Typography>
              <Typography m="5px" variant="h5">
                {absent} Absent
              </Typography>
            </Box>
          </Box>
        </Box> */}
        {/* <Box
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          gridColumn="span 3"
          gridRow="span 4"
        >
          <div style={{ width: 100, height: 100 }}>
            <CircularProgressbar
              value={value}
              maxValue={1}
              text={`${value * 100}%`}
            />
          </div>
          <Box
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="right"
            justifyContent="right"
            sx={{ flexDirection: "column" }}
          >
            <Box sx={{ m: "15px" }}>
              <Typography mb="20px" variant="h4" fontWeight="bold">
                Total Classes
              </Typography>

              <Typography m="5px" variant="h5">
                {present} :Present
              </Typography>
              <Typography m="5px" variant="h5">
                {present} :Absent
              </Typography>
            </Box>
          </Box>
        </Box> */}

        {/* <Box
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          gridColumn="span 6"
          gridRow="span 6"
          p="10px 30px 10px 30px"
        ></Box> */}
      </Box>
    </Box>
  );
};

export default Dashboard;
