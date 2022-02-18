import React from "react"

import logoreact from "/static/images-components/react.png"

import {
  imageReact,
  containerBottom
} from '../components/layout.module.css'

export default function Bottom() {
  return (
       
      <div className={containerBottom}>
       
       <br />
	   
       <img className={imageReact} src={logoreact} alt="React" />

      </div>
   
  );
}


