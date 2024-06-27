import { Box, Button } from "@mui/material";

const SideBar = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#152259",
          height: "100vh",
          width: 240,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          position: "fixed",
          zIndex: -1,
          alignItems: "center",
        }}
      >
        <Box sx={{marginTop:-20,display: "flex",
          flexDirection: "column",
          justifyContent: "center",alignItems: "center"}}>
          <Button
            variant="contained"
            sx={{
              width: 192,
              backgroundColor: "transparent",
              boxShadow: "none",
              "&:hover": { backgroundColor: "#F1A341" },
            }}
          >
            Calendar
          </Button>
          <Button
            variant="contained"
            sx={{
              width: 192,
              backgroundColor: "transparent",
              boxShadow: "none",
              "&:hover": { backgroundColor: "#F1A341" },
            }}
          >
            Overview
          </Button>
          <Button
            variant="contained"
            sx={{
              width: 192,
              backgroundColor: "transparent",
              boxShadow: "none",
              "&:hover": { backgroundColor: "#F1A341" },
            }}
          >
            Statistics
          </Button>
          <Button
            variant="contained"
            sx={{
              width: 192,
              backgroundColor: "transparent",
              boxShadow: "none",
              "&:hover": { backgroundColor: "#F1A341" },
            }}
          >
            Programs
          </Button>
          <Button
            variant="contained"
            sx={{
              width: 192,
              backgroundColor: "transparent",
              boxShadow: "none",
              "&:hover": { backgroundColor: "#F1A341" },
            }}
          >
            Feedback
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default SideBar;
