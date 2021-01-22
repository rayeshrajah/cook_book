import React from 'react';
import Intro from './Homepage/Intro';
import { useSelector } from "react-redux";

export default function LandingPage(){
    const allUsers = useSelector((state) => state.userReducers.allUsers);
    console.log(allUsers);
  return (
      <Intro />
  )
}