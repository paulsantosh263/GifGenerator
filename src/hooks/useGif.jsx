import React, { useEffect, useState } from "react";

import axios from 'axios';

const useGif= (tag) => {
    const [gif, setGif] = useState('');
    const [loading, setLoading] = useState('false');
  
    const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    

  
    async function fechData(tag) {
      
      setLoading(true);
      const { data } = await axios.get(tag ? `${url}&{tag}=${tag}` : url);
      const imageSource = data.data.images.downsized_large.url;
      setGif(imageSource);
      setLoading(false);
    }
  
    useEffect(() => {
      fechData();
    }, []);
  
   return {gif,loading, fechData};
  }


export default useGif;
