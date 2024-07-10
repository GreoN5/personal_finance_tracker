import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      50: "#e9f5ff",
      100: "#d0eaff",
      200: "#a1d4ff",
      300: "#72beff",
      400: "#43a8ff",
      500: "#1b92ff",
      600: "#0074e6",
      700: "#0057b4",
      800: "#003a82",
      900: "#001d50",
    },
  },
  fonts: {
    heading: "Poppins, sans-serif",
    body: "Poppins, sans-serif",
    mono: `'Poppins', sans-serif`,
  },
  styles: {
    global: {
      "html, body": {
        height: "100%",
        bg: "gray.50",
        color: "gray.800",
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
      },
      a: {
        color: "brand.500",
        _hover: {
          textDecoration: "underline",
        },
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "bold",
        borderRadius: "md",
      },
      variants: {
        primary: {
          bg: "brand.500",
          color: "white",
          _hover: {
            bg: "brand.600",
          },
        },
        secondary: {
          bg: "gray.200",
          color: "gray.800",
          _hover: {
            bg: "gray.300",
          },
        },
        red: {
          bg: "red.500",
          color: "white",
          _hover: {
            bg: "red.600",
          },
        },
      },
    },
  },
});

export default theme;
