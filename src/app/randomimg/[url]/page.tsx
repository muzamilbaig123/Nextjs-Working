"use client";
type ParamsTypeDefine = {
    params: {
        url: string
    }
}
import axios from "axios";
import { useEffect, useState } from "react";



export default function RandomImages({ params }: ParamsTypeDefine) {
  const { url } = params;
  const [imgUrl, setImgUrl] = useState('');

  const myFunApi = async () => {
    try {
      const fetchApi = await axios.get("https://random.imagecdn.app/500/150");
      const finalImg = fetchApi.request.responseURL;
      setImgUrl(finalImg);
    } catch (err) {
      console.error("This is an error: " + err);
    }
  };

  useEffect(() => {
      myFunApi();
  }, [url]);

  return (
    <>
        {imgUrl ? <img src={imgUrl} alt="Random Images Urls" /> : <p>Loading..</p>}
    </>
  );
}
