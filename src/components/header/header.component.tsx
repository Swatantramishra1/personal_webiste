import React from "react";

import "./header.component.scss";

export const HeaderComponent = () => {

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
   const handleClick = (e: any) => {
        const target = e.target;
        const id = target.innerText.toLowerCase();
        if(id === "resume") {
            window.open("https://www.linkedin.com/in/swatantra3/detail/overlay-view/urn:li:fsd_profileTreasuryMedia:(ACoAAAx_sekB0ho0jeW3Ak_e8GNIAr8mxbw8e9M,1600189911031)/");
            return;
        }
        
        scrollTo(id);
    }

    return (
        <div className="header">
            <div className="logo" onClick={() => scrollTo("home")}>
                S
            </div>
            <div className="menu">
                
                <ol onClick={(e) => handleClick(e) }>
                    <li >About</li>
                    <li >Work</li>
                    <li >Experience</li>
                    <li >Contact</li>
                    <li >Resume</li>
                </ol>
                {/* <div className="about">
                    01. About
                </div> */}
            </div>
        </div>
    )
}