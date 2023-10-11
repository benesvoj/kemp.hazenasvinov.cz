import { ThemeProvider } from "styled-components";
import React from "react";

const theme = {
  color: {
    // primary: "#38a169",
    primary: "#61DBFB",
    secondary: "#fff",
    tertiary: "#ccc",
  },
  borderRadius: {
    primary: "0.25rem",
  },
};

const Theme = ({ children }: any) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
