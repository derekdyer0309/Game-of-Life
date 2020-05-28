import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Container } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransitionsModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button color="primary" onClick={handleOpen}>
        More Information
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
        <Container fixed syle={{border: "none"}}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Founding</h2>
            <p id="transition-modal-description">
              In late 1940, John von Neumann defined life as a creation (as a
              being or organism) which can reproduce itself and simulate a
              Turing machine. Von Neumann was thinking about an engineering
              solution which would use electromagnetic components floating
              randomly in liquid or gas.This turned out not to be realistic
              with the technology available at the time. Stanislaw Ulam invented
              cellular automata, which were intended to simulate von Neumann's
              theoretical electromagnetic constructions. Ulam discussed using
              computers to simulate his cellular automata in a two-dimensional
              lattice in several papers. In parallel, von Neumann attempted to
              construct Ulam's cellular automaton. Although successful, he was
              busy with other projects and left some details unfinished. His
              construction was complicated because it tried to simulate his own
              engineering design. Over time, simpler life constructions were
              provided by other researchers, and published in papers and books.
            </p>
            <Button href="https://www.ics.uci.edu/~welling/teaching/271fall09/Turing-Machine-Life.pdf" color="primary">
                Additional Resources
            </Button>
          </div>
          </Container>
        </Fade>
      </Modal>
    </div>
  );
}
