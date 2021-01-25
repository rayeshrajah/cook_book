import React from 'react';
import "../styles/LandingPage.scss";
import Intro from './Homepage/Intro';
import Info from './Homepage/Info';
import { useSelector } from "react-redux";

export default function LandingPage(){
    const allUsers = useSelector((state) => state.userReducers.allUsers);
    console.log(allUsers);
  
    return (
    <div className="landing-page-master-container">
      <Intro />
      <Info />
    </div>
  )
}