import React, { useState } from "react";
import { Modal } from "react-bootstrap";

import "./header.component.scss";

export const HeaderComponent = () => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const scrollTo = (id: string) => {
        const elem = document.getElementById(id);
        if (!elem) {
            return;
        }
        let config: any = {
            block: "start",
        };
       
            Object.assign(config, {
                behavior: "smooth",
            });
        

        elem.scrollIntoView(true);
    }
   const handleClick = () => {
        // const target = e.target;
        // const id = target.innerText.toLowerCase();
        // if(id === "resume") {
        //     window.open('../../resume.pdf', '_blank', 'fullscreen=yes');
        //     return;
        // }

        // scrollTo(id);

        handleShow();
    }

    return (
        <div className="header">
            <div className="logo" onClick={() => scrollTo("home")}>
                S
            </div>
            <div className="menu">
                
                <button onClick={() => handleClick()}> Resume </button>
                {/* <ol onClick={(e) => handleClick(e) }> */}
                    {/* <li >About</li>
                    <li >Work</li>
                    <li >Experience</li>
                    <li >Contact</li> */}
                    {/* <li >Resume</li> */}
                {/* </ol> */}
                {/* <div className="about">
                    01. About
                </div> */}
            </div>

         

      <Modal show={show} onHide={handleClose}  size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
         
         <Modal.Body>
         <iframe id="test" width="100%" height="300" scrolling="no" frameBorder="no" allow="autoplay" src="./resume.pdf"></iframe>
         {/* <iframe src="../../../resume.pdf"  frameborder="0"></iframe> */}
         </Modal.Body>
       </Modal>
        </div>
    )
}