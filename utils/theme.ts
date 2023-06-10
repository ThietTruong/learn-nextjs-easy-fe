import { red } from "@mui/material/colors";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { Roboto } from "next/font/google";

export const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

// Create a theme instance.
let theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#FF6464",
    },
    secondary: {
      main: "#00A8CC",
      light: "#EDF7FA",
    },
    text: {
      primary: "#21243D",
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: "Heebo, sans-serif",
  },
  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: "md",
      },
      styleOverrides: {
        maxWidthSm: {
          maxWidth: "680px",
          "@media (min-width: 600px)": {
            maxWidth: "680px",
          },
        },
        maxWidthMd: {
          maxWidth: "860px",
          "@media (min-width: 960px)": {
            maxWidth: "860px",
          },
        },
      },
      variants: [],
    },
    MuiLink: {
      defaultProps: {
        underline: "none",
      },
      styleOverrides: {
        root: {
          color: "black",
          "&:hover, &.active": {
            color: "#FF6464",
          },
        },
      },
    },
    MuiTypography: {
      defaultProps: {},
    },
    MuiButton: {
      variants: [
        {
          props: { variant: "contained", color: "primary" },
          style: {
            color: "white",
          },
        },
      ],
    },
    MuiChip: {
      styleOverrides: {
        root: {
          paddingInline: 2,
        },
      },
      variants: [
        {
          props: { color: "secondary" },
          style: {
            color: "white",
            backgroundColor: "#142850",
            fontWeight: "bold",
            fontSize: 16,
          },
        },
      ],
    },
  },
});
// theme.typography.h3 = {
//   fontSize: "2rem",
//   [theme.breakpoints.up("md")]: {
//     fontSize: "3rem",
//   },
// };

theme = responsiveFontSizes(theme);
export default theme;
