import React, { useEffect, useState } from "react";
import Spineer from "./Spineer";

import axios from 'axios';
import useGif from "../hooks/useGif";


export default function Random() {
const {gif, loading, fechData} = useGif();
 
  function clickHandler() {
    fechData();
  }

  return (
    <div className='w-1/2  bg-green-500 rounded-lg border border-black
    flex flex-col items-center gap-y-5 mt-[15px]'>

      <h1 className='mt-[15px] text-2xl underline uppercase font-bold'> A Random Gif</h1>

      {
        loading ? (<Spineer />) : (<img src={gif} width="450" />)
      }
      <button onClick={clickHandler} className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px]">

        Generate

      </button>

    </div>
  );
}
