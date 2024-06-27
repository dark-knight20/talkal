import { Box } from "@mui/material";
import expLogo from "../../assets/experionLogo.png";
import myLLlogo from "../../assets/myLPlogo.png";
import style from "./NavBar.module.css";
import { FaBell } from "react-icons/fa6";
import { FaCircleUser } from "react-icons/fa6";

const NavBar = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#2A3B85",
          height: 80,
          width: 1,
          display: "flex",
          justifyContent: "space-between",
          position:"fixed",
          zIndex:10
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", width: 300 }}>
          <img src={expLogo} alt="" className={style.expLogo} />
        </Box>
        <Box sx={{ width: 300 }}>
          <img src={myLLlogo} alt="" />
        </Box>
        <Box
          sx={{
            width: 300,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
            <Box sx={{marginLeft:18}}><FaBell className={style.icons} />
            <FaCircleUser className={style.icons} /></Box>
          
        </Box>
      </Box>
    </>
  );
};

export default NavBar;
