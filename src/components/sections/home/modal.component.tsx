import React, { useState } from "react";
import {  Modal } from "react-bootstrap";




export const ModalComponent = () => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

   
    return (
 
        <Modal show={show} onHide={handleClose}  size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
         
          <Modal.Body>
          <iframe id="test" width="100%" height="300" scrolling="no" frameBorder="no" allow="autoplay" src="./resume.pdf"></iframe>
          {/* <iframe src="../../../resume.pdf"  frameborder="0"></iframe> */}
          </Modal.Body>
        </Modal>
   
    );
  }