import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core'
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
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
      <Button color="primary" variant="contained" onClick={handleOpen}>
        Rules
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
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Rules</h2>
            <p id="transition-modal-description">
            1) Any live cell with fewer than two live neighbours dies, as if by underpopulation.
            </p>
            <p id="transition-modal-description">
            2) Any live cell with two or three live neighbours lives on to the next generation.
            </p>
            <p id="transition-modal-description">
            3) Any live cell with more than three live neighbours dies, as if by overpopulation.
            </p>
            <p id="transition-modal-description">
            4) Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
            </p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}