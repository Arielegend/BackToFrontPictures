import React, { useState } from "react";
import { TopPart } from "./TopPart";
import { GalleryPart } from "./GalleryPart";

/*
MainApp 

    In cahrge of rendering whole application.

    Renders - 
      1. TopPart (H1 Header & Button)
      2. GalleryPart (Grid of pictures, each picture-grid value is 4 out of 12)
*/
export const MainApp = () => {
  // data variable holds the data we fetch from Backend, passing forwoard to Gallery component
  const [data, setData] = useState([]);

  return (
    <div>
      {/*At TopPart we handle the bttn and updating the state variable "data" */}
      <TopPart setData={setData} />
      <br />
      {/*At GalleryPart part we present the pictures*/}
      <GalleryPart data={data} />
    </div>
  );
};
