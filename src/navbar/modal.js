import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import InsertPhotoIcon from "@material-ui/icons/InsertPhoto";
const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    // backgroundColor:
    //   theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    backgroundColor: "#2c3e50",
    // backgroundColor: "#4285f4",
    color: "white",
    borderRadius: "9px",
    width: "50%",
    height: "45%",
  },
}));

export default function TransitionsModal() {
  const classes = useStyles();
  const [
    Modalopen,
    setModalOpen,
  ] = React.useState(false);

  const handleOpen = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };
  const [checked, setChecked] = React.useState(
    false
  );
  const handleClick = () => {
    setChecked(!checked);
  };

  return (
    <div>
      {/* <motion.div */}
      <InsertPhotoIcon
        // fontSize="large"
        onClick={handleOpen}
        style={{
          color: "#2c3e50",
          fontSize: "50px",
          marginTop: "5px",
          cursor: "pointer",
        }}
      />

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={Modalopen}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={Modalopen}>
          <div className={classes.paper}>
            <p>kljdslldsfj</p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
