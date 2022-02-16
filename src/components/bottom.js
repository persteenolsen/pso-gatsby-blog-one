import React from "react"

import logoreact from "/static/images-pages/react.png"

import {
  containerBottom
} from '../components/layout.module.css'

export default function Bottom() {
  return (
       
      <div className={containerBottom}>
       
       <br />
       <p>My Blog = Gatsby + React</p>	       
       <img src={logoreact} alt="React" />

      </div>
   
  );
}


