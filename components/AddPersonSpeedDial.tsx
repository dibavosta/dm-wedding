import * as React from "react";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import { EscalatorWarning, Favorite, Edit } from "@mui/icons-material";
import Box from "@mui/material/Box";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

interface SpeedDialProps {
  onAddPartner: () => void;
  onAddChild: () => void;
}

const useStyles = makeStyles((theme) => ({
  staticTooltipLabel: {
    padding: "2px 4px",
    fontSize: "10px",
    font: "Roboto",
    fontWeight: 500,
  },
  tooltip: {
    backgroundColor: "green",
    placement: "bottom",
  },
}));

function AddPersonSpeedDial(props: SpeedDialProps) {
  const classes = useStyles();

  const [addedPartner, setAddedPartner] = useState(false);
  const [addedChild, setAddedChild] = useState(false);
  const [hideDial, setHideDial] = useState(false);

  const handlePartnerAction = () => {
    console.log("clicked on partner");
    setOpen(false);
    setAddedPartner(true);
  };

  const handleChildAction = () => {
    console.log("clicked on child");
    setOpen(false);
    setAddedChild(true);
  };

  const requestingToClose = () => {
    if (addedChild) {
      setHideDial(true);
      props.onAddChild();
    } else if (addedPartner) {
      setHideDial(true);
      props.onAddPartner();
    }
  };

  const [open, setOpen] = React.useState(false);
  const [hidden, setHidden] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    if (addedChild) {
      setHideDial(true);
      props.onAddChild();
    } else if (addedPartner) {
      setHideDial(true);
      props.onAddPartner();
    }
  };

  return (
    <Box
      sx={{
        height: 55,
        // width: 55,
        zIndex: 1050,
        positon: "relative !important",
        transform: "translateZ(0px)",
        flexGrow: 1,
      }}
    >
      <SpeedDial
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
        ariaLabel="Add a partner or child to the RSVP"
        icon={<SpeedDialIcon openIcon={<Edit />} />}
        direction="up"
        hidden={hideDial}
        sx={{
          "& .MuiFab-primary": {
            width: 40,
            height: 40,
          },
          position: "absolute",
          bottom: 1,
          right: 1,
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
          FabProps={{
            sx: {
              "&:hover": {
                bgcolor: "#8f683d",
              },
            },
          }}
          icon={<Favorite />}
          tooltipTitle="Partner"
          classes={classes}
          tooltipOpen={true}
          onClick={handlePartnerAction}
        />

        <SpeedDialAction
          FabProps={{
            sx: {
              "&:hover": {
                bgcolor: "#8f683d",
              },
            },
          }}
          icon={<EscalatorWarning fontSize="small" />}
          tooltipTitle="Child"
          tooltipOpen={true}
          classes={classes}
          onClick={handleChildAction}
        />
      </SpeedDial>
    </Box>
  );
}

export default AddPersonSpeedDial;
