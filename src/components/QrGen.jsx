import { Box, Typography, useTheme, Button } from "@mui/material";
import React from "react";
import { QRCodeSVG } from "qrcode.react";
import { tokens } from "../theme";
import { useState, useEffect } from "react";

function QrGenrate() {
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [status, setStatus] = useState(null);
  const [qrData, setqrData] = useState();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus("Geolocation is not supported by your browser");
    } else {
      setStatus("Locating...");
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setStatus(null);
          setLat(position.coords.latitude);
          setLng(position.coords.longitude);
          console.log(position);
        },
        (e) => {
          setStatus("Unable to retrieve your location");
          console.log(e.message);
        },
        { enableHighAccuracy: true, maximumAge: 0, timeout: 5000 }
      );
    }
  };

  const genrateQR = () => {
    let current = new Date();
    let date = `${current.getDate()}/${
      current.getMonth() + 1
    }/${current.getFullYear()}`;

    let time = `${current.getHours()}:${current.getMinutes()}:${current.getSeconds()}`;
    let subject = "OS";

    let Data = JSON.stringify({
      lat,
      lng,
      date,
      time,
      subject,
    });
    setqrData(Data);
  };
  return (
    <Box >
      <Button
        sx={{
          backgroundColor: colors.blueAccent[700],
          color: colors.grey[100],
          fontSize: "14px",
          fontWeight: "bold",
          padding: "10px 20px",
          alignItems: "right",
          margin: "10px 20px",
        }}
        onClick={() => {
          genrateQR();
        }}
      >
        Genrate QR Code
      </Button>
      {qrData ? (
        <QRCodeSVG
          className="mx-auto"
          size
          level="M"
          width={600}
          value={qrData}
        />
      ) : null}
    </Box>
  );
}

export default QrGenrate;
