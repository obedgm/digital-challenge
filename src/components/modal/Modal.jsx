import React from 'react'
import "./modal.scss"
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";


const Modal = ({
    title,
    subTitle,
    text,
    bottomText,
    img,
    onCancel,
    ...rest
}) => {
    
    return (
        <Dialog
        {...rest}
        onClose={onCancel}
        aria-labelledby="confirm-dialog-slide-title"
        aria-describedby="confirm-dialog-slide-description"
        className="modal"
      >

        <DialogContent className="modal-content">
        <DialogTitle id="confirm-dialog-slide-title" className="modal-title">{title}</DialogTitle>
          <DialogContentText className="modal-text" id="confirm-dialog-slide-description">
              {text}
          </DialogContentText>
        </DialogContent>
        <img
        className="modal-img"
        src={img}
        alt="movie"
      />
        <DialogActions>
            <Button onClick={onCancel}>Cancel</Button>
            <Button onClick={onCancel}>Watch Offline</Button>
            <Button onClick={onCancel}>Watch Online</Button>
        </DialogActions>
      </Dialog>
    )
}

export default Modal;
