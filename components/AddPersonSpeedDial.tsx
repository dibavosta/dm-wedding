import * as React from "react";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import { EscalatorWarning, Favorite, Edit } from "@mui/icons-material";
import Box from "@mui/material/Box";

interface SpeedDialProps {
  onAddPartner: () => void;
  onAddChild: () => void;
}

function AddPersonSpeedDial(props: SpeedDialProps) {
  const handlePartnerAction = () => {
    console.log("clicked on partner");
    props.onAddPartner();
  };

  const handleChildAction = () => {
    console.log("clicked on child");
    props.onAddChild();
  };

  return (
    <Box
      sx={{
        height: 55,
        transform: "translateZ(0px)",
        flexGrow: 1,
      }}
    >
      <SpeedDial
        ariaLabel="SpeedDial playground example"
        icon={<SpeedDialIcon />}
        openIcon={<Edit />}
        direction="right"
        sx={{
          "& .MuiFab-primary": {
            width: 40,
            height: 40,
          },
        }}
        FabProps={{
          sx: {
            bgcolor: "#b97b52",
            "&:hover": {
              bgcolor: "#8f683d",
            },
          },
          size: "small",
        }}
      >
        <SpeedDialAction
          sx={{
            width: 30,
            height: 30,
          }}
          FabProps={{
            sx: {
              "&:hover": {
                bgcolor: "#8f683d",
              },
            },
          }}
          icon={<Favorite />}
          tooltipTitle="Partner"
          onClick={handlePartnerAction}
        />
        <SpeedDialAction
          sx={{
            width: 10,
            height: 10,
          }}
          FabProps={{
            sx: {
              "&:hover": {
                bgcolor: "#8f683d",
              },
            },
          }}
          icon={<EscalatorWarning fontSize="small" />}
          tooltipTitle="Child"
          onClick={handleChildAction}
        />
      </SpeedDial>
    </Box>
  );
}

export default AddPersonSpeedDial;
