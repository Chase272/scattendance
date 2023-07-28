import React from "react";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import QrGenrate from "../../components/QrGen";
import MuiTable from "../../components/MuiTable";

const CurrentClass = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Today's Class" subtitle="TE-IT SUBJECT 4:00" />
      </Box>

      <Box
        backgroundColor={colors.primary[400]}
        display="flex"
        sx={{ flexDirection: "column" }}
        borderRadius="3px"
        p="10px"
      >
        <Typography
          variant="h2"
          color={colors.grey[100]}
          fontWeight="bold"
          sx={{ m: "30px" }}
        >
          QR Code Creator
        </Typography>

        <QrGenrate />
      </Box>


      <MuiTable />
    </Box>
  );
};

export default CurrentClass;
