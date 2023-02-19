import * as React from "react";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import Edit from "@mui/icons-material/Edit";
import EscalatorWarning from "@mui/icons-material/EscalatorWarning";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

interface ChildSpeedDialProps {
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

function AddChildSpeedDial(props: ChildSpeedDialProps) {
  const classes = useStyles();

  const [addedChild, setAddedChild] = useState(false);
  const [hideDial, setHideDial] = useState(false);
  const [open, setOpen] = React.useState(false);

  const handleChildAction = () => {
    console.log("clicked on child");
    setOpen(false);
    setAddedChild(true);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (addedChild) {
      setHideDial(true);
      props.onAddChild();
    }
  }, [open]);

  return (
    <Box
      sx={{
        height: 55,
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
        ariaLabel="Add a child to the RSVP"
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

export default AddChildSpeedDial;
