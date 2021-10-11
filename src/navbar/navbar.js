import React, { useState } from "react";
import "./navbar.css";
import LanguageIcon from "@mui/icons-material/Language";
import useOutsideClick from "./OutsideClick";
import {
  makeStyles,
  useTheme,
} from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Drawer from "@material-ui/core/Drawer";
import ClearIcon from "@mui/icons-material/Clear";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import ModalContent from "./modalContent";

const drawerWidth = 250;
const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor:
      theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    color: "black",
    borderRadius: "9px",
    width: "350px",
    height: "470px",
  },
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    flexShrink: 0,
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "black",
    color: "white",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  toolbar: {
    ...theme.mixins.toolbar,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  content: {
    flexGrow: 1,
    backgroundColor:
      theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

// /////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////
function Navbar() {
  const ref = React.useRef();
  useOutsideClick(ref, () => {
    setdropOpen(false);
  });
  const ref2 = React.useRef();
  useOutsideClick(ref2, () => {
    setNavDrop(false);
  });
  const [dropopen, setdropOpen] = useState(false);
  const [NavDrop, setNavDrop] = React.useState(
    false
  );
  const classes = useStyles();
  const theme = useTheme();
  const isMdUp = useMediaQuery(
    theme.breakpoints.up("md")
  );

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" ||
        event.key === "Shift")
    ) {
      return;
    }

    setOpen(!open);
  };
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
    <>
      <header class="header stroke" id="mainNav">
        <a href="/">
          <img
            className="headerLogo"
            src="https://qrty.mobi/static/media/QRTY_logo.d64a028e.svg"
            alt="logo"
          />
        </a>
        <div className="sidebarToggleBtn">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={toggleDrawer}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
        </div>
        <div className="Sidebar">
          <Drawer
            className={classes.drawer}
            variant={
              isMdUp ? "permanent" : "temporary"
            }
            classes={{
              paper: classes.drawerPaper,
            }}
            anchor="left"
            open={open}
            onClose={toggleDrawer}
          >
            <div className={classes.toolbar} />
            <a href="/">
              <img
                className="sidebarLogo"
                src="https://qrty.mobi/static/media/QRTY_logo_white.81875ccc.svg"
                alt="logo"
              />
            </a>
            <span className="crossIcon">
              <ClearIcon
                onClick={() => setOpen(false)}
              />
            </span>

            <div className="sidebarContent">
              <a
                onClick={() =>
                  setdropOpen(!dropopen)
                }
                ref={ref}
              >
                Languages
              </a>
              <div
                id="dropdown"
                className={
                  dropopen
                    ? "open"
                    : "dropdown-content"
                }
              >
                <span
                  className="dropContentSpan"
                  href="#"
                  onClick={() =>
                    setdropOpen(false)
                  }
                >
                  English
                </span>
                <span
                  className="dropContentSpan"
                  href="#"
                  onClick={() =>
                    setdropOpen(false)
                  }
                >
                  English
                </span>{" "}
                <span
                  className="dropContentSpan"
                  href="#"
                  onClick={() =>
                    setdropOpen(false)
                  }
                >
                  English
                </span>{" "}
                <span
                  className="dropContentSpan"
                  href="#"
                  onClick={() =>
                    setdropOpen(false)
                  }
                >
                  English
                </span>{" "}
                <span
                  className="dropContentSpan"
                  href="#"
                  onClick={() =>
                    setdropOpen(false)
                  }
                >
                  English
                </span>
                <span
                  className="dropContentSpan"
                  href="#"
                  onClick={() =>
                    setdropOpen(false)
                  }
                >
                  اردو
                </span>
                <span
                  className="dropContentSpan"
                  href="#"
                  onClick={() =>
                    setdropOpen(false)
                  }
                >
                  پښتو
                </span>
              </div>
              <a>Prices</a>
              <a>FAQS</a>
            </div>
            <hr className="sidebarDivider" />
            <div className="sidebarContent sidebarContentA">
              <a>Log In</a>
            </div>
          </Drawer>
        </div>

        {/* ////////////////////////////////////////////////////////// */}
        <div className="navabc">
          <ul class="main-nav">
            <li>
              <a>
                <span
                  className="lang "
                  onClick={() =>
                    setNavDrop(!NavDrop)
                  }
                  ref={ref2}
                >
                  {" "}
                  <LanguageIcon />
                  Language
                </span>
              </a>
              <div
                id="dropdown"
                className={
                  NavDrop
                    ? "open MainNavDrop"
                    : "dropdown-content"
                }
              >
                <span
                  className="dropContentSpan"
                  href="#"
                  onClick={() =>
                    setdropOpen(false)
                  }
                >
                  English
                </span>
                <span
                  className="dropContentSpan"
                  href="#"
                  onClick={() =>
                    setdropOpen(false)
                  }
                >
                  English
                </span>{" "}
                <span
                  className="dropContentSpan"
                  href="#"
                  onClick={() =>
                    setdropOpen(false)
                  }
                >
                  English
                </span>{" "}
                <span
                  className="dropContentSpan"
                  href="#"
                  onClick={() =>
                    setdropOpen(false)
                  }
                >
                  English
                </span>{" "}
                <span
                  className="dropContentSpan"
                  href="#"
                  onClick={() =>
                    setdropOpen(false)
                  }
                >
                  English
                </span>
                <span
                  className="dropContentSpan"
                  href="#"
                  onClick={() =>
                    setdropOpen(false)
                  }
                >
                  اردو
                </span>
                <span
                  className="dropContentSpan"
                  href="#"
                  onClick={() =>
                    setdropOpen(false)
                  }
                >
                  پښتو
                </span>
              </div>
            </li>
            <li>
              <a href="#">Prices</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Log In</a>
            </li>
            <li>
              <button
                className="RegisterBtn"
                onClick={handleOpen}
              >
                Register
              </button>
            </li>
          </ul>
        </div>
      </header>
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
            <ModalContent
              handleClose={handleClose}
            />
          </div>
        </Fade>
      </Modal>
    </>
  );
}

export default Navbar;
