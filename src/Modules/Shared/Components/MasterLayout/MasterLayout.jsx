import React from "react";
import Navbar from "../../../Shared/Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { Box, Container } from "@mui/material";

export default function MasterLayout() {
  return (
    <Box>
      <Navbar />
      <Box sx={{ mx: "30px", my: "20px" }}>
        <Outlet />
      </Box>
    </Box>
  );
}
